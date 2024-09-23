import React from 'react';
import Image from 'next/image';

interface JobListingProps {
  title: string;
  sections: {
    heading: string;
    content: string[];
  }[];
  imageUrl: string;
}

const JobListing: React.FC<JobListingProps> = ({ title, sections, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-3xl mx-auto"> {/* max-w-3xl omezuje šířku */}
      <Image
        src={imageUrl}
        alt={title}
        width={150}
        height={150}
        className="mx-auto rounded-full"
      />
      <h2 className="text-2xl font-semibold text-teal-600 mt-4">{title}</h2>
      {sections.map((section, index) => (
        <div key={index} className="mt-4 text-left">
          <h3 className="font-bold text-gray-700">{section.heading}</h3>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            {section.content.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default JobListing;
