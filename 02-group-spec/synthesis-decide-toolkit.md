# Toolkit — Từ Evidence Đến Build Slice

**Nhóm:** Dương Đức Cường (2A202600794), Đinh Hoàng Nam (2A202600884), Bùi Hoàng Sơn (2A202600925), Ngô Minh Khánh (2A202600953), Bùi Như Kiệt (2A202600895)  
**Ngày:** 03/06/2026

---

## 1. Gom evidence thành cụm

Gom theo **workflow/pain**, không gom theo tên feature.

| Cụm | Evidence thuộc về |
|---|---|
| **"Gợi ý sai context thời gian"** | Test #1: gợi ý lẩu buổi sáng. Test #7: gợi ý quán đóng cửa đêm khuya. |
| **"Gợi ý không theo thời tiết"** | Test #2: trời mưa lạnh gợi ý trà sữa, salad. DoorDash DeepRed đã giải quyết bằng Weather API. |
| **"Không hiểu cảm xúc/mood user"** | Test #6: buồn/stress muốn comfort food nhưng phải tự tìm. Uber Eats đã có "Cravings" mood filter. |
| **"Search không hiểu natural language"** | Test #3: "healthy gần đây dưới 50k" → kết quả lộn xộn. Phải tách 3 bước. |
| **"Thiếu thông tin dinh dưỡng"** | Test #4: không biết món bao nhiêu calo. Nutritionix API có thể giải quyết. |
| **"Gợi ý thiên vị quảng cáo"** | Test #5: "Gợi ý cho bạn" chủ yếu là paid promotion. Review public xác nhận. |

---

## 2. Viết insight

```text
User trẻ Việt Nam dùng food delivery hàng ngày
không chỉ cần một danh sách quán ăn gần đây.
Họ thật ra cần một trợ lý ăn uống HIỂU NGỮ CẢNH CON NGƯỜI,
vì evidence từ 7 bài test cho thấy:
  - 6/7 pain đều liên quan đến app gợi ý ĐÚNG MÓN nhưng SAI CONTEXT,
  - App không xét thời gian (sáng/tối), thời tiết (mưa/nắng),
    cảm xúc (buồn/vui), hay health preference (healthy/comfort),
  - User phải tự biết mình muốn gì rồi search keyword thủ công,
  - Gợi ý mặc định thiên vị quảng cáo thay vì cá nhân hoá.
Vấn đề cốt lõi không phải app thiếu data quán ăn — ShopeeFood có hàng nghìn quán.
Vấn đề là app "KHÔNG HIỂU BẠN ĐANG CẦN GÌ LÚC NÀY".
```

---

## 3. Viết opportunity

```text
Cơ hội là dùng AI agent kết hợp nhiều nguồn context để gợi ý phù hợp:
  - Thời tiết real-time (Weather API) → mưa lạnh = phở/cháo, nắng nóng = sinh tố/salad
  - Thời gian trong ngày → sáng = bún/phở/bánh mì, tối = lẩu/nướng/nhậu
  - Cảm xúc user (chatbot hỏi mood) → buồn = comfort food, vui = thử món mới
  - Budget + health (user nhập) → dưới 50k + healthy → gợi ý cụ thể
  - Vị trí (Google Maps Places) → quán gần, đánh giá tốt, đang mở cửa
  - Dinh dưỡng (Nutritionix) → "phở bò 431 cal, bún chả 520 cal"
giúp user ra quyết định "ăn gì" trong 30 giây thay vì lướt 15 phút,
trong khi vẫn kiểm soát rủi ro AI gợi ý sai mood / sai context.
```

---

## 4. Chọn build slice

Build slice đã qua 5 câu hỏi kiểm tra:

| Câu hỏi | Đánh giá |
|---|---|
| **User cụ thể chưa?** | ✅ Sinh viên / dân văn phòng trẻ (18-28), dùng food delivery hàng ngày, hay phân vân "ăn gì?", quan tâm sức khoẻ + budget + mood. |
| **Task đủ hẹp chưa?** | ✅ Một task: user mở chatbot → nhập mood/context hoặc AI tự detect (thời tiết, thời gian) → AI gợi ý 3 món + quán + calo + giá → user chọn. Demo 3-5 phút. |
| **AI decision rõ chưa?** | ✅ AI quyết định: (1) context nào quan trọng nhất lúc này? (2) gợi ý món gì phù hợp? (3) quán nào gần + tốt + đang mở? → Augmentation: AI gợi ý, user chọn. |
| **Failure path rõ chưa?** | ✅ Case 1: AI đoán mood sai (user buồn nhưng AI gợi ý salad healthy thay vì comfort food). Case 2: AI gợi ý quán rating cao nhưng giá vượt budget. |
| **Có evidence không?** | ✅ 7 self-use observations + review public (vtv.vn, shopeefood.vn) + 3 competitor analogs (DoorDash, Uber Eats, Cleo AI). |

---

## 5. Quyết định: giữ, giảm scope, hay đổi hướng?

| Tình huống | Quyết định |
|---|---|
| Evidence yếu? | Không — 7 self-use + public review + 3 competitor analogs. |
| Ý tưởng quá rộng? | Ban đầu có → đã cắt xuống 1 flow: "hỏi AI ăn gì → nhận gợi ý theo context". Không build đơn hàng/thanh toán. |
| AI không cần thiết? | Cần — kết hợp thời tiết + mood + thời gian + vị trí + dinh dưỡng cần intelligence. Rule-based không đủ linh hoạt. |
| Rủi ro cao? | Trung bình — chọn augmentation (AI gợi ý, user chọn). Rủi ro chính: gợi ý sai mood. |
| Demo được trong 1 ngày? | ✅ Có — chatbot prototype + API calls real-time. |

**Quyết định: GIỮ build slice, đã giảm scope vừa đủ.**

---

## 6. Câu chốt cuối

```text
Dựa trên evidence từ 7 bài test thực tế với ShopeeFood
(đặc biệt: app gợi ý lẩu buổi sáng, salad trời mưa lạnh,
quán đóng cửa đêm khuya — tất cả là SAI CONTEXT, không sai data),
nhóm sẽ build prototype AI agent gợi ý món ăn theo ngữ cảnh,
cho sinh viên/dân văn phòng trẻ hay phân vân "ăn gì?",
để giải quyết pain "app gợi ý đúng món nhưng sai context",
bằng cách AI kết hợp thời tiết (Weather API) + thời gian + mood (chatbot)
+ budget + health + vị trí (Google Maps) + dinh dưỡng (Nutritionix),
và sẽ test failure path: AI đoán mood sai → gợi ý ngược hoàn toàn
với kỳ vọng user (buồn → salad, vui → lẩu cay) → user frustrate.
```

---

## 7. Backlog

Những thứ **không build trong Day 06**:

- Tích hợp trực tiếp với ShopeeFood API (không có public API, cần đối tác).
- Đặt đơn trong chatbot (chỉ gợi ý, user tự đặt trên ShopeeFood).
- Học từ lịch sử đặt hàng user (cần data thật, chưa có).
- Recommendation cộng đồng ("bạn bè bạn hay ăn gì?") — cần social graph.
- OCR menu quán ăn để phân tích dinh dưỡng tự động.
