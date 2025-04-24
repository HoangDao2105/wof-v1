import { HistoryItemData } from "./Schema";

class DataServiceImp {
    constructor() {

    }

    private _piecesCount: number = 5;
    private _history: HistoryItemData[] = [];
    private _isFree: boolean = true;
    private _score: number = 100;
    private _cost: number = 1;

    public get History(): HistoryItemData[] {
        return this._history;
    }

    public set History(data: HistoryItemData[]) {
        this._history = data;
    }

    public get IsFree(): boolean {
        return this._isFree;
    }

    public set IsFree(data: boolean) {
        this._isFree = data;
    }

    public get Score(): number {
        return this._score;
    }

    public set Score(data: number) {
        this._score = data;
    }

    public get Cost(): number {
        return this._cost;
    }

    public set PieceCount(data: number) {
        this._piecesCount = data;
    }

    public get PieceCount(): number {
        return this._piecesCount;
    }
}

export const DataService = new DataServiceImp(); 