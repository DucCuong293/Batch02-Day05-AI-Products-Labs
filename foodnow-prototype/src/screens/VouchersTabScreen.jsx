import React, { useState } from 'react';
import { vouchers } from '../data/vouchers';
import { formatPrice } from '../data/restaurants';

/**
 * VouchersTabScreen — Kho voucher của user (tab Voucher ở bottom nav)
 * Voucher còn dùng được, sắp hết hạn, đã hết hạn
 */
export default function VouchersTabScreen({ state, dispatch }) {
  const [activeTab, setActiveTab] = useState('available');
  const [savedVouchers, setSavedVouchers] = useState(
    vouchers.reduce((acc, v) => ({ ...acc, [v.id]: v.saved }), {})
  );

  const tabs = [
    { id: 'available', label: 'Có thể dùng' },
    { id: 'expiring', label: 'Sắp hết hạn' },
    { id: 'expired', label: 'Đã hết hạn' },
  ];

  // Simulate expiring vouchers
  const expiringVouchers = vouchers.filter(v => v.id === 'v4' || v.id === 'v5');
  const expiredVouchers = [
    { ...vouchers[0], id: 'exp1', name: 'Freeship 10.000đ (hết hạn)', expiry: '01/06/2026' },
  ];

  const displayVouchers = activeTab === 'available' 
    ? vouchers 
    : activeTab === 'expiring' 
    ? expiringVouchers 
    : expiredVouchers;

  return (
    <div className="screen-wrapper">
      <div className="screen-header">
        <span className="header-title" style={{ paddingLeft: 4 }}>Kho voucher</span>
      </div>

      {/* Tabs */}
      <div className="voucher-tab-header">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`voucher-tab-item ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Voucher list */}
      <div style={{ paddingTop: 12 }}>
        {displayVouchers.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🎫</div>
            <div className="empty-title">Không có voucher</div>
          </div>
        ) : (
          displayVouchers.map((v) => (
            <div key={v.id} className={`voucher-card ${activeTab === 'expired' ? 'disabled' : ''}`}>
              <div className="voucher-left">
                <span className="voucher-icon">{v.icon}</span>
                <span className="voucher-amount">
                  {v.type === 'percent' ? `${v.discountPercent}%` : formatPrice(v.maxDiscount)}
                </span>
              </div>
              <div className="voucher-right">
                <div className="voucher-name">{v.name}</div>
                <div className="voucher-condition">{v.condition}</div>
                <div className="voucher-expiry">HSD: {v.expiry}</div>
              </div>
              <div className="voucher-actions">
                {activeTab !== 'expired' ? (
                  <button
                    className={`apply-btn ${savedVouchers[v.id] ? 'applied' : ''}`}
                    onClick={() => setSavedVouchers(prev => ({ ...prev, [v.id]: !prev[v.id] }))}
                  >
                    {savedVouchers[v.id] ? '✓ Đã lưu' : 'Lưu'}
                  </button>
                ) : (
                  <span style={{ fontSize: 11, color: '#b0b0be' }}>Hết hạn</span>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      <div style={{ height: 20 }} />
    </div>
  );
}
