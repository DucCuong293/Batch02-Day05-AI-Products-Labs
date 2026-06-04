/**
 * FoodNow — Mock Voucher Data
 */

export const vouchers = [
  {
    id: 'v1',
    name: 'Freeship 15.000đ',
    description: 'Miễn phí giao hàng tối đa 15.000đ',
    icon: '🚚',
    amount: 15000,
    type: 'freeship',
    minOrder: 0,
    maxDiscount: 15000,
    discountPercent: null,
    condition: 'Áp dụng cho mọi đơn hàng',
    expiry: '30/06/2026',
    saved: true,
    code: 'FREESHIP15'
  },
  {
    id: 'v2',
    name: 'Giảm 20% tối đa 30.000đ',
    description: 'Giảm 20% tổng đơn hàng, tối đa 30.000đ',
    icon: '🎫',
    amount: null,
    type: 'percent',
    minOrder: 50000,
    maxDiscount: 30000,
    discountPercent: 20,
    condition: 'Đơn tối thiểu 50.000đ',
    expiry: '25/06/2026',
    saved: true,
    code: 'GIAM20'
  },
  {
    id: 'v3',
    name: 'Giảm 25.000đ',
    description: 'Giảm 25.000đ cho đơn từ 100.000đ',
    icon: '🏷️',
    amount: 25000,
    type: 'fixed',
    minOrder: 100000,
    maxDiscount: 25000,
    discountPercent: null,
    condition: 'Đơn tối thiểu 100.000đ',
    expiry: '28/06/2026',
    saved: true,
    code: 'GIAM25K'
  },
  {
    id: 'v4',
    name: 'Voucher quán - Mua 2 giảm 10%',
    description: 'Mua từ 2 món trở lên giảm 10% tổng đơn',
    icon: '🍜',
    amount: null,
    type: 'percent',
    minOrder: 0,
    maxDiscount: 20000,
    discountPercent: 10,
    minItems: 2,
    condition: 'Mua từ 2 món trở lên',
    expiry: '20/06/2026',
    saved: false,
    code: 'MUA2GIAM10'
  },
  {
    id: 'v5',
    name: 'Giảm 10.000đ qua ví điện tử',
    description: 'Giảm 10.000đ khi thanh toán bằng ví điện tử',
    icon: '💳',
    amount: 10000,
    type: 'wallet',
    minOrder: 30000,
    maxDiscount: 10000,
    discountPercent: null,
    condition: 'Thanh toán qua ví điện tử, đơn tối thiểu 30.000đ',
    expiry: '15/06/2026',
    saved: false,
    code: 'VIDIENTU10'
  }
];

/** Calculate voucher discount based on order subtotal */
export function calculateDiscount(voucher, subtotal, itemCount = 1, paymentMethod = 'cash') {
  // Check wallet voucher
  if (voucher.type === 'wallet' && paymentMethod !== 'wallet') {
    return { eligible: false, reason: 'Chỉ áp dụng khi thanh toán qua ví điện tử', discount: 0 };
  }

  // Check min items
  if (voucher.minItems && itemCount < voucher.minItems) {
    return { eligible: false, reason: `Cần mua từ ${voucher.minItems} món trở lên`, discount: 0 };
  }

  // Check minimum order
  if (subtotal < voucher.minOrder) {
    const diff = voucher.minOrder - subtotal;
    return { 
      eligible: false, 
      reason: `Cần thêm ${diff.toLocaleString('vi-VN')}đ để áp dụng`, 
      discount: 0 
    };
  }

  // Calculate discount
  let discount = 0;
  if (voucher.type === 'freeship') {
    discount = Math.min(voucher.maxDiscount, 15000); // cap at delivery fee
  } else if (voucher.type === 'percent') {
    discount = Math.min(subtotal * voucher.discountPercent / 100, voucher.maxDiscount);
  } else {
    discount = voucher.maxDiscount;
  }

  return { eligible: true, reason: null, discount: Math.round(discount) };
}

/** Mock notifications */
export const notifications = [
  {
    id: 'n1',
    title: 'Đơn hàng đang được chuẩn bị',
    text: 'Quán Phở Hà Nội 36 đang chuẩn bị món cho bạn. Dự kiến giao trong 25 phút.',
    time: '5 phút trước',
    icon: '🍜',
    unread: true,
  },
  {
    id: 'n2',
    title: 'Bạn có voucher freeship mới!',
    text: 'Miễn phí giao hàng cho đơn từ 0đ. Dùng ngay hôm nay!',
    time: '1 giờ trước',
    icon: '🎉',
    unread: true,
  },
  {
    id: 'n3',
    title: 'Deal trưa bắt đầu lúc 11:00',
    text: 'Hàng ngàn món ăn giảm đến 50%. Đặt ngay kẻo hết!',
    time: '3 giờ trước',
    icon: '🔥',
    unread: false,
  },
  {
    id: 'n4',
    title: 'Quán yêu thích đang giảm giá',
    text: 'Trà Sữa ToCoToCo giảm 20% hôm nay. Đặt ngay!',
    time: 'Hôm qua',
    icon: '❤️',
    unread: false,
  },
  {
    id: 'n5',
    title: 'Đánh giá đơn hàng',
    text: 'Bạn đã nhận được đơn hàng từ Cơm Tấm Sài Gòn. Hãy đánh giá để nhận xu!',
    time: '2 ngày trước',
    icon: '⭐',
    unread: false,
  },
];
