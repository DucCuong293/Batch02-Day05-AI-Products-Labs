import React, { useState } from 'react';
import { formatPrice } from '../data/restaurants';
import FoodOptionModal from '../components/FoodOptionModal';

/**
 * RestaurantScreen — Chi tiết quán ăn + menu
 * Cover image, info, voucher tags, menu tabs, food items, mini cart bar
 */
export default function RestaurantScreen({ state, dispatch }) {
  const rest = state.selectedRestaurant;
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeMenuTab, setActiveMenuTab] = useState('Tất cả');

  if (!rest) return null;

  // Group menu by category
  const menuCategories = ['Tất cả', ...new Set(rest.menu.map(m => m.category))];
  const displayedItems = activeMenuTab === 'Tất cả' 
    ? rest.menu 
    : rest.menu.filter(m => m.category === activeMenuTab);

  // Cart items for this restaurant
  const cartItemsForRest = state.cartItems.filter(ci => ci.restaurantId === rest.id);
  const cartTotal = cartItemsForRest.reduce((sum, ci) => sum + ci.totalPrice, 0);
  const cartCount = cartItemsForRest.reduce((sum, ci) => sum + ci.quantity, 0);

  const handleAddToCart = (item) => {
    // Check if adding from different restaurant
    if (state.cartItems.length > 0 && state.cartRestaurant?.id !== rest.id) {
      if (window.confirm('Giỏ hàng hiện có món từ quán khác. Bạn có muốn xóa giỏ hàng cũ và thêm món mới?')) {
        dispatch({ type: 'CLEAR_CART' });
      } else {
        return;
      }
    }
    dispatch({ 
      type: 'ADD_TO_CART', 
      item: { ...item, restaurantId: rest.id, restaurantName: rest.name } 
    });
  };

  return (
    <div className="screen-wrapper" style={{ paddingBottom: cartCount > 0 ? 56 : 0 }}>
      {/* Cover & Back */}
      <div className="rest-detail-header">
        <img 
          className="cover-img" 
          src={rest.coverImage} 
          alt={rest.name}
          onError={(e) => { e.target.src = 'https://via.placeholder.com/800x400/f4f4f8/999?text=Restaurant'; }}
        />
        <button className="back-float" onClick={() => dispatch({ type: 'GO_BACK' })}>←</button>
      </div>

      {/* Restaurant info */}
      <div className="rest-detail-info">
        <h2 className="rest-detail-name">{rest.name}</h2>
        <div className="rest-detail-meta">
          <span>⭐ {rest.rating} ({rest.ratingCount}+)</span>
          <span>📍 {rest.distance}</span>
          <span>🕐 {rest.deliveryTime}</span>
          <span>🚚 {rest.deliveryFee === 0 ? 'Freeship' : formatPrice(rest.deliveryFee)}</span>
        </div>
        <div style={{ marginTop: 6 }}>
          <span className={`badge ${rest.isOpen ? 'badge-success' : ''}`} 
                style={!rest.isOpen ? { background: '#fef2f2', color: '#ef4444' } : {}}>
            {rest.isOpen ? '🟢 Đang mở cửa' : '🔴 Đã đóng cửa'}
          </span>
        </div>
      </div>

      {/* Voucher tags */}
      <div className="rest-voucher-row">
        <span className="rest-voucher-tag">🚚 Freeship 15K</span>
        <span className="rest-voucher-tag">🎫 Giảm 20%</span>
        {rest.discountText && <span className="rest-voucher-tag">🔥 {rest.discountText}</span>}
      </div>

      <div className="divider" />

      {/* Menu tabs */}
      <div className="menu-tabs">
        {menuCategories.map(cat => (
          <button
            key={cat}
            className={`menu-tab ${activeMenuTab === cat ? 'active' : ''}`}
            onClick={() => setActiveMenuTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu items */}
      {displayedItems.map((item) => (
        <div key={item.id} className="food-item" onClick={() => setSelectedItem(item)}>
          <div className="food-info">
            <div className="food-name">{item.name}</div>
            <div className="food-desc">{item.description}</div>
            <div className="food-prices">
              <span className="food-price">{formatPrice(item.price)}</span>
              {item.oldPrice && (
                <span className="food-old-price">{formatPrice(item.oldPrice)}</span>
              )}
            </div>
          </div>
          <div className="food-img-wrap">
            <img className="food-img" src={item.image} alt={item.name}
              onError={(e) => { e.target.src = 'https://via.placeholder.com/200/f4f4f8/999?text=Food'; }} />
            <button className="add-btn" onClick={(e) => { e.stopPropagation(); setSelectedItem(item); }}>+</button>
          </div>
        </div>
      ))}

      <div style={{ height: 20 }} />

      {/* Mini Cart Bar */}
      {cartCount > 0 && (
        <div className="mini-cart-bar">
          <div className="cart-info">
            <span className="cart-count">{cartCount}</span>
            <span style={{ fontWeight: 600 }}>{formatPrice(cartTotal)}</span>
          </div>
          <button className="view-cart-btn" onClick={() => dispatch({ type: 'NAVIGATE', screen: 'cart' })}>
            Xem giỏ hàng →
          </button>
        </div>
      )}

      {/* Food Option Modal */}
      {selectedItem && (
        <FoodOptionModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}
