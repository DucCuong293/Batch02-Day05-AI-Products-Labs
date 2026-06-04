# 🍜 FoodNow — Mobile Food Delivery App Prototype

A web-based mobile simulation for food delivery flow, inspired by ShopeeFood.

## Screenshot

Mở browser sẽ thấy một chiếc điện thoại ở giữa màn hình desktop, bên trong là app FoodNow mô phỏng đầy đủ trải nghiệm đặt đồ ăn.

## Tech Stack

- **React 18** + **Vite 5** — Fast development & HMR
- **Vanilla CSS** — Custom design system with CSS variables
- **Mock Data** — 8 restaurants, 40+ menu items, 5 vouchers

## Quick Start

### 1. Cài Node.js (nếu chưa có)

Tải & cài từ: [https://nodejs.org](https://nodejs.org) (LTS version)

### 2. Chạy app

```bash
cd foodnow-prototype
npm install
npm run dev
```

Mở browser tại `http://localhost:3000`

## Features

### 📱 Phone Mockup
- Khung điện thoại với notch/Dynamic Island
- Status bar iOS-style
- Bottom navigation 5 tab

### 🏠 12+ Screens
| Screen | Description |
|--------|-------------|
| Home | Banner, categories, restaurants, AI suggestion |
| Search | Search + filter chips |
| Restaurant | Cover, info, menu tabs, food items |
| Cart | Items, quantity, voucher, total |
| Voucher | Eligible/disabled states |
| Checkout | Address, payment, order summary |
| Tracking | Map, timeline (auto-advancing), driver info |
| Rating | Stars, quick tags, text review |
| Orders | Active + history, reorder |
| Support | Issue categories, form, photo upload |
| Notifications | Mock notifications |
| Account | Profile, settings, stats |

### ✨ Bonus: AI Suggestion
Nút "Gợi ý món cho tôi" trên Home — rule-based filtering theo preference.

### 🔄 Full Flow
```
Home → Search → Restaurant → Cart → Voucher → Checkout → Tracking → Rating
```

## Mock Data

- **8 quán ăn**: Phở, Cơm tấm, Trà sữa, Pizza, Bún chả, Gà rán, Healthy, Cà phê
- **40+ món**: Mỗi quán 5-7 món với options (size, đường, đá, topping)
- **5 voucher**: Freeship, giảm %, giảm cố định, voucher quán, voucher ví

## Project Structure

```
foodnow-prototype/
├── package.json
├── vite.config.js
├── index.html
├── src/
│   ├── main.jsx
│   ├── App.jsx              # Main app + state management
│   ├── data/
│   │   ├── restaurants.js    # 8 restaurants + menus
│   │   └── vouchers.js       # Vouchers + notifications
│   ├── components/
│   │   ├── PhoneFrame.jsx
│   │   ├── StatusBar.jsx
│   │   ├── BottomNav.jsx
│   │   └── FoodOptionModal.jsx
│   ├── screens/
│   │   ├── HomeScreen.jsx
│   │   ├── SearchScreen.jsx
│   │   ├── RestaurantScreen.jsx
│   │   ├── CartScreen.jsx
│   │   ├── VoucherScreen.jsx
│   │   ├── CheckoutScreen.jsx
│   │   ├── TrackingScreen.jsx
│   │   ├── RatingScreen.jsx
│   │   ├── OrdersScreen.jsx
│   │   ├── SupportScreen.jsx
│   │   ├── NotificationsScreen.jsx
│   │   ├── AccountScreen.jsx
│   │   └── VouchersTabScreen.jsx
│   └── styles/
│       └── global.css        # Complete design system
```

## License

This is a prototype for educational/demo purposes only.
