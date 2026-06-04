import React, { useState, useEffect } from 'react';
import { formatPrice } from '../data/restaurants';

/**
 * TrackingScreen — Theo dõi đơn hàng realtime
 * Map placeholder, timeline 7 trạng thái, driver info, auto-advance
 */
const STATUSES = [
  { label: 'Đã đặt đơn', icon: '📝' },
  { label: 'Quán đang xác nhận', icon: '👨‍🍳' },
  { label: 'Quán đang chuẩn bị món', icon: '🍳' },
  { label: 'Tài xế đang đến quán', icon: '🏍️' },
  { label: 'Tài xế đã lấy món', icon: '📦' },
  { label: 'Đang giao đến bạn', icon: '🚀' },
  { label: 'Giao thành công', icon: '✅' },
];

export default function TrackingScreen({ state, dispatch }) {
  const [statusIdx, setStatusIdx] = useState(state.orderStatus || 0);
  const order = state.currentOrder;

  // Auto-advance status every 3 seconds
  useEffect(() => {
    if (statusIdx >= STATUSES.length - 1) return;
    const timer = setTimeout(() => {
      const next = statusIdx + 1;
      setStatusIdx(next);
      dispatch({ type: 'UPDATE_ORDER_STATUS', status: next });
    }, 3000);
    return () => clearTimeout(timer);
  }, [statusIdx, dispatch]);

  const isComplete = statusIdx >= STATUSES.length - 1;
  const etaMinutes = Math.max(0, (STATUSES.length - 1 - statusIdx) * 4);

  return (
    <div className="screen-wrapper">
      <div className="screen-header">
        <button className="back-btn" onClick={() => dispatch({ type: 'GO_BACK' })}>←</button>
        <span className="header-title">Theo dõi đơn hàng</span>
      </div>

      {/* Map placeholder */}
      <div className="map-placeholder">
        <div className="map-markers">
          <span className="map-marker restaurant" title="Quán">🏪</span>
          <span className="map-marker driver" title="Tài xế">🏍️</span>
          <span className="map-marker destination" title="Bạn">📍</span>
        </div>
      </div>

      {/* ETA */}
      {!isComplete && (
        <div style={{ 
          padding: '12px 16px', 
          background: '#fff5f2', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between' 
        }}>
          <div>
            <div style={{ fontSize: 13, color: '#6b6b7b' }}>Thời gian dự kiến</div>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#ee4d2d' }}>{etaMinutes} phút</div>
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#ee4d2d' }}>
            {STATUSES[statusIdx].icon} {STATUSES[statusIdx].label}
          </div>
        </div>
      )}

      {/* Driver info */}
      <div className="driver-card">
        <div className="driver-avatar">🧑</div>
        <div className="driver-info">
          <div className="driver-name">Trần Minh Đức</div>
          <div className="driver-plate">59-H1 · 234.56 · Honda Wave</div>
        </div>
        <div className="driver-actions">
          <button className="driver-action-btn" title="Gọi điện">📞</button>
          <button className="driver-action-btn" title="Nhắn tin">💬</button>
        </div>
      </div>

      {/* Timeline */}
      <div className="timeline">
        {STATUSES.map((s, i) => {
          let cls = '';
          if (i < statusIdx) cls = 'completed';
          else if (i === statusIdx) cls = 'active';
          return (
            <div key={i} className={`timeline-item ${cls}`}>
              <div className="timeline-dot">
                {i < statusIdx ? '✓' : i === statusIdx ? s.icon : ''}
              </div>
              <div className="timeline-content">
                <div className="timeline-title">{s.label}</div>
                {i <= statusIdx && (
                  <div className="timeline-time">
                    {i < statusIdx ? `${(statusIdx - i) * 3} phút trước` : 'Hiện tại'}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Order details */}
      {order && (
        <div style={{ padding: '0 16px 16px' }}>
          <div className="divider" style={{ marginBottom: 12 }} />
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Chi tiết đơn hàng</div>
          <div style={{ fontSize: 13, color: '#6b6b7b', marginBottom: 4 }}>
            Mã đơn: {order.id}
          </div>
          {order.items.map((item, i) => (
            <div key={i} style={{ fontSize: 13, color: '#4a4a5a', padding: '2px 0' }}>
              {item.quantity}x {item.name} — {formatPrice(item.totalPrice)}
            </div>
          ))}
          <div style={{ fontSize: 14, fontWeight: 700, color: '#ee4d2d', marginTop: 8 }}>
            Tổng: {formatPrice(order.total)}
          </div>
        </div>
      )}

      {/* Complete CTA */}
      {isComplete && (
        <div className="cta-bar">
          <button 
            className="btn btn-primary btn-block"
            style={{ padding: '14px', fontSize: 16 }}
            onClick={() => dispatch({ type: 'NAVIGATE', screen: 'rating' })}
          >
            ⭐ Đánh giá đơn hàng
          </button>
        </div>
      )}
    </div>
  );
}
