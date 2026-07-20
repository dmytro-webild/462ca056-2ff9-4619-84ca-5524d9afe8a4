// Created by add_section_from_catalog (TeamDetailedCards).

import React from 'react';
import TeamDetailedCards from '@/components/sections/team/TeamDetailedCards';

export default function TeamSection(): React.JSX.Element {
  return (
    <div data-webild-section="team" data-section="team" id="team">
      <TeamDetailedCards
        tag="Meet the Team"
        title="Foundations Digital"
        members={[{"socialLinks":[],"description":"Driven to help local businesses in the Palm Beach County area thrive by optimizing their websites for a stronger, more trustworthy reach.","name":"Owner","imageSrc":"https://storage.googleapis.com/webild/users/user_3GlTUuzZkXul2x0WRvmULvVx84K/uploaded-1784553191435-hc42e9ex.png","role":"Founder, Foundations Digital"}]}
        textAnimation="slide-up"
        description="We are dedicated to building digital trust and driving meaningful results for our clients."
      />
    </div>
  );
}
