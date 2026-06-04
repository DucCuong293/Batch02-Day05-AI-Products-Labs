import React from 'react';
import { vouchers, calculateDiscount } from '../data/vouchers';
import { formatPrice } from '../data/restaurants';

/**
 * VoucherScreen — Chọn voucher áp dụng cho đơn hàng
 * Hiển thị eligible/disabled states
 */
export default function VoucherScreen({ state, dispatch }) {
  const subtotal = state.cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const itemCount = state.cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="screen-wrapper">
      <div className="screen-header">
        <button className="back-btn" onClick={() => dispatch({ type: 'GO_BACK' })}>←</button>
        <span className="header-title">Chọn voucher</span>
      </div>

      <div style={{ padding: '8px 16px 12px', fontSize: 13, color: '#6b6b7b' }}>
        Tạm tính đơn hàng: <strong style={{ color: '#ee4d2d' }}>{formatPrice(subtotal)}</strong>
      </div>

      {vouchers.map((v) => {
        const result = calculateDiscount(v, subtotal, itemCount, state.paymentMethod);
        const isApplied = state.selectedVoucher?.id === v.id;

        return (
          <div key={v.id} className={`voucher-card ${!result.eligible && !isApplied ? 'disabled' : ''}`} style={!result.eligible ? { opacity: 0.6 } : {}}>
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
              {!result.eligible && result.reason && (
                <div style={{ fontSize: 11, color: '#ef4444', marginTop: 2, fontWeight: 500 }}>
                  ⚠️ {result.reason}
                </div>
              )}
            </div>
            <div className="voucher-actions">
              {result.eligible ? (
                <button 
                  className={`apply-btn ${isApplied ? 'applied' : ''}`}
                  onClick={() => {
                    if (isApplied) {
                      dispatch({ type: 'SELECT_VOUCHER', voucher: null });
                    } else {
                      dispatch({ 
                        type: 'SELECT_VOUCHER', 
                        voucher: { ...v, discount: result.discount }
                      });
                      dispatch({ type: 'GO_BACK' });
                    }
                  }}
                >
                  {isApplied ? '✓ Đã áp' : 'Áp dụng'}
                </button>
              ) : (
                <span style={{ fontSize: 11, color: '#b0b0be', whiteSpace: 'nowrap' }}>Chưa đủ ĐK</span>
              )}
            </div>
          </div>
        );
      })}

      <div style={{ height: 20 }} />
    </div>
  );
}
