/**
 * FoodNow — Mock Restaurant & Menu Data
 * 8 quán ăn với menu đầy đủ, options chi tiết
 */

export const restaurants = [
  {
    id: 1,
    name: 'Phở Hà Nội 36',
    category: 'Bún/Phở',
    rating: 4.8,
    ratingCount: 1250,
    distance: '1.2 km',
    deliveryTime: '20-30 phút',
    deliveryFee: 15000,
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&h=400&fit=crop',
    tags: ['Bán chạy', 'Giao nhanh'],
    discountText: 'Giảm 20% đơn từ 50K',
    isOpen: true,
    menu: [
      {
        id: 101,
        name: 'Phở bò tái',
        description: 'Phở bò truyền thống Hà Nội, nước dùng hầm xương 12 tiếng, thịt bò tái mềm',
        price: 45000,
        oldPrice: 55000,
        image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=300&h=300&fit=crop',
        category: 'Món bán chạy',
        options: {
          size: [
            { name: 'Nhỏ', price: 0 },
            { name: 'Vừa', price: 10000 },
            { name: 'Lớn', price: 20000 }
          ],
          extra: [
            { name: 'Thêm thịt bò', price: 15000 },
            { name: 'Thêm gầu', price: 15000 },
            { name: 'Trứng chần', price: 5000 },
            { name: 'Quẩy (2 cây)', price: 8000 }
          ]
        }
      },
      {
        id: 102,
        name: 'Phở bò chín',
        description: 'Phở bò chín nạm, thịt mềm thấm vị, nước dùng đậm đà',
        price: 42000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=300&h=300&fit=crop',
        category: 'Món chính',
        options: {
          size: [
            { name: 'Nhỏ', price: 0 },
            { name: 'Vừa', price: 10000 },
            { name: 'Lớn', price: 20000 }
          ],
          extra: [
            { name: 'Thêm thịt bò', price: 15000 },
            { name: 'Trứng chần', price: 5000 },
            { name: 'Quẩy (2 cây)', price: 8000 }
          ]
        }
      },
      {
        id: 103,
        name: 'Phở gà',
        description: 'Phở gà ta, thịt gà xé sợi, nước dùng trong thanh ngọt',
        price: 40000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=300&fit=crop',
        category: 'Món chính',
        options: {
          size: [
            { name: 'Nhỏ', price: 0 },
            { name: 'Vừa', price: 10000 },
            { name: 'Lớn', price: 20000 }
          ],
          extra: [
            { name: 'Thêm thịt gà', price: 12000 },
            { name: 'Trứng chần', price: 5000 }
          ]
        }
      },
      {
        id: 104,
        name: 'Bún bò Huế',
        description: 'Bún bò Huế cay nồng, đầy đủ chả, giò, huyết',
        price: 48000,
        oldPrice: 58000,
        image: 'https://images.unsplash.com/photo-1576577445504-6af96477db52?w=300&h=300&fit=crop',
        category: 'Món bán chạy',
        options: {
          size: [
            { name: 'Nhỏ', price: 0 },
            { name: 'Vừa', price: 10000 },
            { name: 'Lớn', price: 20000 }
          ],
          extra: [
            { name: 'Thêm bò', price: 15000 },
            { name: 'Thêm chả', price: 10000 },
            { name: 'Thêm huyết', price: 5000 }
          ]
        }
      },
      {
        id: 105,
        name: 'Nước chanh đá',
        description: 'Nước chanh tươi mát lạnh',
        price: 15000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=300&h=300&fit=crop',
        category: 'Đồ uống',
        options: {
          sugar: [
            { name: '0%', price: 0 },
            { name: '50%', price: 0 },
            { name: '100%', price: 0 }
          ],
          ice: [
            { name: 'Không đá', price: 0 },
            { name: 'Ít đá', price: 0 },
            { name: 'Bình thường', price: 0 }
          ]
        }
      },
      {
        id: 106,
        name: 'Combo Phở đặc biệt',
        description: 'Phở bò tái + nước chanh + quẩy',
        price: 59000,
        oldPrice: 75000,
        image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=300&h=300&fit=crop',
        category: 'Combo',
        options: {
          size: [
            { name: 'Vừa', price: 0 },
            { name: 'Lớn', price: 15000 }
          ]
        }
      }
    ]
  },
  {
    id: 2,
    name: 'Cơm Tấm Sài Gòn',
    category: 'Cơm',
    rating: 4.6,
    ratingCount: 890,
    distance: '0.8 km',
    deliveryTime: '15-25 phút',
    deliveryFee: 10000,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&h=400&fit=crop',
    tags: ['Gần bạn', 'Freeship'],
    discountText: 'Freeship đơn từ 30K',
    isOpen: true,
    menu: [
      {
        id: 201,
        name: 'Cơm tấm sườn bì chả',
        description: 'Cơm tấm sườn nướng than, bì, chả trứng, đồ chua, nước mắm',
        price: 45000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300&h=300&fit=crop',
        category: 'Món bán chạy',
        options: {
          size: [
            { name: 'Bình thường', price: 0 },
            { name: 'Nhiều cơm', price: 5000 }
          ],
          extra: [
            { name: 'Thêm sườn', price: 20000 },
            { name: 'Thêm trứng ốp la', price: 8000 },
            { name: 'Thêm chả', price: 10000 }
          ]
        }
      },
      {
        id: 202,
        name: 'Cơm tấm sườn trứng',
        description: 'Cơm tấm sườn nướng + trứng ốp la, đồ chua, dưa leo',
        price: 40000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop',
        category: 'Món chính',
        options: {
          size: [
            { name: 'Bình thường', price: 0 },
            { name: 'Nhiều cơm', price: 5000 }
          ],
          extra: [
            { name: 'Thêm sườn', price: 20000 },
            { name: 'Thêm trứng', price: 8000 }
          ]
        }
      },
      {
        id: 203,
        name: 'Cơm tấm đặc biệt',
        description: 'Sườn + bì + chả + trứng ốp la + tôm, full topping',
        price: 65000,
        oldPrice: 80000,
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=300&fit=crop',
        category: 'Món bán chạy',
        options: {
          size: [
            { name: 'Bình thường', price: 0 },
            { name: 'Nhiều cơm', price: 5000 }
          ]
        }
      },
      {
        id: 204,
        name: 'Canh chua cá lóc',
        description: 'Canh chua cá lóc, đậm đà hương vị miền Tây',
        price: 35000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=300&fit=crop',
        category: 'Món chính',
        options: {}
      },
      {
        id: 205,
        name: 'Trà đá',
        description: 'Trà đá mát lạnh',
        price: 5000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop',
        category: 'Đồ uống',
        options: {}
      },
      {
        id: 206,
        name: 'Combo cơm tấm nhóm',
        description: '3 cơm tấm sườn bì chả + 3 trà đá, tiết kiệm 25K',
        price: 120000,
        oldPrice: 145000,
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300&h=300&fit=crop',
        category: 'Combo',
        options: {}
      }
    ]
  },
  {
    id: 3,
    name: 'Trà Sữa ToCoToCo',
    category: 'Trà sữa',
    rating: 4.5,
    ratingCount: 2100,
    distance: '1.5 km',
    deliveryTime: '15-20 phút',
    deliveryFee: 12000,
    image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&h=300&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=800&h=400&fit=crop',
    tags: ['Yêu thích', 'Mua 2 giảm 10%'],
    discountText: 'Mua 2 giảm 10%',
    isOpen: true,
    menu: [
      {
        id: 301,
        name: 'Trà sữa truyền thống',
        description: 'Trà sữa đậm vị, thơm béo, topping trân châu đen',
        price: 35000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=300&h=300&fit=crop',
        category: 'Món bán chạy',
        options: {
          size: [
            { name: 'S', price: 0 },
            { name: 'M', price: 6000 },
            { name: 'L', price: 10000 }
          ],
          sugar: [
            { name: '0%', price: 0 },
            { name: '30%', price: 0 },
            { name: '50%', price: 0 },
            { name: '70%', price: 0 },
            { name: '100%', price: 0 }
          ],
          ice: [
            { name: 'Không đá', price: 0 },
            { name: 'Ít đá', price: 0 },
            { name: 'Bình thường', price: 0 }
          ],
          topping: [
            { name: 'Trân châu đen', price: 5000 },
            { name: 'Trân châu trắng', price: 5000 },
            { name: 'Pudding', price: 8000 },
            { name: 'Cheese foam', price: 10000 },
            { name: 'Thạch dừa', price: 5000 }
          ]
        }
      },
      {
        id: 302,
        name: 'Trà sữa matcha',
        description: 'Trà sữa matcha Nhật Bản, thanh mát dịu ngọt',
        price: 42000,
        oldPrice: 50000,
        image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=300&h=300&fit=crop',
        category: 'Món bán chạy',
        options: {
          size: [
            { name: 'S', price: 0 },
            { name: 'M', price: 6000 },
            { name: 'L', price: 10000 }
          ],
          sugar: [
            { name: '0%', price: 0 },
            { name: '30%', price: 0 },
            { name: '50%', price: 0 },
            { name: '70%', price: 0 },
            { name: '100%', price: 0 }
          ],
          ice: [
            { name: 'Không đá', price: 0 },
            { name: 'Ít đá', price: 0 },
            { name: 'Bình thường', price: 0 }
          ],
          topping: [
            { name: 'Trân châu đen', price: 5000 },
            { name: 'Pudding', price: 8000 },
            { name: 'Cheese foam', price: 10000 }
          ]
        }
      },
      {
        id: 303,
        name: 'Trà đào cam sả',
        description: 'Trà đào tươi, cam tươi, sả thơm, thanh mát giải nhiệt',
        price: 38000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop',
        category: 'Đồ uống',
        options: {
          size: [
            { name: 'S', price: 0 },
            { name: 'M', price: 6000 },
            { name: 'L', price: 10000 }
          ],
          sugar: [
            { name: '0%', price: 0 },
            { name: '50%', price: 0 },
            { name: '100%', price: 0 }
          ],
          ice: [
            { name: 'Ít đá', price: 0 },
            { name: 'Bình thường', price: 0 }
          ]
        }
      },
      {
        id: 304,
        name: 'Trà sữa oolong',
        description: 'Trà oolong thượng hạng pha sữa tươi, vị thanh nhẹ',
        price: 40000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300&h=300&fit=crop',
        category: 'Đồ uống',
        options: {
          size: [
            { name: 'S', price: 0 },
            { name: 'M', price: 6000 },
            { name: 'L', price: 10000 }
          ],
          sugar: [
            { name: '0%', price: 0 },
            { name: '30%', price: 0 },
            { name: '50%', price: 0 },
            { name: '100%', price: 0 }
          ],
          ice: [
            { name: 'Không đá', price: 0 },
            { name: 'Ít đá', price: 0 },
            { name: 'Bình thường', price: 0 }
          ],
          topping: [
            { name: 'Trân châu đen', price: 5000 },
            { name: 'Pudding', price: 8000 },
            { name: 'Cheese foam', price: 10000 }
          ]
        }
      },
      {
        id: 305,
        name: 'Sữa tươi trân châu đường đen',
        description: 'Sữa tươi nguyên chất, trân châu đường đen dai mềm',
        price: 45000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1541696490-8744a5dc0228?w=300&h=300&fit=crop',
        category: 'Món bán chạy',
        options: {
          size: [
            { name: 'M', price: 0 },
            { name: 'L', price: 8000 }
          ],
          ice: [
            { name: 'Ít đá', price: 0 },
            { name: 'Bình thường', price: 0 }
          ]
        }
      },
      {
        id: 306,
        name: 'Combo đôi bạn thân',
        description: '2 trà sữa bất kỳ size M + 2 topping',
        price: 79000,
        oldPrice: 99000,
        image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=300&h=300&fit=crop',
        category: 'Combo',
        options: {}
      },
      {
        id: 307,
        name: 'Bánh mousse trà sữa',
        description: 'Bánh mousse mềm mịn vị trà sữa, size nhỏ xinh',
        price: 25000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=300&h=300&fit=crop',
        category: 'Topping/Extra',
        options: {}
      }
    ]
  },
  {
    id: 4,
    name: 'Pizza Italia Express',
    category: 'Pizza/Burger',
    rating: 4.4,
    ratingCount: 670,
    distance: '2.1 km',
    deliveryTime: '25-35 phút',
    deliveryFee: 20000,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=400&fit=crop',
    tags: ['Combo tiết kiệm'],
    discountText: 'Giảm 25K đơn từ 100K',
    isOpen: true,
    menu: [
      {
        id: 401,
        name: 'Pizza Margherita',
        description: 'Pizza cổ điển Ý, phô mai mozzarella, cà chua, lá basil',
        price: 89000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=300&fit=crop',
        category: 'Món bán chạy',
        options: {
          size: [
            { name: '7 inch', price: 0 },
            { name: '9 inch', price: 30000 },
            { name: '12 inch', price: 60000 }
          ],
          extra: [
            { name: 'Thêm phô mai', price: 15000 },
            { name: 'Viền phô mai', price: 25000 }
          ]
        }
      },
      {
        id: 402,
        name: 'Pizza Pepperoni',
        description: 'Pizza pepperoni đậm đà, phô mai kéo sợi',
        price: 99000,
        oldPrice: 120000,
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&h=300&fit=crop',
        category: 'Món bán chạy',
        options: {
          size: [
            { name: '7 inch', price: 0 },
            { name: '9 inch', price: 30000 },
            { name: '12 inch', price: 60000 }
          ],
          extra: [
            { name: 'Thêm phô mai', price: 15000 },
            { name: 'Viền phô mai', price: 25000 },
            { name: 'Xốt ớt', price: 5000 }
          ]
        }
      },
      {
        id: 403,
        name: 'Burger bò phô mai',
        description: 'Burger bò Úc 150g, phô mai, rau, sốt đặc biệt',
        price: 65000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop',
        category: 'Món chính',
        options: {
          size: [
            { name: 'Single', price: 0 },
            { name: 'Double', price: 30000 }
          ],
          extra: [
            { name: 'Thêm phô mai', price: 10000 },
            { name: 'Bacon', price: 15000 },
            { name: 'Extra sauce', price: 5000 }
          ]
        }
      },
      {
        id: 404,
        name: 'Khoai tây chiên',
        description: 'Khoai tây chiên giòn, kèm sốt ketchup',
        price: 35000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=300&fit=crop',
        category: 'Topping/Extra',
        options: {
          size: [
            { name: 'Vừa', price: 0 },
            { name: 'Lớn', price: 10000 }
          ]
        }
      },
      {
        id: 405,
        name: 'Coca-Cola',
        description: 'Coca-Cola lon 330ml',
        price: 18000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300&h=300&fit=crop',
        category: 'Đồ uống',
        options: {}
      },
      {
        id: 406,
        name: 'Combo Pizza Party',
        description: '1 Pizza 9inch + 2 Burger + Khoai lớn + 4 Coca',
        price: 299000,
        oldPrice: 385000,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=300&fit=crop',
        category: 'Combo',
        options: {}
      }
    ]
  },
  {
    id: 5,
    name: 'Bún Chả Hương Liên',
    category: 'Bún/Phở',
    rating: 4.7,
    ratingCount: 980,
    distance: '1.8 km',
    deliveryTime: '20-30 phút',
    deliveryFee: 15000,
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&h=400&fit=crop',
    tags: ['Đánh giá cao', 'Quán nổi tiếng'],
    discountText: 'Giảm 15K cho khách mới',
    isOpen: true,
    menu: [
      {
        id: 501,
        name: 'Bún chả Hà Nội',
        description: 'Bún chả nướng than hoa, nước chấm chua ngọt, rau sống',
        price: 45000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=300&h=300&fit=crop',
        category: 'Món bán chạy',
        options: {
          size: [
            { name: 'Bình thường', price: 0 },
            { name: 'Đặc biệt', price: 15000 }
          ],
          extra: [
            { name: 'Thêm chả', price: 12000 },
            { name: 'Nem rán (2 cái)', price: 15000 },
            { name: 'Thêm bún', price: 5000 }
          ]
        }
      },
      {
        id: 502,
        name: 'Bún chả combo Obama',
        description: 'Bún chả đặc biệt + nem rán + bia Hà Nội (set nổi tiếng)',
        price: 75000,
        oldPrice: 95000,
        image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=300&h=300&fit=crop',
        category: 'Combo',
        options: {}
      },
      {
        id: 503,
        name: 'Nem rán',
        description: 'Nem rán giòn rụm, nhân thịt, miến, mộc nhĩ (5 cái)',
        price: 35000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=300&fit=crop',
        category: 'Món chính',
        options: {
          extra: [
            { name: 'Thêm 5 cái', price: 30000 }
          ]
        }
      },
      {
        id: 504,
        name: 'Chả cá Lã Vọng',
        description: 'Chả cá chiên thơm, bún, rau thì là, mắm tôm',
        price: 55000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=300&fit=crop',
        category: 'Món chính',
        options: {
          size: [
            { name: 'Bình thường', price: 0 },
            { name: 'Lớn', price: 20000 }
          ]
        }
      },
      {
        id: 505,
        name: 'Trà đá Hà Nội',
        description: 'Trà đá hương vị Hà Nội xưa',
        price: 5000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=300&fit=crop',
        category: 'Đồ uống',
        options: {}
      }
    ]
  },
  {
    id: 6,
    name: 'Gà Rán KingChick',
    category: 'Ăn vặt',
    rating: 4.3,
    ratingCount: 1560,
    distance: '0.5 km',
    deliveryTime: '10-20 phút',
    deliveryFee: 8000,
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&h=400&fit=crop',
    tags: ['Gần bạn', 'Giao siêu nhanh'],
    discountText: 'Combo tiết kiệm từ 49K',
    isOpen: true,
    menu: [
      {
        id: 601,
        name: 'Gà rán giòn (3 miếng)',
        description: 'Gà rán giòn tan, tẩm bột đặc biệt, thịt mọng nước',
        price: 59000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=300&h=300&fit=crop',
        category: 'Món bán chạy',
        options: {
          extra: [
            { name: 'Sốt cay Hàn Quốc', price: 5000 },
            { name: 'Sốt phô mai', price: 8000 },
            { name: 'Sốt mật ong', price: 5000 }
          ]
        }
      },
      {
        id: 602,
        name: 'Gà sốt cay',
        description: 'Gà rán phủ sốt cay Hàn Quốc, cay nồng hấp dẫn',
        price: 65000,
        oldPrice: 75000,
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=300&h=300&fit=crop',
        category: 'Món bán chạy',
        options: {
          extra: [
            { name: 'Sốt phô mai', price: 8000 },
            { name: 'Thêm khoai', price: 12000 }
          ]
        }
      },
      {
        id: 603,
        name: 'Cánh gà chiên nước mắm',
        description: 'Cánh gà chiên giòn, tẩm nước mắm đường thơm lừng (6 cánh)',
        price: 49000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=300&h=300&fit=crop',
        category: 'Món chính',
        options: {
          extra: [
            { name: 'Thêm 3 cánh', price: 25000 }
          ]
        }
      },
      {
        id: 604,
        name: 'Khoai tây lắc phô mai',
        description: 'Khoai tây chiên lắc bột phô mai, giòn rụm',
        price: 29000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=300&fit=crop',
        category: 'Topping/Extra',
        options: {
          size: [
            { name: 'Vừa', price: 0 },
            { name: 'Lớn', price: 10000 }
          ]
        }
      },
      {
        id: 605,
        name: 'Pepsi lon',
        description: 'Pepsi lon 330ml',
        price: 15000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=300&h=300&fit=crop',
        category: 'Đồ uống',
        options: {}
      },
      {
        id: 606,
        name: 'Combo gà rán nhóm',
        description: '6 miếng gà + khoai lớn + 3 Pepsi, tiết kiệm 30K',
        price: 139000,
        oldPrice: 169000,
        image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=300&h=300&fit=crop',
        category: 'Combo',
        options: {}
      }
    ]
  },
  {
    id: 7,
    name: 'Healthy Bowl',
    category: 'Đồ chay',
    rating: 4.9,
    ratingCount: 340,
    distance: '2.5 km',
    deliveryTime: '25-35 phút',
    deliveryFee: 18000,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop',
    tags: ['Healthy', 'Dưới 50K'],
    discountText: 'Giảm 20% cho khách mới',
    isOpen: true,
    menu: [
      {
        id: 701,
        name: 'Salad bowl cá hồi',
        description: 'Cá hồi tươi, quinoa, rau organic, sốt mè rang',
        price: 75000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop',
        category: 'Món bán chạy',
        options: {
          size: [
            { name: 'Regular', price: 0 },
            { name: 'Large', price: 20000 }
          ],
          extra: [
            { name: 'Thêm cá hồi', price: 25000 },
            { name: 'Trứng luộc', price: 5000 },
            { name: 'Avocado', price: 15000 }
          ]
        }
      },
      {
        id: 702,
        name: 'Poke bowl gà',
        description: 'Cơm gạo lứt, gà nướng, rau tươi, sốt teriyaki',
        price: 55000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop',
        category: 'Món chính',
        options: {
          size: [
            { name: 'Regular', price: 0 },
            { name: 'Large', price: 15000 }
          ],
          extra: [
            { name: 'Thêm gà', price: 15000 },
            { name: 'Avocado', price: 15000 }
          ]
        }
      },
      {
        id: 703,
        name: 'Green smoothie',
        description: 'Sinh tố rau bina, chuối, táo, hạt chia',
        price: 39000,
        oldPrice: 45000,
        image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=300&h=300&fit=crop',
        category: 'Đồ uống',
        options: {
          size: [
            { name: 'Regular', price: 0 },
            { name: 'Large', price: 10000 }
          ],
          sugar: [
            { name: 'Không đường', price: 0 },
            { name: 'Ít đường', price: 0 }
          ]
        }
      },
      {
        id: 704,
        name: 'Overnight oats',
        description: 'Yến mạch ngâm sữa hạnh nhân, granola, trái cây tươi',
        price: 42000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=300&h=300&fit=crop',
        category: 'Món chính',
        options: {
          extra: [
            { name: 'Thêm granola', price: 8000 },
            { name: 'Mật ong', price: 5000 }
          ]
        }
      },
      {
        id: 705,
        name: 'Combo Healthy Day',
        description: 'Salad bowl + Green smoothie, hoàn hảo cho bữa trưa',
        price: 99000,
        oldPrice: 114000,
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop',
        category: 'Combo',
        options: {}
      }
    ]
  },
  {
    id: 8,
    name: 'Cà Phê Sáng Tạo',
    category: 'Cà phê',
    rating: 4.6,
    ratingCount: 520,
    distance: '1.0 km',
    deliveryTime: '10-15 phút',
    deliveryFee: 10000,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=400&fit=crop',
    tags: ['Giao nhanh', 'Yêu thích'],
    discountText: 'Freeship đơn từ 25K',
    isOpen: true,
    menu: [
      {
        id: 801,
        name: 'Cà phê sữa đá',
        description: 'Cà phê phin truyền thống Việt Nam, sữa đặc',
        price: 25000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=300&fit=crop',
        category: 'Món bán chạy',
        options: {
          size: [
            { name: 'Nhỏ', price: 0 },
            { name: 'Vừa', price: 5000 },
            { name: 'Lớn', price: 10000 }
          ],
          sugar: [
            { name: 'Ít sữa', price: 0 },
            { name: 'Bình thường', price: 0 },
            { name: 'Nhiều sữa', price: 0 }
          ],
          ice: [
            { name: 'Không đá', price: 0 },
            { name: 'Ít đá', price: 0 },
            { name: 'Bình thường', price: 0 }
          ]
        }
      },
      {
        id: 802,
        name: 'Cà phê đen đá',
        description: 'Cà phê đen nguyên chất, đắng đậm, thức tỉnh',
        price: 22000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=300&h=300&fit=crop',
        category: 'Món chính',
        options: {
          size: [
            { name: 'Nhỏ', price: 0 },
            { name: 'Vừa', price: 5000 },
            { name: 'Lớn', price: 10000 }
          ],
          ice: [
            { name: 'Không đá', price: 0 },
            { name: 'Ít đá', price: 0 },
            { name: 'Bình thường', price: 0 }
          ]
        }
      },
      {
        id: 803,
        name: 'Bạc xỉu',
        description: 'Cà phê pha sữa tươi, vị dịu ngọt, thơm mát',
        price: 28000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop',
        category: 'Món bán chạy',
        options: {
          size: [
            { name: 'Nhỏ', price: 0 },
            { name: 'Vừa', price: 5000 },
            { name: 'Lớn', price: 10000 }
          ],
          ice: [
            { name: 'Không đá', price: 0 },
            { name: 'Ít đá', price: 0 },
            { name: 'Bình thường', price: 0 }
          ]
        }
      },
      {
        id: 804,
        name: 'Cà phê muối',
        description: 'Cà phê Huế đặc sản, kem muối béo mịn',
        price: 35000,
        oldPrice: 42000,
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop',
        category: 'Món bán chạy',
        options: {
          size: [
            { name: 'Nhỏ', price: 0 },
            { name: 'Vừa', price: 5000 },
            { name: 'Lớn', price: 10000 }
          ]
        }
      },
      {
        id: 805,
        name: 'Matcha latte',
        description: 'Matcha Nhật Bản kết hợp sữa tươi, thanh mát',
        price: 42000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=300&h=300&fit=crop',
        category: 'Đồ uống',
        options: {
          size: [
            { name: 'Nhỏ', price: 0 },
            { name: 'Vừa', price: 5000 },
            { name: 'Lớn', price: 10000 }
          ],
          sugar: [
            { name: '0%', price: 0 },
            { name: '50%', price: 0 },
            { name: '100%', price: 0 }
          ],
          ice: [
            { name: 'Nóng', price: 0 },
            { name: 'Ít đá', price: 0 },
            { name: 'Bình thường', price: 0 }
          ]
        }
      },
      {
        id: 806,
        name: 'Bánh mì chả cá',
        description: 'Bánh mì nóng giòn, chả cá, rau sống, ớt, tương',
        price: 25000,
        oldPrice: null,
        image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=300&h=300&fit=crop',
        category: 'Topping/Extra',
        options: {
          extra: [
            { name: 'Thêm chả', price: 5000 },
            { name: 'Thêm trứng', price: 5000 }
          ]
        }
      },
      {
        id: 807,
        name: 'Combo sáng tiết kiệm',
        description: 'Cà phê sữa đá + Bánh mì chả cá',
        price: 39000,
        oldPrice: 50000,
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=300&fit=crop',
        category: 'Combo',
        options: {}
      }
    ]
  }
];

/** Category data with icons */
export const categories = [
  { id: 'com', name: 'Cơm', icon: '🍚' },
  { id: 'tra-sua', name: 'Trà sữa', icon: '🧋' },
  { id: 'bun-pho', name: 'Bún/Phở', icon: '🍜' },
  { id: 'an-vat', name: 'Ăn vặt', icon: '🍟' },
  { id: 'pizza-burger', name: 'Pizza/Burger', icon: '🍕' },
  { id: 'do-chay', name: 'Đồ chay', icon: '🥗' },
  { id: 'ca-phe', name: 'Cà phê', icon: '☕' },
  { id: 'mart', name: 'Mart', icon: '🏪' },
];

/** Format VND currency */
export function formatPrice(price) {
  return price.toLocaleString('vi-VN') + 'đ';
}
