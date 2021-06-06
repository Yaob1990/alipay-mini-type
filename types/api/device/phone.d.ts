/**
 * @file 拨打电话
 */
declare namespace AliMiniProgram {
  interface IMakePhoneCallOptions {
    /**
     * 电话号码
     */
    number: string
  }

  export interface my {
    /**
     * 拨打电话。
     */
    makePhoneCall(options: IMakePhoneCallOptions): void
  }
}
