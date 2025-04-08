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
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 right-6 max-w-sm w-[90%] sm:w-[360px] bg-[#fff4e6] text-[#cc6600] border border-[#ef9533] px-6 py-4 rounded-xl shadow-xl z-50 sm:bottom-6 sm:right-6 left-1/2 sm:left-auto transform sm:transform-none -translate-x-1/2 sm:translate-x-0"
        >
          <div className="relative">
            <button
              onClick={() => setVisible(false)}
              className="absolute top-2 right-2 text-[#cc6600] hover:text-[#ef9533] font-bold text-xl"
              aria-label="Zavřít upozornění"
            >
              ✕
            </button>
            <p className="text-sm font-medium text-center leading-snug">
              🐾 <strong>Hledáme veterinární sestru!</strong> <br />
              <Link
                href="/career"
                className="underline text-teal-700 hover:text-teal-600 transition-colors"
              >
                Více zde
              </Link>{' '}
              🐾
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AlertBadge;
