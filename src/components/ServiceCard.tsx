import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <h2 className="text-2xl font-semibold text-teal-600">{title}</h2>
      <p className="text-gray-700 mt-4">{description}</p>
    </div>
  );
};

export default ServiceCard;
