"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Code, PenTool, Megaphone, Settings } from "lucide-react";

const teams = [
  {
    id: "tech",
    name: "Tech Team",
    icon: <Code size={24} />,
    lead: "Alex Mercer",
    members: ["Sarah Jenkins", "Michael Chang", "Priya Patel", "David Rodriguez"],
    description: "The architects behind the storm. Building platforms, maintaining servers, and writing code that rarely breaks (mostly)."
  },
  {
    id: "design",
    name: "Design Team",
    icon: <PenTool size={24} />,
    lead: "Jordan Lee",
    members: ["Emma Wilson", "Marcus Johnson", "Sophia Chen"],
    description: "Pixel pushers and visual magicians. Ensuring every interface looks premium, sleek, and absolutely stunning."
  },
  {
    id: "pr",
    name: "PR & Outreach",
    icon: <Megaphone size={24} />,
    lead: "Taylor Smith",
    members: ["Chris Evans", "Jessica Alba", "Tom Hardy"],
    description: "The voice of Codestorm. Managing social media, partnerships, and making sure the hype never dies down."
  },
  {
    id: "ops",
    name: "Operations",
    icon: <Settings size={24} />,
    lead: "Morgan Davies",
    members: ["Ryan Gosling", "Emma Stone", "Brad Pitt"],
    description: "The glue that holds everything together. Logistics, planning, and ensuring the event runs without a single hitch."
  }
];

export default function TeamSection() {
  const [expandedId, setExpandedId] = useState<string | null>(teams[0].id);

  return (
    <section className="section" id="team">
      <div className="section__container">
        <motion.div
          className="section__header section__header--center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section__label">The People</span>
          <h2 className="heading-lg section__title">
            Meet the <span className="text-red">Minds</span>.
          </h2>
          <p className="text-body section__description mx-auto" style={{ maxWidth: "600px", margin: "0 auto" }}>
            A hackathon is only as good as the people behind it. Meet the dedicated teams working late nights to make Codestorm a reality.
          </p>
        </motion.div>

        <div className="team-container">
          {teams.map((team) => {
            const isExpanded = expandedId === team.id;

            return (
              <motion.div
                key={team.id}
                layout
                onClick={() => setExpandedId(isExpanded ? null : team.id)}
                className={`team-card ${isExpanded ? "team-card--expanded" : ""}`}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <motion.div layout="position" className="team-card__header">
                  <div className={`team-card__icon ${isExpanded ? "text-red" : "text-gray"}`}>
                    {team.icon}
                  </div>
                  <motion.h3 layout="position" className="team-card__title">
                    {team.name}
                  </motion.h3>
                </motion.div>

                <AnimatePresence mode="popLayout">
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="team-card__content"
                    >
                      <p className="team-card__desc">{team.description}</p>

                      <div className="team-card__roster">
                        <div className="team-card__lead">
                          <span className="team-card__role">Team Lead</span>
                          <span className="team-card__name">{team.lead}</span>
                        </div>
                        
                        <div className="team-card__members">
                          <span className="team-card__role">Members</span>
                          <ul className="team-card__member-list">
                            {team.members.map((member, i) => (
                              <li key={i}>{member}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
