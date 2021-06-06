/**
 * @file 震动
 */
declare namespace AliMiniProgram {
  interface IVibrateOptions {
    success?(): void
  }

  interface IVibrateLongOptions {
    success(): void
  }

  interface IVibrateShortOptions {
    success(): void
  }

  export interface my {
    /**
     * 较短时间的振动 (40ms)。
     */
    vibrateShort(options?: IVibrateShortOptions): void
    /**
     * 调用振动功能。
     */
    vibrate(options?: IVibrateOptions): void
    /**
     * 较长时间的振动 (400ms)。
     */
    vibrateLong(options?: IVibrateLongOptions): void
  }
}
