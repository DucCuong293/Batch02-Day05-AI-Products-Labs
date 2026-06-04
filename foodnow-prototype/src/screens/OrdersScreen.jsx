import React from 'react';
import { formatPrice } from '../data/restaurants';

/**
 * OrdersScreen — Lịch sử đơn hàng
 * Active orders, order history, reorder & support buttons
 */
export default function OrdersScreen({ state, dispatch }) {
  const { orderHistory, currentOrder } = state;

  const handleReorder = (order) => {
    // Clear current cart and add items from order
    dispatch({ type: 'CLEAR_CART' });
    order.items.forEach(item => {
      dispatch({ 
        type: 'ADD_TO_CART', 
        item: { ...item, cartId: Date.now() + Math.random() }
      });
    });
    dispatch({ type: 'NAVIGATE', screen: 'cart' });
  };

  return (
    <div className="screen-wrapper">
      <div className="screen-header">
        <span className="header-title" style={{ paddingLeft: 4 }}>Đơn hàng của tôi</span>
      </div>

      {/* Active order */}
      {currentOrder && state.orderStatus < 7 && (
        <>
          <div className="section-title">Đang giao</div>
          <div className="order-card" style={{ borderColor: '#ee4d2d' }}>
            <div className="order-card-header">
              <span className="order-card-name">{currentOrder.restaurant?.name}</span>
              <span className="order-card-status active">Đang giao</span>
            </div>
            <div className="order-card-body">
              <div className="order-card-items">
                {currentOrder.items.map((it, i) => (
                  <span key={i}>{it.quantity}x {it.name}{i < currentOrder.items.length - 1 ? ', ' : ''}</span>
                ))}
              </div>
              <div className="order-card-footer">
                <span className="order-card-total">{formatPrice(currentOrder.total)}</span>
                <span className="order-card-date">{currentOrder.date} · {currentOrder.time}</span>
              </div>
            </div>
            <div className="order-card-actions">
              <button 
                style={{ color: '#ee4d2d', border: '1px solid #ee4d2d', borderRadius: 6 }}
                onClick={() => dispatch({ type: 'NAVIGATE', screen: 'tracking' })}
              >
                Theo dõi
              </button>
              <button 
                style={{ color: '#6b6b7b', border: '1px solid #d1d1dc', borderRadius: 6 }}
                onClick={() => dispatch({ type: 'NAVIGATE', screen: 'support' })}
              >
                Hỗ trợ
              </button>
            </div>
          </div>
        </>
      )}

      {/* Order history */}
      <div className="section-title">Lịch sử đơn hàng</div>
      
      {orderHistory.length === 0 && !currentOrder ? (
        <div className="empty-state">
          <div className="empty-icon">📋</div>
          <div className="empty-title">Chưa có đơn hàng nào</div>
          <div className="empty-text">Đặt món đầu tiên nào!</div>
          <button 
            className="btn btn-primary"
            onClick={() => dispatch({ type: 'NAVIGATE', screen: 'home' })}
          >
            Khám phá món ngon
          </button>
        </div>
      ) : (
        orderHistory.map((order, idx) => (
          <div key={idx} className="order-card">
            <div className="order-card-header">
              <span className="order-card-name">{order.restaurant?.name}</span>
              <span className="order-card-status success">Hoàn thành</span>
            </div>
            <div className="order-card-body">
              <div className="order-card-items">
                {order.items.map((it, i) => (
                  <span key={i}>{it.quantity}x {it.name}{i < order.items.length - 1 ? ', ' : ''}</span>
                ))}
              </div>
              <div className="order-card-footer">
                <span className="order-card-total">{formatPrice(order.total)}</span>
                <span className="order-card-date">{order.date}</span>
              </div>
            </div>
            <div className="order-card-actions">
              <button 
                style={{ color: '#ee4d2d', border: '1px solid #ee4d2d', borderRadius: 6 }}
                onClick={() => handleReorder(order)}
              >
                🔄 Đặt lại
              </button>
              <button 
                style={{ color: '#6b6b7b', border: '1px solid #d1d1dc', borderRadius: 6 }}
                onClick={() => dispatch({ type: 'NAVIGATE', screen: 'support' })}
              >
                Hỗ trợ
              </button>
            </div>
          </div>
        ))
      )}

      <div style={{ height: 20 }} />
    </div>
  );
}
