/**
 * @file 屏幕亮度
 */
// tslint:disable-next-line:no-bad-reference
/// <reference path="../../common/IFailResult.d.ts" />

declare namespace AliMiniProgram {
  interface IGetKeepScreenOnSuccessResult {
    brightness: number
    success: boolean
  }

  interface ISetKeepScreenOnSuccessResult {
    success: boolean
  }

  interface ISetKeepScreenSuccessResult {
    success: boolean
  }

  interface ISetKeepScreenOnOptions {
    /**
     * 是否保持屏幕长亮状态
     */
    keepScreenOn: boolean

    /**
     * 接口调用成功的回调函数
     */
    success?(res: ISetKeepScreenOnSuccessResult): void

    /**
     * 调用失败的回调函数
     */
    fail?(res: IFailResult): void

    /**
     * 调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(): void
  }

  interface IGetScreenBrightnessOptions {
    /**
     * 接口调用成功的回调函数
     */
    success?(res: IGetKeepScreenOnSuccessResult): void

    /**
     * 调用失败的回调函数
     */
    fail?(res: IFailResult): void

    /**
     * 调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(): void
  }



  interface ISetScreenBrightnessOptions {
    /**
     * 需要设置的屏幕亮度，取值范围0-1
     */
    brightness: number

    /**
     * 接口调用成功的回调函数
     */
    success?(res: ISetKeepScreenSuccessResult): void

    /**
     * 调用失败的回调函数
     */
    fail?(res: IFailResult): void

    /**
     * 调用结束的回调函数（调用成功、失败都会执行）
     */
    complete?(): void
  }

  export interface my {
    /**
     * 设置屏幕亮度
     */
    setScreenBrightness(options: ISetScreenBrightnessOptions): void
    /**
     * 设置是否保持屏幕长亮状态。仅在当前小程序生效，离开小程序后失效。
     */
     setKeepScreenOn(options: ISetKeepScreenOnOptions): void
    /**
     * 获取屏幕亮度
     */
     getScreenBrightness(options: IGetScreenBrightnessOptions): void
  }
}
