import React from 'react';

/**
 * BottomNav — Bottom navigation bar (Home, Orders, Vouchers, Notifications, Account)
 * Highlights active tab, shows badge on notifications
 */

const tabs = [
  { id: 'home', label: 'Trang chủ', icon: '🏠' },
  { id: 'orders', label: 'Đơn hàng', icon: '📋' },
  { id: 'vouchers-tab', label: 'Voucher', icon: '🎫' },
  { id: 'notifications', label: 'Thông báo', icon: '🔔' },
  { id: 'account', label: 'Tài khoản', icon: '👤' },
];

export default function BottomNav({ currentScreen, onNavigate, notificationCount = 2 }) {
  // Map screen names to tab ids for active state
  const getActiveTab = () => {
    if (['home', 'search', 'restaurant', 'cart', 'checkout', 'tracking', 'rating', 'support', 'ai-suggest'].includes(currentScreen)) return 'home';
    if (['orders'].includes(currentScreen)) return 'orders';
    if (['vouchers-tab'].includes(currentScreen)) return 'vouchers-tab';
    if (['notifications'].includes(currentScreen)) return 'notifications';
    if (['account'].includes(currentScreen)) return 'account';
    return 'home';
  };

  const activeTab = getActiveTab();

  return (
    <nav className="bottom-nav">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`bottom-nav-item ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onNavigate(tab.id)}
        >
          <span className="nav-icon">{tab.icon}</span>
          <span>{tab.label}</span>
          {tab.id === 'notifications' && notificationCount > 0 && (
            <span className="nav-badge">{notificationCount}</span>
          )}
        </button>
      ))}
    </nav>
  );
}
