import React, { useState } from 'react';
import { formatPrice } from '../data/restaurants';

/**
 * CheckoutScreen — Xác nhận đơn hàng
 * Địa chỉ, danh sách món, ghi chú, phương thức thanh toán, CTA đặt hàng
 */
export default function CheckoutScreen({ state, dispatch }) {
  const [loading, setLoading] = useState(false);
  const [noteForShop, setNoteForShop] = useState('');
  const [noteForDriver, setNoteForDriver] = useState('');

  const { cartItems, cartRestaurant, selectedVoucher, paymentMethod } = state;
  const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const deliveryFee = cartRestaurant?.deliveryFee || 0;
  const voucherDiscount = selectedVoucher?.discount || 0;
  const total = Math.max(0, subtotal + deliveryFee - voucherDiscount);

  const paymentMethods = [
    { id: 'cash', name: 'Tiền mặt', icon: '💵' },
    { id: 'wallet', name: 'Ví điện tử', icon: '📱' },
    { id: 'card', name: 'Thẻ ngân hàng', icon: '💳' },
  ];

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) return;
    setLoading(true);
    // Simulate order placement
    setTimeout(() => {
      dispatch({ 
        type: 'PLACE_ORDER', 
        order: {
          id: 'ORD-' + Date.now().toString(36).toUpperCase(),
          items: [...cartItems],
          restaurant: cartRestaurant,
          subtotal,
          deliveryFee,
          voucherDiscount,
          total,
          paymentMethod,
          noteForShop,
          noteForDriver,
          address: state.selectedAddress,
          date: new Date().toLocaleDateString('vi-VN'),
          time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
        }
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="screen-wrapper">
      <div className="screen-header">
        <button className="back-btn" onClick={() => dispatch({ type: 'GO_BACK' })}>←</button>
        <span className="header-title">Xác nhận đơn hàng</span>
      </div>

      {/* Delivery address */}
      <div className="checkout-section">
        <div className="checkout-section-title">📍 Địa chỉ giao hàng</div>
        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 2 }}>Nguyễn Văn A</div>
        <div style={{ fontSize: 13, color: '#6b6b7b', marginBottom: 2 }}>0912 345 678</div>
        <div style={{ fontSize: 13, color: '#6b6b7b' }}>{state.selectedAddress}</div>
        <button style={{ fontSize: 13, color: '#ee4d2d', fontWeight: 600, marginTop: 6 }}>
          Sửa địa chỉ
        </button>
      </div>

      {/* Order items */}
      <div className="checkout-section">
        <div className="checkout-section-title">🏪 {cartRestaurant?.name}</div>
        {cartItems.map((item) => (
          <div key={item.cartId} className="checkout-row">
            <span className="label">{item.quantity}x {item.name}</span>
            <span className="value">{formatPrice(item.totalPrice)}</span>
          </div>
        ))}

        {/* Notes */}
        <div style={{ marginTop: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: '#4a4a5a', marginBottom: 4 }}>Ghi chú cho quán:</div>
          <input
            className="note-input"
            type="text"
            placeholder="Ví dụ: ít ớt, không hành..."
            value={noteForShop}
            onChange={(e) => setNoteForShop(e.target.value)}
          />
        </div>
        <div style={{ marginTop: 8 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: '#4a4a5a', marginBottom: 4 }}>Ghi chú cho tài xế:</div>
          <input
            className="note-input"
            type="text"
            placeholder="Ví dụ: gọi khi đến nơi..."
            value={noteForDriver}
            onChange={(e) => setNoteForDriver(e.target.value)}
          />
        </div>
      </div>

      {/* Payment method */}
      <div className="checkout-section">
        <div className="checkout-section-title">💰 Phương thức thanh toán</div>
        {paymentMethods.map((pm) => (
          <div
            key={pm.id}
            className={`payment-option ${paymentMethod === pm.id ? 'selected' : ''}`}
            onClick={() => dispatch({ type: 'SET_PAYMENT', method: pm.id })}
          >
            <div className="payment-radio" />
            <span>{pm.icon} {pm.name}</span>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="checkout-section">
        <div className="checkout-section-title">📋 Tổng kết</div>
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
            <span className="label" style={{ color: '#ee4d2d' }}>🎫 Voucher</span>
            <span className="value" style={{ color: '#ee4d2d' }}>-{formatPrice(voucherDiscount)}</span>
          </div>
        )}
        <div className="checkout-row" style={{ borderTop: '1px solid #e8e8ef', paddingTop: 10, marginTop: 6 }}>
          <span style={{ fontWeight: 800, fontSize: 16 }}>Tổng cộng</span>
          <span className="checkout-total">{formatPrice(total)}</span>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-bar">
        <button 
          className="btn btn-primary btn-block"
          style={{ padding: '14px', fontSize: 16 }}
          onClick={handlePlaceOrder}
          disabled={loading}
        >
          {loading ? 'Đang đặt hàng...' : `Đặt hàng · ${formatPrice(total)}`}
        </button>
      </div>

      {/* Loading overlay */}
      {loading && (
        <div className="loading-overlay">
          <div className="spinner" />
          <div className="loading-text">Đang xử lý đơn hàng...</div>
        </div>
      )}
    </div>
  );
}
