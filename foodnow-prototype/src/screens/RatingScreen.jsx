import React, { useState } from 'react';

/**
 * RatingScreen — Đánh giá đơn hàng
 * Star rating cho quán + tài xế, quick tags, text review
 */
export default function RatingScreen({ state, dispatch }) {
  const [shopRating, setShopRating] = useState(0);
  const [driverRating, setDriverRating] = useState(0);
  const [selectedTags, setSelectedTags] = useState([]);
  const [review, setReview] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const positiveTags = ['Giao nhanh', 'Món ngon', 'Đóng gói tốt', 'Tài xế thân thiện'];
  const negativeTags = ['Món bị nguội', 'Thiếu món', 'Giao trễ', 'Đóng gói kém'];

  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = () => {
    setSubmitted(true);
    // Add to order history after rating
    setTimeout(() => {
      dispatch({ type: 'FINISH_ORDER' });
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="screen-wrapper">
        <div className="success-state" style={{ minHeight: 500 }}>
          <div className="success-icon">🎉</div>
          <div className="success-title">Cảm ơn bạn đã đánh giá!</div>
          <div className="success-text">
            Đánh giá của bạn giúp cải thiện dịch vụ FoodNow
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

  const StarRow = ({ label, value, onChange }) => (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>{label}</div>
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map(n => (
          <span 
            key={n} 
            className={`star ${n <= value ? 'filled' : 'empty'}`}
            onClick={() => onChange(n)}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="screen-wrapper">
      <div className="screen-header">
        <button className="back-btn" onClick={() => dispatch({ type: 'GO_BACK' })}>←</button>
        <span className="header-title">Đánh giá đơn hàng</span>
      </div>

      <div style={{ padding: '20px 16px', textAlign: 'center' }}>
        <div style={{ fontSize: 40, marginBottom: 8 }}>🍽️</div>
        <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>
          {state.currentOrder?.restaurant?.name || 'Quán ăn'}
        </div>
        <div style={{ fontSize: 13, color: '#6b6b7b' }}>
          Đơn hàng {state.currentOrder?.id}
        </div>
      </div>

      <div style={{ padding: '0 16px' }}>
        <StarRow label="Đánh giá quán ăn" value={shopRating} onChange={setShopRating} />
        <StarRow label="Đánh giá tài xế" value={driverRating} onChange={setDriverRating} />
      </div>

      {/* Quick tags */}
      <div style={{ padding: '0 0 16px' }}>
        <div style={{ fontSize: 14, fontWeight: 600, padding: '0 16px 8px' }}>Nhận xét nhanh</div>
        <div className="rating-tags">
          {[...positiveTags, ...negativeTags].map(tag => (
            <button
              key={tag}
              className={`rating-tag ${selectedTags.includes(tag) ? 'selected' : ''}`}
              onClick={() => toggleTag(tag)}
            >
              {positiveTags.includes(tag) ? '👍' : '👎'} {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Text review */}
      <div style={{ padding: '0 0 16px' }}>
        <div style={{ fontSize: 14, fontWeight: 600, padding: '0 16px 8px' }}>Viết nhận xét</div>
        <textarea
          className="form-textarea"
          placeholder="Chia sẻ trải nghiệm của bạn..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows={3}
        />
      </div>

      {/* Submit */}
      <div className="cta-bar">
        <button 
          className="btn btn-primary btn-block"
          style={{ padding: '14px', fontSize: 16 }}
          onClick={handleSubmit}
          disabled={shopRating === 0}
        >
          Gửi đánh giá
        </button>
      </div>
    </div>
  );
}
