import React from 'react';
import { notifications } from '../data/vouchers';

/**
 * NotificationsScreen — Thông báo
 */
export default function NotificationsScreen({ state, dispatch }) {
  return (
    <div className="screen-wrapper">
      <div className="screen-header">
        <span className="header-title" style={{ paddingLeft: 4 }}>Thông báo</span>
      </div>

      {notifications.map((notif) => (
        <div 
          key={notif.id} 
          className={`notification-item ${notif.unread ? 'unread' : ''}`}
        >
          <div className="notif-icon">{notif.icon}</div>
          <div className="notif-content">
            <div className="notif-title">{notif.title}</div>
            <div className="notif-text">{notif.text}</div>
            <div className="notif-time">{notif.time}</div>
          </div>
        </div>
      ))}

      <div style={{ height: 20 }} />
    </div>
  );
}
