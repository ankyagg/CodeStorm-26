"use client";

import CommitteeSection from "./CommitteeSection";
import { headTeachers, seniorCommittee, juniorCommittee } from "../data/committeeMembers";
import "./Committee.css";

export default function CommitteeShowcase() {
  return (
    <div className="cc-showcase-grid">
      <CommitteeSection title="Head Teachers" members={headTeachers} />
      <CommitteeSection title="Senior Committee" members={seniorCommittee} />
      <CommitteeSection title="Junior Committee" members={juniorCommittee} />
    </div>
  );
}
