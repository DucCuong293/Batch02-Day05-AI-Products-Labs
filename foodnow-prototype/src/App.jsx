import React, { useReducer } from 'react';
import PhoneFrame from './components/PhoneFrame';
import StatusBar from './components/StatusBar';
import BottomNav from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from './screens/CartScreen';
import VoucherScreen from './screens/VoucherScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import TrackingScreen from './screens/TrackingScreen';
import RatingScreen from './screens/RatingScreen';
import OrdersScreen from './screens/OrdersScreen';
import SupportScreen from './screens/SupportScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import AccountScreen from './screens/AccountScreen';
import VouchersTabScreen from './screens/VouchersTabScreen';

/**
 * FoodNow App — Main application shell
 * State management via useReducer, screen routing, desktop wrapper
 */

// --- Initial State ---
const initialState = {
  currentScreen: 'home',
  screenHistory: [],
  selectedAddress: '123 Nguyễn Trãi, Quận 1',
  selectedRestaurant: null,
  selectedCategory: null,
  searchQuery: '',
  cartItems: [],
  cartRestaurant: null,
  selectedVoucher: null,
  paymentMethod: 'cash',
  currentOrder: null,
  orderStatus: 0,
  orderHistory: [],
};

// --- Reducer ---
function appReducer(state, action) {
  switch (action.type) {
    case 'NAVIGATE':
      return {
        ...state,
        currentScreen: action.screen,
        screenHistory: [...state.screenHistory, state.currentScreen],
      };

    case 'GO_BACK': {
      const history = [...state.screenHistory];
      const prev = history.pop() || 'home';
      return { ...state, currentScreen: prev, screenHistory: history };
    }

    case 'SELECT_RESTAURANT':
      return { ...state, selectedRestaurant: action.restaurant };

    case 'SET_CATEGORY':
      return { ...state, selectedCategory: action.category };

    case 'SET_SEARCH':
      return { ...state, searchQuery: action.query };

    case 'ADD_TO_CART': {
      const item = action.item;
      const restaurant = state.selectedRestaurant;
      return {
        ...state,
        cartItems: [...state.cartItems, item],
        cartRestaurant: restaurant || state.cartRestaurant,
      };
    }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(i => i.cartId !== action.cartId),
        ...(state.cartItems.filter(i => i.cartId !== action.cartId).length === 0 
          ? { cartRestaurant: null, selectedVoucher: null } : {}),
      };

    case 'UPDATE_QUANTITY': {
      return {
        ...state,
        cartItems: state.cartItems.map(item => {
          if (item.cartId !== action.cartId) return item;
          const newQty = item.quantity + action.delta;
          if (newQty <= 0) return null;
          return { 
            ...item, 
            quantity: newQty, 
            totalPrice: item.unitPrice * newQty 
          };
        }).filter(Boolean),
      };
    }

    case 'CLEAR_CART':
      return { ...state, cartItems: [], cartRestaurant: null, selectedVoucher: null };

    case 'SELECT_VOUCHER':
      return { ...state, selectedVoucher: action.voucher };

    case 'SET_PAYMENT':
      return { ...state, paymentMethod: action.method };

    case 'PLACE_ORDER':
      return {
        ...state,
        currentOrder: action.order,
        orderStatus: 0,
        cartItems: [],
        cartRestaurant: null,
        selectedVoucher: null,
        currentScreen: 'tracking',
        screenHistory: [...state.screenHistory, state.currentScreen],
      };

    case 'UPDATE_ORDER_STATUS':
      return { ...state, orderStatus: action.status };

    case 'FINISH_ORDER':
      return {
        ...state,
        orderHistory: state.currentOrder 
          ? [state.currentOrder, ...state.orderHistory] 
          : state.orderHistory,
        currentOrder: null,
        orderStatus: 0,
        currentScreen: 'home',
        screenHistory: [],
      };

    default:
      return state;
  }
}

