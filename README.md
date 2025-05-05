
# 🎯 Fortune Wheel Game

Đây là một mini game vòng quay may mắn được cấu hình và khởi tạo bằng JavaScript sử dụng thư viện **WOF** (Wheel of Fortune).

---

## 🔧 Cấu Hình Game

Example về schema của config game vòng quay:

```javascript
const config = {
  gameId: "fortune_wheel",
  values: {
    logoImage: {
      source: "cdn" | "base64",
      cdnLink?: string,
      base64?: string
    },
    wheel: {
      imageMode: boolean,
      imageUrl?: string,
      segmentCount: number,
      radius: number,
      segmentItems: {
        id: string,
        text: string,
        color: string,
        image: string
      }[]
    }
  }
}
```

### Giải thích:

- `logoImage`: Trả về hình ảnh logo
  - `source`: `"cdn"` hoặc `"base64"` – kiểu nguồn lấy hình ảnh
  - `cdnLink`: Đường dẫn hình ảnh từ CDN
  - `base64`: Chuỗi hình ảnh dạng base64

- `wheel`: Cấu hình vòng quay
  - `imageMode`: 
    - `true`: dùng ảnh nguyên vòng quay từ `imageUrl`
    - `false`: chế độ mặc định, chia từng mảnh phần quà thành hình tròn
  - `imageUrl`: Đường dẫn CDN khi ở chế độ `imageMode`
  - `segmentCount`: Số lượng phần quà
  - `radius`: Bán kính vòng quay
  - `segmentItems`: Mảng phần quà, gồm:
    - `id`: ID phần quà
    - `text`: Tên phần quà
    - `color`: Màu ô phần quà
    - `image`: Đường dẫn hình ảnh phần quà từ CDN

---

## ▶️ Khởi Tạo Game

```javascript
WOF.initialize("container_id", config);
```

**Hàm này để khởi tạo và render vòng quay trên iframe.**

### Parameters:

- `containerId`: ID của thẻ HTML để render vòng quay lên.
- `config`: Đối tượng cấu hình game như mô tả ở trên.

---

## 🎮 Chức Năng

### 1. Quay Vòng (Spin)

```javascript
WOF.spin(gift, callback);
```

**Bắt đầu quay vòng quay và dừng tại phần quà đã truyền.**

#### Parameters:

- `gift`: Một phần tử trong `segmentItems`, dạng:
  ```json
  {
    "id": "string",
    "text": "string",
    "color": "string",
    "image": "string"
  }
  ```
- `callback`: Hàm được gọi sau khi quay xong.

---

### 2. Xem Lịch Sử

```javascript
WOF.openHistory(listHistory);
```

**Mở popup lịch sử các phần quà đã quay.**

#### Parameters:

- `listHistory`: Mảng phần quà đã nhận, định dạng tương tự như `segmentItems`.

---
