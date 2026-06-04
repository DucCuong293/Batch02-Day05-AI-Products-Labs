import React, { useState, useEffect, useRef } from 'react';
import { restaurants, categories } from '../data/restaurants';

/**
 * HomeScreen — Trang chủ app FoodNow
 * Header, search bar, banner carousel, categories, recommended restaurants, AI suggestion
 */
export default function HomeScreen({ state, dispatch }) {
  const [showAI, setShowAI] = useState(false);
  const [aiChoice, setAiChoice] = useState(null);
  const [aiResults, setAiResults] = useState([]);
  const bannerRef = useRef(null);

  // Auto-scroll banner
  useEffect(() => {
    const el = bannerRef.current;
    if (!el) return;
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % 3;
      const slideWidth = el.firstChild?.offsetWidth || 0;
      el.scrollTo({ left: (slideWidth + 10) * idx, behavior: 'smooth' });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const banners = [
    { title: '🚚 Freeship hôm nay', subtitle: 'Miễn phí giao hàng cho mọi đơn!', emoji: '🎉' },
    { title: '🔥 Deal trưa giảm 50%', subtitle: 'Hàng ngàn món từ 15K', emoji: '🍔' },
    { title: '👨‍👩‍👧‍👦 Combo tiết kiệm', subtitle: 'Đặt nhóm giá tốt hơn', emoji: '🍕' },
  ];

  const aiOptions = [
    { id: 'full', text: 'Ăn no', icon: '🍖', filter: r => r.category === 'Cơm' || r.category === 'Bún/Phở' },
    { id: 'light', text: 'Ăn nhẹ', icon: '🥪', filter: r => r.category === 'Ăn vặt' || r.category === 'Cà phê' },
    { id: 'healthy', text: 'Healthy', icon: '🥗', filter: r => r.category === 'Đồ chay' },
    { id: 'cheap', text: 'Dưới 50.000đ', icon: '💰', filter: r => r.menu.some(m => m.price <= 50000) },
    { id: 'fast', text: 'Giao nhanh', icon: '⚡', filter: r => r.tags.includes('Giao nhanh') || r.tags.includes('Giao siêu nhanh') || r.tags.includes('Gần bạn') },
    { id: 'drink', text: 'Đồ uống', icon: '🧋', filter: r => r.category === 'Trà sữa' || r.category === 'Cà phê' },
  ];

  const handleAISelect = (option) => {
    setAiChoice(option.id);
    const results = restaurants.filter(option.filter).slice(0, 3);
    if (results.length === 0) {
      // Fallback: show top-rated
      setAiResults(restaurants.sort((a, b) => b.rating - a.rating).slice(0, 3));
    } else {
      setAiResults(results);
    }
  };

  const handleCartBadge = state.cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="screen-wrapper">
      {/* Header */}
      <div className="home-header">
        <div className="address-row">
          <div>
            <div className="address-label">Giao đến</div>
            <div className="address-text" onClick={() => {}}>
              📍 {state.selectedAddress} ▾
            </div>
          </div>
          <div className="header-icons">
            <button 
              className="header-icon-btn"
              onClick={() => dispatch({ type: 'NAVIGATE', screen: 'notifications' })}
            >
              🔔
            </button>
            <button 
              className="header-icon-btn"
              onClick={() => dispatch({ type: 'NAVIGATE', screen: 'cart' })}
              style={{ position: 'relative' }}
            >
              🛒
              {handleCartBadge > 0 && (
                <span style={{
                  position: 'absolute', top: -4, right: -4,
                  background: '#fff', color: '#ee4d2d',
                  fontSize: 9, fontWeight: 800,
                  width: 18, height: 18, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>{handleCartBadge}</span>
              )}
            </button>
          </div>
        </div>

        {/* Search bar */}
        <div 
          className="home-search-bar"
          onClick={() => dispatch({ type: 'NAVIGATE', screen: 'search' })}
        >
          <span className="search-icon">🔍</span>
          <span className="search-placeholder">Tìm món, quán ăn, trà sữa…</span>
        </div>
      </div>

      {/* Banner Carousel */}
      <div className="banner-carousel">
        <div className="banner-track" ref={bannerRef}>
          {banners.map((b, i) => (
            <div key={i} className="banner-slide">
              <div className="banner-text">
                <div className="banner-title">{b.title}</div>
                <div className="banner-subtitle">{b.subtitle}</div>
              </div>
              <span className="banner-emoji">{b.emoji}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Category Grid */}
      <div className="section-title">Danh mục</div>
      <div className="category-grid">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            className="category-item"
            onClick={() => {
              dispatch({ type: 'SET_CATEGORY', category: cat.name });
              dispatch({ type: 'NAVIGATE', screen: 'search' });
            }}
          >
            <div className="cat-icon">{cat.icon}</div>
            <span className="cat-name">{cat.name}</span>
          </div>
        ))}
      </div>

      {/* AI Suggestion Button */}
      <button className="ai-suggest-btn" onClick={() => setShowAI(true)}>
        <span className="ai-icon">✨</span>
        <span>Gợi ý món cho tôi</span>
        <span style={{ marginLeft: 'auto', opacity: 0.7, fontSize: 12 }}>AI</span>
      </button>

      {/* Recommended Restaurants */}
      <div className="section-title">Quán ngon gần bạn</div>
      {restaurants.map((rest) => (
        <div
          key={rest.id}
          className="restaurant-card"
          onClick={() => {
            dispatch({ type: 'SELECT_RESTAURANT', restaurant: rest });
            dispatch({ type: 'NAVIGATE', screen: 'restaurant' });
          }}
        >
          <img 
            className="rest-img" 
            src={rest.image} 
            alt={rest.name}
            onError={(e) => { e.target.src = 'https://via.placeholder.com/200/f4f4f8/999?text=Restaurant'; }}
          />
          <div className="rest-info">
            <div className="rest-name">{rest.name}</div>
            <div className="rest-meta">
              <span className="rating">⭐ {rest.rating}</span>
              <span>📍 {rest.distance}</span>
              <span>🕐 {rest.deliveryTime}</span>
              <span>🚚 {rest.deliveryFee === 0 ? 'Freeship' : (rest.deliveryFee / 1000) + 'K'}</span>
            </div>
            <div className="rest-tags">
              {rest.tags.map((tag, i) => (
                <span key={i} className="rest-tag">{tag}</span>
              ))}
              {rest.discountText && (
                <span className="rest-tag">{rest.discountText}</span>
              )}
            </div>
          </div>
        </div>
      ))}

      <div style={{ height: 20 }} />

      {/* AI Suggestion Modal */}
      {showAI && (
        <>
          <div className="modal-backdrop" onClick={() => { setShowAI(false); setAiChoice(null); setAiResults([]); }} />
          <div className="bottom-sheet" style={{ maxHeight: '75%' }}>
            <div className="bottom-sheet-handle" />
            <div style={{ padding: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>✨🍽️</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Gợi ý món cho tôi</h3>
              <p style={{ fontSize: 13, color: '#6b6b7b' }}>Bạn muốn ăn gì hôm nay?</p>
            </div>
            
            {!aiChoice ? (
              <div>
                {aiOptions.map(opt => (
                  <div key={opt.id} className="ai-option" onClick={() => handleAISelect(opt)}>
                    <span className="ai-opt-icon">{opt.icon}</span>
                    <span className="ai-opt-text">{opt.text}</span>
                    <span style={{ marginLeft: 'auto', color: '#b0b0be' }}>›</span>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ padding: '0 16px 24px' }}>
                <p style={{ fontSize: 13, fontWeight: 600, color: '#ee4d2d', marginBottom: 12, textAlign: 'center' }}>
                  🎯 Gợi ý dành cho bạn
                </p>
                {aiResults.map(rest => (
                  <div 
                    key={rest.id} 
                    className="restaurant-card"
                    style={{ border: '1px solid #e8e8ef', borderRadius: 12, marginBottom: 8 }}
                    onClick={() => {
                      setShowAI(false);
                      setAiChoice(null);
                      dispatch({ type: 'SELECT_RESTAURANT', restaurant: rest });
                      dispatch({ type: 'NAVIGATE', screen: 'restaurant' });
                    }}
                  >
                    <img className="rest-img" src={rest.image} alt={rest.name}
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/200/f4f4f8/999?text=Food'; }} />
                    <div className="rest-info">
                      <div className="rest-name">{rest.name}</div>
                      <div className="rest-meta">
                        <span className="rating">⭐ {rest.rating}</span>
                        <span>{rest.deliveryTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
                <button 
                  className="btn btn-outline btn-block" 
                  onClick={() => { setAiChoice(null); setAiResults([]); }}
                  style={{ marginTop: 8 }}
                >
                  ← Chọn lại
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
