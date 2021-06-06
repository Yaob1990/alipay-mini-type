/**
 * @file 设置页面是否支持下拉
 */

declare namespace AliMiniProgram {
  interface ICanPullDownOptions {
    canPullDown: boolean
  }

  export interface my {
    /**
     * 设置页面是否支持下拉（小程序内页面默认支持下拉）
     */
    setCanPullDown(options: ICanPullDownOptions): void
  }
}
