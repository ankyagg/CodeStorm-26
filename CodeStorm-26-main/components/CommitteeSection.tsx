"use client";

import CommitteeCard, { CommitteeMember } from "./CommitteeCard";
import "./Committee.css";

interface CommitteeSectionProps {
  title: string;
  members: CommitteeMember[];
}

export default function CommitteeSection({ title, members }: CommitteeSectionProps) {
  return (
    <section className="cc-section">
      <h2 className="cc-section-title">{title}</h2>
      <CommitteeCard members={members} divisionTitle={title} />
    </section>
  );
}
