/**
 * @file 罗盘
 */
declare namespace AliMiniProgram {
  interface IOnCompassChangeEvent {
    /**
     * 面对的方向与正北方向的度数[0,360)
     */
    readonly direction: number
  }

  export interface my {
    /**
     * 监听罗盘数据，接口调用后会自动开始监听，回调间隔为500ms，可使用my.offCompassChange停止监听。
     */
    onCompassChange(cb: (res: IOnCompassChangeEvent) => void): void

    /**
     * 停止监听罗盘数据。
     */
    offCompassChange(callback?: (res: IOnCompassChangeEvent) => void): void
  }
}
