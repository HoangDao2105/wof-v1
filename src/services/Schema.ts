export interface AccessTokenData {
  token: string;
  accessToken?: string;
  email: string;
  id: string;
  seq: number;
  isActive: boolean;
  displayName: string;
  status?: number;
  ttl: number;
  provider?: string;
  providerId?: string;
  isNew?: boolean
}

export interface HistoryItemData {
  value: string;
  getTime: number;
  imageUrl?: string;
}

export interface ConfigData{
    gameId: string;
    values:{
      gameTitle:TextConfig;
      backgroundImage: BackgroundConfig;
      currencyImage?: BackgroundConfig;
      logoImage?: BackgroundConfig;
      startButton: ButtonConfig;
      wheel: WheelConfig;
      spinButton: ButtonConfig;
    }
}

export interface TextConfig{
  text: string;
  fontSize: number;
  fontFamily: string;
  color: string;
}

export interface BackgroundConfig{
  source: string,
  cdnLink?:string;
  base64?: string; 
}

export interface ButtonConfig{
    text: string;
    textColor: string;
    backgroundColor: string;
    backgroundImage?: BackgroundConfig;
}

export interface WheelConfig{
    segmentCount: number;
    segmentColors: string[];
    segmentTexts: string[];
    segmentImages:string[];
}
