🎯 Fortune Wheel Game
Đây là một mini game vòng quay may mắn được cấu hình và khởi tạo bằng JavaScript sử dụng thư viện WOF (Wheel of Fortune).
🔧 Cấu Hình Game
Example về schema của config game vòng quay

const config = {
      gameId: "fortune_wheel",
      values: {
        logoImage: {
          source: "cdn" | "base64",
          cdnLink: string
        },
        wheel: {
          imageMode: boolean,
          imageUrl?: string,
          segmentCount: number,
          radius: number,
          segmentItems: 
            {
              id: string,
              text: string,
              color: string,
              image: string
            }[]
        },
      }
    }
▶️ Khởi Tạo Game

WOF.initialize("container_id", config);
Hàm này để khởi tạo và render ra trên Iframe hiện tại đang sử dụng khi import SDK này vào
#params:
containerId: container id để render vòng quay trên thẻ đó.
config: là cấu hình game truyền vào để render ra vòng quay.

🎮 Chức Năng
1. Quay Vòng (Spin)
WOF.spin(gift, callback);
Hàm này dùng để bắt đầu quay vòng quay và dừng ở phần quà đã truyền vào.
#params:
gift: là một phần tử của segmentItems trên mục Cấu hình Game data gồm có {id: string, text: string, color: string, image: string}
callback: là một action thực hiện sau khi quay xong vòng quay

2. Xem lịch sử
WOF.openHistory(listHistory);
Hàm này dùng để xem lịch sử vòng quay các phần quà đã nhận.
#params:
listHistory: là một mãng segmentItems như trên mục Cấu hình Game data gồm có {id: string, text: string, color: string, image: string}
