/**
 * @file 加速度计
 */
declare namespace AliMiniProgram {
  interface IOnAccelerometerChangeEvent {
    /**
     * X 轴
     */
    readonly x: number

    /**
     * Y 轴
     */
    readonly y: number

    /**
     * Z 轴
     */
    readonly z: number
  }

  export interface my {
    /**
     * 监听加速度数据，回调间隔为500ms，接口调用后会自动开始监听，可使用my.offAccelermeterChange()停止监听。
     */
    onAccelerometerChange(cb: (res: IOnAccelerometerChangeEvent) => void): void

    /**
     * 停止监听加速度数据。
     */
    offAccelerometerChange(
      callback?: (res: IOnAccelerometerChangeEvent) => void
    ): void
  }
}
