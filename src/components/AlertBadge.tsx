'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  {
    id: 'easter',
    text: (
      <>
        🐣 <strong>Otevírací doba o Velikonocích:</strong> Čt 17.4. <strong>8–11 15–18</strong>, Pá 18.4. <strong>zavřeno</strong>, So 19.4. <strong>9–11</strong>, Ne 20.4. <strong>zavřeno</strong>, Po 21.4. <strong>zavřeno</strong>. Přejeme všem krásné Velikonoce! 🐰🌷
      </>
    ),
  },
  {
    id: 'nurse',
    text: (
      <>
        🐾 Hledáme <strong>veterinární sestru</strong>!{' '}
        <Link
          href="/career"
          className="underline text-teal-700 hover:text-teal-600 transition-colors"
        >
          Více zde
        </Link>{' '}
        🐾
      </>
    ),
  },
];

const AlertBadge: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const rotate = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 12000); // každých 12 sekund změna
    return () => clearInterval(rotate);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key={messages[index].id}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#fff4e6] text-[#cc6600] border-y border-[#ef9533] px-4 py-2 md:px-6 md:py-3 text-center text-sm md:text-base font-medium shadow-md relative z-30"
        >
          {messages[index].text}
          <button
            onClick={() => setVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#cc6600] font-bold hover:text-[#ef9533]"
            aria-label="Zavřít upozornění"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AlertBadge;
