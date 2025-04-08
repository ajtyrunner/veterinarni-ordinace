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
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-[#fff4e6] text-[#cc6600] border border-[#ef9533] px-6 py-3 text-center font-semibold shadow-md relative z-50"
        >
          🐾 Hledáme <strong>veterinární sestru</strong>!{' '}
          <Link
            href="/career"
            className="underline text-teal-700 hover:text-teal-600 transition-colors font-semibold"
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
