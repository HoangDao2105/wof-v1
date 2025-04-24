import { ConfigData } from "./Schema";

export const DefaultConfig: ConfigData={
    gameId: "fortune_wheel",
    values: {
      gameTitle: {
        text: "Vòng Quay May Mắn",
        fontSize: 36,
        fontFamily: "Pacifico",
        color: "#ff3300"
      },
      backgroundImage: {
        source: "cdn",
        cdnLink: "https://gamestag-cdn.taptap.com.vn/media/images/upload/9d8c7ba5-8e07-4857-9167-2c41a309bab9.jpg"
      },
      currencyImage: {
        source: "cdn",
        cdnLink: "https://upload.wikimedia.org/wikipedia/vi/d/d0/Dogecoin_Logo.png"
      },
      logoImage: {
        source: "cdn",
        cdnLink: "https://upload.wikimedia.org/wikipedia/vi/d/d0/Dogecoin_Logo.png"
      },
      startButton: {
        text: "Quay Ngay",
        textColor: "#ffffff",
        backgroundColor: "#28a745",
        backgroundImage: {
          source: "base64",
          base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
        }
      },
      wheel: {
        segmentCount: 8,
        segmentColors: [
          "#f44336", "#e91e63", "#9c27b0", "#2196f3",
          "#4caf50", "#ff9800", "#ffc107", "#795548"
        ],
        segmentTexts: [
          "10 Coins", "Better Luck Next Time", "50 Coins", "Try Again",
          "100 Coins", "Big Win", "Free Spin", "20 Coins"
        ],
        segmentImages: [
          "https://game-cdn.taptap.com.vn/media/images/upload/3550eb48-94a6-4d97-97b6-a7e635cc4359.png",
          "",
          "https://game-cdn.taptap.com.vn/media/images/upload/3550eb48-94a6-4d97-97b6-a7e635cc4359.png",
          "",
          "https://game-cdn.taptap.com.vn/media/images/upload/3550eb48-94a6-4d97-97b6-a7e635cc4359.png",
          "https://game-cdn.taptap.com.vn/media/images/upload/3550eb48-94a6-4d97-97b6-a7e635cc4359.png",
          "",
          "https://game-cdn.taptap.com.vn/media/images/upload/3550eb48-94a6-4d97-97b6-a7e635cc4359.png"
        ]
      },
      spinButton: {
        text: "SPIN!",
        textColor: "#ffffff",
        backgroundColor: "#ff5722",
        backgroundImage: {
            source: "cdn",
            cdnLink: "https://game-cdn.taptap.com.vn/media/images/upload/3550eb48-94a6-4d97-97b6-a7e635cc4359.png"
          }
      }
    }
  }