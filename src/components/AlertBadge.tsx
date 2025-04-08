'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const AlertBadge: React.FC = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-yellow-400 text-black py-3 px-4 text-center font-semibold shadow-md relative z-50">
      📣 Hledáme novou <strong>veterinární sestru</strong>!{' '}
      <Link href="/career" className="underline hover:text-white transition-colors">
        Více zde
      </Link>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-black font-bold hover:text-white"
        aria-label="Zavřít oznámení"
      >
        ✕
      </button>
    </div>
  );
};

export default AlertBadge;
