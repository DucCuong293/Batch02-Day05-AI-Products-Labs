import React from 'react';

/**
 * PhoneFrame — Khung điện thoại mockup bao quanh nội dung app
 * Bo góc lớn, viền đen, notch camera kiểu Dynamic Island
 */
export default function PhoneFrame({ children }) {
  return (
    <div className="phone-frame">
      <div className="phone-screen">
        {/* Dynamic Island / Notch */}
        <div className="phone-notch">
          <div className="camera-dot" />
        </div>
        {children}
      </div>
    </div>
  );
}
