import React, { useState } from 'react';
import { formatPrice } from '../data/restaurants';

/**
 * FoodOptionModal — Bottom sheet modal cho tùy chỉnh món ăn
 * Hiển thị options (size, đường, đá, topping), ghi chú, số lượng
 */
export default function FoodOptionModal({ item, onClose, onAddToCart }) {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState('');

  if (!item) return null;

  const optionGroups = item.options || {};

  const optionLabels = {
    size: 'Kích cỡ',
    sugar: 'Độ ngọt',
    ice: 'Đá',
    topping: 'Topping',
    extra: 'Thêm',
  };

  const handleOptionToggle = (groupKey, option) => {
    setSelectedOptions(prev => {
      const current = prev[groupKey] || [];
      // For size, sugar, ice — single select
      if (['size', 'sugar', 'ice'].includes(groupKey)) {
        return { ...prev, [groupKey]: [option] };
      }
      // For topping, extra — multi select
      const exists = current.find(o => o.name === option.name);
      if (exists) {
        return { ...prev, [groupKey]: current.filter(o => o.name !== option.name) };
      }
      return { ...prev, [groupKey]: [...current, option] };
    });
  };

  const isSelected = (groupKey, option) => {
    const current = selectedOptions[groupKey] || [];
    return current.some(o => o.name === option.name);
  };

  // Calculate total price
  const extraPrice = Object.values(selectedOptions)
    .flat()
    .reduce((sum, opt) => sum + (opt.price || 0), 0);
  const totalPrice = (item.price + extraPrice) * quantity;

  const handleAdd = () => {
    onAddToCart({
      ...item,
      selectedOptions,
      quantity,
      note,
      totalPrice,
      unitPrice: item.price + extraPrice,
      cartId: Date.now() + Math.random(), // unique cart item id
    });
    onClose();
  };

  return (
    <>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="bottom-sheet">
        <div className="bottom-sheet-handle" />
        
        {/* Food image */}
        <img 
          src={item.image} 
          alt={item.name}
          style={{ width: '100%', height: 180, objectFit: 'cover' }}
          onError={(e) => { e.target.src = 'https://via.placeholder.com/400x200/f4f4f8/999?text=Food'; }}
        />

        {/* Food info */}
        <div style={{ padding: '16px' }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{item.name}</h3>
          <p style={{ fontSize: 13, color: '#6b6b7b', marginBottom: 8 }}>{item.description}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 18, fontWeight: 800, color: '#ee4d2d' }}>
              {formatPrice(item.price)}
            </span>
            {item.oldPrice && (
              <span style={{ fontSize: 13, color: '#b0b0be', textDecoration: 'line-through' }}>
                {formatPrice(item.oldPrice)}
              </span>
            )}
          </div>
        </div>

        {/* Option groups */}
        {Object.entries(optionGroups).map(([groupKey, options]) => (
          options.length > 0 && (
            <div key={groupKey} style={{ padding: '0 16px 16px' }}>
              <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, color: '#2d2d3f' }}>
                {optionLabels[groupKey] || groupKey}
                {['size', 'sugar', 'ice'].includes(groupKey) && (
                  <span style={{ fontSize: 11, color: '#8e8e9e', fontWeight: 400, marginLeft: 6 }}>
                    Chọn 1
                  </span>
                )}
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {options.map((opt) => (
                  <button
                    key={opt.name}
                    className={`filter-chip ${isSelected(groupKey, opt) ? 'active' : ''}`}
                    onClick={() => handleOptionToggle(groupKey, opt)}
                    style={{ fontSize: 12 }}
                  >
                    {opt.name}
                    {opt.price > 0 && ` +${formatPrice(opt.price)}`}
                  </button>
                ))}
              </div>
            </div>
          )
        ))}

        {/* Note */}
        <div style={{ padding: '0 16px 16px' }}>
          <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Ghi chú</h4>
          <input
            className="note-input"
            type="text"
            placeholder="Ví dụ: không hành, ít cay..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        {/* Quantity + Add to cart */}
        <div style={{ 
          padding: '12px 16px 24px', 
          display: 'flex', 
          alignItems: 'center', 
          gap: 12,
          borderTop: '1px solid #e8e8ef',
          position: 'sticky',
          bottom: 0,
          background: 'white'
        }}>
          <div className="qty-selector">
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
            <span className="qty-value">{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>
          <button 
            className="btn btn-primary btn-block"
            onClick={handleAdd}
            style={{ flex: 1, padding: '12px 16px' }}
          >
            Thêm vào giỏ · {formatPrice(totalPrice)}
          </button>
        </div>
      </div>
    </>
  );
}
