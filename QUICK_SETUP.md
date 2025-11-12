# ⚡ Quick Setup - Chatbot với Gemini AI

## Bước 1: Lấy API Key (2 phút)

1. Mở trình duyệt: https://makersuite.google.com/app/apikey
2. Đăng nhập Google
3. Click **"Create API Key"**
4. Click **"Copy"** để copy API key

## Bước 2: Tạo file .env

Trong thư mục `web_mln`, tạo file mới tên `.env`:

```bash
VITE_GEMINI_API_KEY=AIzaSy...paste_your_key_here
```

## Bước 3: Cập nhật Chatbot.jsx

Mở file `src/components/Chatbot.jsx`, tìm dòng 32:

```javascript
const API_KEY = "YOUR_GEMINI_API_KEY";
```

Sửa thành:

```javascript
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "YOUR_GEMINI_API_KEY";
```

## Bước 4: Restart server

```powershell
# Stop server (Ctrl + C)
# Start lại
npm run dev
```

## ✅ Test thử

1. Mở http://localhost:5173
2. Nhìn góc dưới bên phải → Click nút 💬
3. Hỏi: "Ai chỉ huy chiến dịch Điện Biên Phủ?"
4. Chờ Gemini trả lời!

## 🎉 Done!

Chatbot đã sẵn sàng trả lời về Điện Biên Phủ!
