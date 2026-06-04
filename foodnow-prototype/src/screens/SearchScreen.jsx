import React, { useState, useEffect, useRef } from 'react';
import { restaurants } from '../data/restaurants';

/**
 * SearchScreen — Tìm kiếm quán ăn, filter theo keyword/category
 */
export default function SearchScreen({ state, dispatch }) {
  const [query, setQuery] = useState(state.searchQuery || '');
  const [activeFilter, setActiveFilter] = useState(state.selectedCategory || null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const filters = ['Gần tôi', 'Đánh giá cao', 'Giao nhanh', 'Có khuyến mãi', 'Freeship'];

  const filteredRestaurants = restaurants.filter((r) => {
    const matchQuery = query === '' || 
      r.name.toLowerCase().includes(query.toLowerCase()) ||
      r.category.toLowerCase().includes(query.toLowerCase()) ||
      r.menu.some(m => m.name.toLowerCase().includes(query.toLowerCase()));
    
    let matchCategory = true;
    if (activeFilter === 'Gần tôi') matchCategory = parseFloat(r.distance) <= 1.5;
    else if (activeFilter === 'Đánh giá cao') matchCategory = r.rating >= 4.5;
    else if (activeFilter === 'Giao nhanh') matchCategory = r.tags.some(t => t.includes('nhanh') || t.includes('Gần'));
    else if (activeFilter === 'Có khuyến mãi') matchCategory = !!r.discountText;
    else if (activeFilter === 'Freeship') matchCategory = r.tags.includes('Freeship') || r.deliveryFee <= 10000;
    else if (activeFilter && !filters.includes(activeFilter)) {
      // Category from home
      matchCategory = r.category === activeFilter;
    }

    return matchQuery && matchCategory;
  });

  return (
    <div className="screen-wrapper">
      {/* Search input */}
      <div className="search-input-wrap">
        <button 
          className="back-btn" 
          onClick={() => {
            dispatch({ type: 'SET_CATEGORY', category: null });
            dispatch({ type: 'GO_BACK' });
          }}
          style={{ fontSize: 18 }}
        >
          ←
        </button>
        <input
          ref={inputRef}
          className="search-input"
          type="text"
          placeholder="Tìm món, quán ăn, trà sữa…"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            dispatch({ type: 'SET_SEARCH', query: e.target.value });
          }}
        />
        {query && (
          <button onClick={() => { setQuery(''); dispatch({ type: 'SET_SEARCH', query: '' }); }} 
            style={{ fontSize: 16, color: '#8e8e9e' }}>✕</button>
        )}
      </div>

      {/* Filter chips */}
      <div className="filter-chips">
        {(state.selectedCategory && !filters.includes(state.selectedCategory)) && (
          <button
            className={`filter-chip ${activeFilter === state.selectedCategory ? 'active' : ''}`}
            onClick={() => setActiveFilter(
              activeFilter === state.selectedCategory ? null : state.selectedCategory
            )}
          >
            {state.selectedCategory}
          </button>
        )}
        {filters.map((f) => (
          <button
            key={f}
            className={`filter-chip ${activeFilter === f ? 'active' : ''}`}
            onClick={() => setActiveFilter(activeFilter === f ? null : f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Results */}
      {filteredRestaurants.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <div className="empty-title">Không tìm thấy kết quả</div>
          <div className="empty-text">Thử tìm với từ khóa khác nhé!</div>
        </div>
      ) : (
        <div>
          <div style={{ padding: '12px 16px 4px', fontSize: 13, color: '#6b6b7b' }}>
            Tìm thấy {filteredRestaurants.length} quán
          </div>
          {filteredRestaurants.map((rest) => (
            <div
              key={rest.id}
              className="restaurant-card"
              onClick={() => {
                dispatch({ type: 'SELECT_RESTAURANT', restaurant: rest });
                dispatch({ type: 'NAVIGATE', screen: 'restaurant' });
              }}
            >
              <img className="rest-img" src={rest.image} alt={rest.name}
                onError={(e) => { e.target.src = 'https://via.placeholder.com/200/f4f4f8/999?text=Restaurant'; }} />
              <div className="rest-info">
                <div className="rest-name">{rest.name}</div>
                <div className="rest-meta">
                  <span className="rating">⭐ {rest.rating}</span>
                  <span>📍 {rest.distance}</span>
                  <span>🕐 {rest.deliveryTime}</span>
                </div>
                <div className="rest-tags">
                  {rest.tags.map((tag, i) => (
                    <span key={i} className="rest-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
