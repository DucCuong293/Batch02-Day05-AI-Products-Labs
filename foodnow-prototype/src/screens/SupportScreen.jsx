import React, { useState } from 'react';

/**
 * SupportScreen — Hỗ trợ đơn hàng
 * Issue categories, description form, photo upload, success state
 */
const issues = [
  { id: 1, text: 'Thiếu món', icon: '🍽️' },
  { id: 2, text: 'Sai món', icon: '❌' },
  { id: 3, text: 'Món bị đổ/vỡ', icon: '💧' },
  { id: 4, text: 'Tài xế giao trễ', icon: '⏰' },
  { id: 5, text: 'Không liên hệ được tài xế', icon: '📵' },
  { id: 6, text: 'Vấn đề thanh toán', icon: '💰' },
  { id: 7, text: 'Vấn đề voucher', icon: '🎫' },
  { id: 8, text: 'Khác', icon: '💬' },
];

export default function SupportScreen({ state, dispatch }) {
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="screen-wrapper">
        <div className="screen-header">
          <button className="back-btn" onClick={() => dispatch({ type: 'GO_BACK' })}>←</button>
          <span className="header-title">Hỗ trợ</span>
        </div>
        <div className="success-state" style={{ minHeight: 400 }}>
          <div className="success-icon">📨</div>
          <div className="success-title">Yêu cầu hỗ trợ đã được ghi nhận</div>
          <div className="success-text">
            Chúng tôi sẽ phản hồi bạn trong vòng 24 giờ. Cảm ơn bạn đã liên hệ!
          </div>
          <button 
            className="btn btn-primary"
            onClick={() => dispatch({ type: 'NAVIGATE', screen: 'home' })}
          >
            Về trang chủ
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="screen-wrapper">
      <div className="screen-header">
        <button className="back-btn" onClick={() => dispatch({ type: 'GO_BACK' })}>←</button>
        <span className="header-title">Trung tâm hỗ trợ</span>
      </div>

      {!selectedIssue ? (
        <>
          <div style={{ padding: '12px 16px', fontSize: 14, fontWeight: 600 }}>
            Bạn cần hỗ trợ vấn đề gì?
          </div>
          {issues.map((issue) => (
            <div
              key={issue.id}
              className="support-option"
              onClick={() => setSelectedIssue(issue)}
            >
              <span className="support-icon">{issue.icon}</span>
              <span className="support-text">{issue.text}</span>
              <span className="support-arrow">›</span>
            </div>
          ))}
        </>
      ) : (
        <div style={{ padding: 16 }}>
          <div style={{ 
            display: 'flex', alignItems: 'center', gap: 8, 
            marginBottom: 16, padding: '8px 12px',
            background: '#f4f4f8', borderRadius: 8
          }}>
            <span>{selectedIssue.icon}</span>
            <span style={{ fontWeight: 600 }}>{selectedIssue.text}</span>
            <button 
              style={{ marginLeft: 'auto', fontSize: 12, color: '#ee4d2d' }}
              onClick={() => setSelectedIssue(null)}
            >
              Đổi
            </button>
          </div>

          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Mô tả chi tiết</div>
          <textarea
            className="form-textarea"
            placeholder="Mô tả vấn đề bạn gặp phải..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            style={{ width: '100%', margin: 0 }}
          />

          {/* Photo upload */}
          <div style={{ fontSize: 14, fontWeight: 600, marginTop: 16, marginBottom: 8 }}>
            Ảnh chụp (nếu có)
          </div>
          <div className="upload-area" style={{ margin: 0 }}>
            <div className="upload-icon">📷</div>
            <div className="upload-text">Nhấn để chọn ảnh</div>
            <input type="file" accept="image/*" style={{ display: 'none' }} />
          </div>

          <button 
            className="btn btn-primary btn-block"
            style={{ marginTop: 20, padding: '14px' }}
            onClick={handleSubmit}
          >
            Gửi yêu cầu hỗ trợ
          </button>
        </div>
      )}
    </div>
  );
}
