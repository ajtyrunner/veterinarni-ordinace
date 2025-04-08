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
          className="fixed bottom-6 right-6 bg-[#fff4e6] text-[#cc6600] border border-[#ef9533] px-6 py-4 rounded-xl shadow-xl w-[300px] z-50"
        >
          <div className="relative">
            <button
              onClick={() => setVisible(false)}
              className="absolute top-1 right-1 text-[#cc6600] hover:text-[#ef9533] font-bold text-lg"
              aria-label="Zavřít upozornění"
            >
              ✕
            </button>
            <p className="text-sm font-semibold">
              🐾 Hledáme <strong>veterinární sestru</strong>!{' '}
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
