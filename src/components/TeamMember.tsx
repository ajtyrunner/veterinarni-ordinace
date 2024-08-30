import React from 'react';
import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageUrl: string; // Přidáno pro vložení URL obrázku
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, description, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <Image
        src={imageUrl}
        alt={name}
        width={150}
        height={150}
        className="mx-auto rounded-full"
      />
      <h2 className="text-2xl font-semibold text-teal-600 mt-4">{name}</h2>
      <p className="text-gray-700 mt-2 font-bold">{role}</p>
      <p className="text-gray-700 mt-4 text-left whitespace-pre-line">{description}</p>
    </div>
  );
};

export default TeamMember;
