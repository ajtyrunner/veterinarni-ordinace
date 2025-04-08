'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function AlertBadge() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 right-0 z-50 bg-[#ffbe76] text-gray-900 text-sm md:text-base py-3 px-4 shadow-md flex items-center justify-between"
        >
          <div>
            🐾 Hledáme novou posilu do týmu!{' '}
            <Link
              href="/career"
              className="font-semibold underline text-teal-800 hover:text-teal-600 transition"
            >
              Více zde
            </Link>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="ml-4 text-lg font-bold text-gray-700 hover:text-gray-900"
            aria-label="Zavřít oznámení"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
