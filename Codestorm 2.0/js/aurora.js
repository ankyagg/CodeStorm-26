/* ═══════════════════════════════════════════════
   Aurora — raw WebGL port of the ReactBits/OGL
   Aurora component used on the CodeStorm homepage.
   colorStops: ["#d60028", "#000000", "#98001b"]
   ═══════════════════════════════════════════════ */

(function () {
  "use strict";

  const COLOR_STOPS = ["#d60028", "#000000", "#98001b"];
  const AMPLITUDE = 1.0;
  const BLEND = 0.5;
  const SPEED = 0.5;

  const VERT = `
    attribute vec2 position;
    void main() {
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `;

  const FRAG = `
    precision highp float;

    uniform float uTime;
    uniform float uAmplitude;
    uniform vec3  uColorStops[3];
    uniform vec2  uResolution;
    uniform float uBlend;

    vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }

    float snoise(vec2 v) {
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                          -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy));
      vec2 x0 = v - i + dot(i, C.xx);
      vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);

      vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                     + i.x + vec3(0.0, i1.x, 1.0));

      vec3 m = max(0.5 - vec3(dot(x0, x0),
                              dot(x12.xy, x12.xy),
                              dot(x12.zw, x12.zw)), 0.0);
      m = m * m;
      m = m * m;

      vec3 x  = 2.0 * fract(p * C.www) - 1.0;
      vec3 h  = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);

      vec3 g;
      g.x  = a0.x * x0.x  + h.x * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    vec3 colorRamp(float factor) {
      float p0 = 0.0; float p1 = 0.5; float p2 = 1.0;
      if (factor <= p1) {
        return mix(uColorStops[0], uColorStops[1], clamp((factor - p0) / (p1 - p0), 0.0, 1.0));
      }
      return mix(uColorStops[1], uColorStops[2], clamp((factor - p1) / (p2 - p1), 0.0, 1.0));
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / uResolution;

      vec3 rampColor = colorRamp(uv.x);

      float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
      height = exp(height);
      height = (uv.y * 2.0 - height + 0.2);

      float intensity = 0.6 * height;
      float midPoint  = 0.20;
      float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);

      vec3 auroraColor = intensity * rampColor;
      gl_FragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
    }
  `;

  function hexToRgb(hex) {
    const n = parseInt(hex.replace("#", ""), 16);
    return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
  }

  function initAurora(canvas) {
    const gl = canvas.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: true,
      antialias: true,
    });
    if (!gl) {
      // Graceful fallback: static red gradient
      canvas.style.background =
        "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(214,0,40,0.35), transparent 70%)";
      return;
    }

    function compile(type, source) {
      const s = gl.createShader(type);
      gl.shaderSource(s, source);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error("Aurora shader error:", gl.getShaderInfoLog(s));
      }
      return s;
    }

    const program = gl.createProgram();
    gl.attachShader(program, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(program);
    gl.useProgram(program);

    // Fullscreen triangle
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );
    const posLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "uTime");
    const uAmplitude = gl.getUniformLocation(program, "uAmplitude");
    const uResolution = gl.getUniformLocation(program, "uResolution");
    const uBlend = gl.getUniformLocation(program, "uBlend");
    const uColorStops = gl.getUniformLocation(program, "uColorStops");

    const stops = COLOR_STOPS.flatMap(hexToRgb);
    gl.uniform3fv(uColorStops, new Float32Array(stops));
    gl.uniform1f(uAmplitude, AMPLITUDE);
    gl.uniform1f(uBlend, BLEND);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
    }
    resize();
    window.addEventListener("resize", resize);

    let start = performance.now();
    function frame(now) {
      const t = ((now - start) / 1000) * SPEED;
      gl.uniform1f(uTime, t);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("aurora-canvas");
    if (canvas) initAurora(canvas);
  });
})();