// --- Screen name mapping for side panel ---
const screenNames = {
  home: 'Trang chủ',
  search: 'Tìm kiếm',
  restaurant: 'Chi tiết quán',
  cart: 'Giỏ hàng',
  voucher: 'Chọn voucher',
  checkout: 'Thanh toán',
  tracking: 'Theo dõi đơn',
  rating: 'Đánh giá',
  orders: 'Đơn hàng',
  support: 'Hỗ trợ',
  notifications: 'Thông báo',
  account: 'Tài khoản',
  'vouchers-tab': 'Kho voucher',
};

const flowSteps = ['home', 'search', 'restaurant', 'cart', 'voucher', 'checkout', 'tracking', 'rating'];

// --- App Component ---
export default function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Handle bottom nav navigation
  const handleNavigation = (tabId) => {
    const screenMap = {
      'home': 'home',
      'orders': 'orders',
      'vouchers-tab': 'vouchers-tab',
      'notifications': 'notifications',
      'account': 'account',
    };
    const screen = screenMap[tabId] || 'home';
    dispatch({ type: 'NAVIGATE', screen });
  };

  // Determine which screen to show (without bottom nav for some screens)
  const screensWithoutBottomNav = ['restaurant', 'cart', 'voucher', 'checkout', 'tracking', 'rating', 'support', 'search'];
  const showBottomNav = !screensWithoutBottomNav.includes(state.currentScreen);

  // Render current screen
  const renderScreen = () => {
    const props = { state, dispatch };
    switch (state.currentScreen) {
      case 'home': return <HomeScreen {...props} />;
      case 'search': return <SearchScreen {...props} />;
      case 'restaurant': return <RestaurantScreen {...props} />;
      case 'cart': return <CartScreen {...props} />;
      case 'voucher': return <VoucherScreen {...props} />;
      case 'checkout': return <CheckoutScreen {...props} />;
      case 'tracking': return <TrackingScreen {...props} />;
      case 'rating': return <RatingScreen {...props} />;
      case 'orders': return <OrdersScreen {...props} />;
      case 'support': return <SupportScreen {...props} />;
      case 'notifications': return <NotificationsScreen {...props} />;
      case 'account': return <AccountScreen {...props} />;
      case 'vouchers-tab': return <VouchersTabScreen {...props} />;
      default: return <HomeScreen {...props} />;
    }
  };

  return (
    <div className="desktop-shell">
      {/* Desktop header */}
      <div className="desktop-header">
        <h1>🍜 Food<span>Now</span> Mobile App Prototype</h1>
        <p>A web-based mobile simulation for food delivery flow</p>
      </div>

      {/* Phone Frame */}
      <PhoneFrame>
        <StatusBar />
        <div className="screen-content" key={state.currentScreen}>
          {renderScreen()}
        </div>
        {showBottomNav && (
          <BottomNav 
            currentScreen={state.currentScreen} 
            onNavigate={handleNavigation} 
          />
        )}
      </PhoneFrame>

      {/* Side Panel — User Flow */}
      <div className="side-panel">
        <h3>📱 User Flow</h3>
        {flowSteps.map((step) => (
          <div
            key={step}
            className={`flow-item ${state.currentScreen === step ? 'active' : ''}`}
          >
            {screenNames[step]}
          </div>
        ))}
        <div style={{ 
          marginTop: 16, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.15)',
          fontSize: 11, opacity: 0.5 
        }}>
          Current: {screenNames[state.currentScreen] || state.currentScreen}
        </div>
        {state.cartItems.length > 0 && (
          <div style={{ 
            marginTop: 8, padding: '6px 10px', 
            background: 'rgba(238,77,45,0.3)', borderRadius: 6,
            fontSize: 11 
          }}>
            🛒 {state.cartItems.reduce((s, i) => s + i.quantity, 0)} món trong giỏ
          </div>
        )}
      </div>
    </div>
  );
}
