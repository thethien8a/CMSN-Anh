# LINK TRUY CẬP: https://cmsn-anh.vercel.app/
# 🎂 Chúc Mừng Sinh Nhật Ánh

Một ứng dụng web chúc mừng sinh nhật được xây dựng bằng React và TypeScript, dành riêng cho Ánh nhân dịp sinh nhật 21 tuổi.

## ✨ Tính năng chính

- 🔐 **Màn hình đăng nhập bảo mật** với mật khẩu ngày tháng năm sinh
- 🎂 **Bánh sinh nhật 3 tầng** với 3 ngọn nến và số tuổi 21 nổi bật
- 🎊 **Hiệu ứng pháo hoa giấy** rơi liên tục
- 💌 **Thiệp quà tương tác** có thể mở/đóng với lời chúc cá nhân
- 🎨 **Thiết kế responsive** với màu sắc pastel và hiệu ứng hoạt hình mượt mà

## 🛠️ Công nghệ sử dụng

- **React 19.2.1** - Thư viện frontend chính
- **TypeScript** - Ngôn ngữ lập trình với kiểu dữ liệu
- **Vite 6.2.0** - Công cụ xây dựng (build tool)
- **Tailwind CSS** - Framework CSS cho styling
- **Lucide React** - Thư viện icon

## 📁 Cấu trúc dự án

```
├── components/
│   ├── LoginScreen.tsx    # Màn hình đăng nhập với mật khẩu
│   ├── BirthdayScene.tsx  # Cảnh chính chúc mừng sinh nhật
│   ├── Cake.tsx           # Component bánh sinh nhật với nến và số 21
│   ├── Confetti.tsx       # Hiệu ứng pháo hoa giấy
│   └── GiftCard.tsx       # Thiệp quà có thể mở ra
├── App.tsx                # Component chính của ứng dụng
├── index.tsx              # Điểm vào của ứng dụng
├── index.html             # File HTML chính với cấu hình Tailwind
├── package.json           # Dependencies và scripts
├── tsconfig.json          # Cấu hình TypeScript
└── vite.config.ts         # Cấu hình Vite
```

## 🚀 Cài đặt và chạy

### Yêu cầu
- Node.js (phiên bản 18 trở lên)

### Các bước thực hiện

1. **Clone repository**
   ```bash
   git clone [repository-url]
   cd CMSN-Anh
   ```

2. **Cài đặt dependencies**
   ```bash
   npm install
   ```

3. **Chạy development server**
   ```bash
   npm run dev
   ```

4. **Build cho production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Thiết kế và Giao diện

### Màu sắc chủ đạo
- Pastel Pink (#FFD1DC)
- Pastel Blue (#AEC6CF)
- Pastel Yellow (#FDFD96)
- Deep Pink (#FF69B4)

### Font chữ
- **Dancing Script** - Cho chữ viết tay (tiêu đề, lời chúc)
- **Quicksand** - Cho chữ thường (nội dung)

### Hiệu ứng hoạt hình
- **Float** - Hiệu ứng nổi cho các thành phần chính
- **Bounce** - Hiệu ứng nảy cho các trang trí
- **Wiggle** - Hiệu ứng rung lắc
- **Pulse** - Hiệu ứng nhấp nháy cho số tuổi

## 📱 Responsive Design

Ứng dụng được thiết kế để hoạt động tốt trên nhiều kích thước màn hình:
- **Mobile**: Tối ưu cho màn hình nhỏ
- **Tablet**: Giao diện cân bằng
- **Desktop**: Trải nghiệm đầy đủ

## 🎁 Nội dung lời chúc

Thiệp quà chứa lời chúc cá nhân:
> "Chúc chị Ánh sinh nhật vui vẻ, tuổi mới luôn vui tươi và hạnh phúc bên người yêu và gia đình. Khi nào cưới em sẽ bảo Tuấn gửi cho 5 chỉ."

Ký tên: *Thân ái, Thiện*

## 🔧 Tùy chỉnh

### Thay đổi mật khẩu
Sửa file `components/LoginScreen.tsx`, thay đổi giá trị của biến `CORRECT_PASS`:
```typescript
const CORRECT_PASS = 'mật-khẩu-mới';
```

### Thay đổi số tuổi
Sửa file `components/Cake.tsx`, thay đổi nội dung của số tuổi:
```typescript
<div className="text-6xl font-bold text-pink-600 drop-shadow-lg animate-pulse">21</div>
```

### Thay đổi lời chúc
Sửa file `components/GiftCard.tsx`, thay đổi nội dung trong phần lời chúc.

## 🌟 Đặc điểm nổi bật

1. **Bảo mật**: Màn hình đăng nhập với mật khẩu
2. **Cá nhân hóa**: Thiết kế riêng cho "Ánh"
3. **Tương tác**: Thiệp có thể mở/đóng
4. **Hiệu ứng**: Đa dạng hoạt hình hấp dẫn
5. **Responsive**: Hoạt động tốt trên mọi thiết bị

## 📄 License

Dự án này được tạo ra với mục đích cá nhân làm quà sinh nhật.

## 👥 Người đóng góp

- Thiện - Lời chúc và ý tưởng
- Tuấn - Được nhắc đến trong lời chúc

---

*Made with ❤️ for Ánh*
