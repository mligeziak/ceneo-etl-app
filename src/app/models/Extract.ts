export class Extract {
  private _reviewsCount: number;
  private _pageCount: number;
  private _time: number;

  get reviewsCount(): number {
    return this._reviewsCount;
  }

  set reviewsCount(value: number) {
    this._reviewsCount = value;
  }

  get pageCount(): number {
    return this._pageCount;
  }

  set pageCount(value: number) {
    this._pageCount = value;
  }

  get time(): number {
    return this._time;
  }

  set time(value: number) {
    this._time = value;
  }
}