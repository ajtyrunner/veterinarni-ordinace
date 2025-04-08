'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const AlertBadge: React.FC = () => {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#fff4e6] text-[#cc6600] border-y border-[#ef9533] px-4 py-2 md:px-6 md:py-3 text-center text-sm md:text-base font-medium shadow-md relative z-30"
        >
          🐾 Hledáme <strong>veterinární sestru</strong>!{' '}
          <Link
            href="/career"
            className="underline text-teal-700 hover:text-teal-600 transition-colors"
          >
            Více zde
          </Link>{' '}
          🐾
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
