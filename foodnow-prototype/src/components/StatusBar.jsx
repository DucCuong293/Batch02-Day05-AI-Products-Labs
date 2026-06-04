import React from 'react';

/**
 * StatusBar — iOS-style status bar (giờ, signal, wifi, pin)
 */
export default function StatusBar() {
  return (
    <div className="status-bar">
      <span className="time">09:41</span>
      <div className="icons">
        {/* Signal */}
        <svg viewBox="0 0 17 12" fill="currentColor">
          <rect x="0" y="9" width="3" height="3" rx="0.5"/>
          <rect x="4.5" y="6" width="3" height="6" rx="0.5"/>
          <rect x="9" y="3" width="3" height="9" rx="0.5"/>
          <rect x="13.5" y="0" width="3" height="12" rx="0.5"/>
        </svg>
        {/* WiFi */}
        <svg viewBox="0 0 16 12" fill="currentColor">
          <path d="M8 9.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM8 5.5c2.5 0 4.5 1.2 5.8 3l-1.5 1c-1-1.3-2.6-2.2-4.3-2.2S5.7 8.2 4.7 9.5l-1.5-1c1.3-1.8 3.3-3 5.8-3zM8 1.5c3.6 0 6.7 1.6 8.5 4l-1.5 1C13.5 4.3 10.9 3.2 8 3.2S2.5 4.3 1 6.5L-.5 5.5C1.3 3.1 4.4 1.5 8 1.5z"/>
        </svg>
        {/* Battery */}
        <svg viewBox="0 0 25 12" fill="currentColor">
          <rect x="0" y="0.5" width="21" height="11" rx="2" fill="none" stroke="currentColor" strokeWidth="1"/>
          <rect x="22" y="3.5" width="2.5" height="5" rx="1" opacity="0.4"/>
          <rect x="1.5" y="2" width="18" height="8" rx="1"/>
        </svg>
      </div>
    </div>
  );
}
