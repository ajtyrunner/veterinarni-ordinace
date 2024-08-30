import React from 'react';

interface ButtonProps {
  text: string;
  href: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, href, className }) => {
  return (
    <a
      href={href}
      className={`inline-block bg-teal-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-teal-600 transition-all duration-300 ${className}`}
    >
      {text}
    </a>
  );
};

export default Button;
