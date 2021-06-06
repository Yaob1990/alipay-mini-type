/**
 * @file 摇一摇
 */
declare namespace AliMiniProgram {
  interface IWatchShakeOptions {
    success(): void
  }

  export interface my {
    /**
     * 摇一摇功能。每次调用API，在摇一摇手机后触发回调，如需再次监听需要再次调用这个API。
     */
    watchShake(options?: IWatchShakeOptions): void
  }
}
