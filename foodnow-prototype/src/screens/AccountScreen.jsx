import React from 'react';

/**
 * AccountScreen — Tài khoản người dùng
 */

const menuItems = [
  { icon: '📍', text: 'Địa chỉ đã lưu' },
  { icon: '💳', text: 'Phương thức thanh toán' },
  { icon: '❤️', text: 'Quán yêu thích' },
  { icon: '🎫', text: 'Voucher của tôi' },
  { icon: '📞', text: 'Trung tâm hỗ trợ' },
  { icon: '⚙️', text: 'Cài đặt' },
  { icon: '📜', text: 'Điều khoản sử dụng' },
  { icon: '🔒', text: 'Chính sách bảo mật' },
];

export default function AccountScreen({ state, dispatch }) {
  return (
    <div className="screen-wrapper">
      {/* Account header */}
      <div className="account-header">
        <div className="account-avatar">👤</div>
        <div>
          <div className="account-name">Nguyễn Văn A</div>
          <div className="account-phone">0912 345 678</div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ 
        display: 'flex', padding: '16px', gap: 12, 
        borderBottom: '8px solid #f4f4f8' 
      }}>
        <div style={{ 
          flex: 1, textAlign: 'center', padding: '12px', 
          background: '#fff5f2', borderRadius: 10 
        }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: '#ee4d2d' }}>
            {state.orderHistory.length}
          </div>
          <div style={{ fontSize: 11, color: '#6b6b7b' }}>Đơn hàng</div>
        </div>
        <div style={{ 
          flex: 1, textAlign: 'center', padding: '12px', 
          background: '#f0fdf4', borderRadius: 10 
        }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: '#22c55e' }}>5</div>
          <div style={{ fontSize: 11, color: '#6b6b7b' }}>Voucher</div>
        </div>
        <div style={{ 
          flex: 1, textAlign: 'center', padding: '12px', 
          background: '#eff6ff', borderRadius: 10 
        }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: '#3b82f6' }}>3</div>
          <div style={{ fontSize: 11, color: '#6b6b7b' }}>Yêu thích</div>
        </div>
      </div>

      {/* Menu items */}
      {menuItems.map((item, i) => (
        <div 
          key={i} 
          className="account-menu-item"
          onClick={() => {
            if (item.text === 'Trung tâm hỗ trợ') {
              dispatch({ type: 'NAVIGATE', screen: 'support' });
            }
          }}
        >
          <span className="menu-icon">{item.icon}</span>
          <span className="menu-text">{item.text}</span>
          <span className="menu-arrow">›</span>
        </div>
      ))}

      {/* Logout */}
      <div 
        className="account-menu-item" 
        style={{ color: '#ef4444', marginTop: 8, borderTop: '8px solid #f4f4f8' }}
      >
        <span className="menu-icon">🚪</span>
        <span className="menu-text" style={{ fontWeight: 600 }}>Đăng xuất</span>
      </div>

      {/* App version */}
      <div style={{ 
        textAlign: 'center', padding: '20px', 
        fontSize: 12, color: '#b0b0be' 
      }}>
        FoodNow v1.0.0 — Prototype
      </div>
    </div>
  );
}
