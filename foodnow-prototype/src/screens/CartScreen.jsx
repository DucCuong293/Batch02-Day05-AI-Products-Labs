import React from 'react';
import { formatPrice } from '../data/restaurants';

/**
 * CartScreen — Giỏ hàng
 * Danh sách món, tùy chỉnh, tạm tính, voucher, tổng tiền
 */
export default function CartScreen({ state, dispatch }) {
  const { cartItems, cartRestaurant, selectedVoucher } = state;

  const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const deliveryFee = cartRestaurant?.deliveryFee || 0;
  const voucherDiscount = selectedVoucher?.discount || 0;
  const total = Math.max(0, subtotal + deliveryFee - voucherDiscount);

  if (cartItems.length === 0) {
    return (
      <div className="screen-wrapper">
        <div className="screen-header">
          <button className="back-btn" onClick={() => dispatch({ type: 'GO_BACK' })}>←</button>
          <span className="header-title">Giỏ hàng</span>
        </div>
        <div className="empty-state">
          <div className="empty-icon">🛒</div>
          <div className="empty-title">Giỏ hàng của bạn đang trống</div>
          <div className="empty-text">Hãy thêm món ngon vào giỏ hàng nào!</div>
          <button 
            className="btn btn-primary"
            onClick={() => dispatch({ type: 'NAVIGATE', screen: 'home' })}
          >
            Khám phá món ngon
          </button>
        </div>
      </div>
    );
  }

  // Format options for display
  const formatOptions = (item) => {
    const parts = [];
    Object.entries(item.selectedOptions || {}).forEach(([key, opts]) => {
      if (opts.length > 0) {
        parts.push(opts.map(o => o.name).join(', '));
      }
    });
    if (item.note) parts.push(`"${item.note}"`);
    return parts.join(' · ');
  };

  return (
    <div className="screen-wrapper">
      <div className="screen-header">
        <button className="back-btn" onClick={() => dispatch({ type: 'GO_BACK' })}>←</button>
        <span className="header-title">Giỏ hàng</span>
      </div>

      {/* Restaurant name */}
      <div style={{ padding: '8px 16px', borderBottom: '1px solid #e8e8ef' }}>
        <div style={{ fontSize: 15, fontWeight: 600 }}>🏪 {cartRestaurant?.name}</div>
      </div>

      {/* Cart items */}
      {cartItems.map((item) => (
        <div key={item.cartId} className="cart-item">
          <div className="cart-item-header">
            <span className="cart-item-name">{item.name}</span>
            <button 
              className="cart-item-remove" 
              onClick={() => dispatch({ type: 'REMOVE_FROM_CART', cartId: item.cartId })}
            >
              ✕
            </button>
          </div>
          {formatOptions(item) && (
            <div className="cart-item-options">{formatOptions(item)}</div>
          )}
          <div className="cart-item-bottom">
            <span className="cart-item-price">{formatPrice(item.totalPrice)}</span>
            <div className="qty-selector">
              <button onClick={() => dispatch({ type: 'UPDATE_QUANTITY', cartId: item.cartId, delta: -1 })}>
                −
              </button>
              <span className="qty-value">{item.quantity}</span>
              <button onClick={() => dispatch({ type: 'UPDATE_QUANTITY', cartId: item.cartId, delta: 1 })}>
                +
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="divider" />

      {/* Price breakdown */}
      <div style={{ padding: 16 }}>
        <div className="checkout-row">
          <span className="label">Tạm tính</span>
          <span className="value">{formatPrice(subtotal)}</span>
        </div>
        <div className="checkout-row">
          <span className="label">Phí giao hàng</span>
          <span className="value">{formatPrice(deliveryFee)}</span>
        </div>
        {selectedVoucher && (
          <div className="checkout-row">
            <span className="label" style={{ color: '#ee4d2d' }}>🎫 {selectedVoucher.name}</span>
            <span className="value" style={{ color: '#ee4d2d' }}>-{formatPrice(voucherDiscount)}</span>
          </div>
        )}

        {/* Voucher button */}
        <button 
          style={{ 
            width: '100%', padding: '10px', marginTop: 8, marginBottom: 8,
            border: '1px dashed #ee4d2d', borderRadius: 8, 
            color: '#ee4d2d', fontWeight: 600, fontSize: 13,
            background: selectedVoucher ? '#fff5f2' : 'transparent'
          }}
          onClick={() => dispatch({ type: 'NAVIGATE', screen: 'voucher' })}
        >
          🎫 {selectedVoucher ? `Đổi voucher (đang áp: ${selectedVoucher.name})` : 'Chọn voucher'}
        </button>

        <div className="checkout-row" style={{ borderTop: '1px solid #e8e8ef', paddingTop: 12, marginTop: 8 }}>
          <span style={{ fontWeight: 700, fontSize: 16 }}>Tổng cộng</span>
          <span className="checkout-total">{formatPrice(total)}</span>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-bar">
        <button 
          className="btn btn-primary btn-block"
          style={{ padding: '14px', fontSize: 16 }}
          onClick={() => dispatch({ type: 'NAVIGATE', screen: 'checkout' })}
        >
          Thanh toán · {formatPrice(total)}
        </button>
      </div>
    </div>
  );
}
