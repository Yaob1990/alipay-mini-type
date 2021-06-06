/**
 * @file 小程序当前运行版本类型
 */
declare namespace AliMiniProgram {
  interface IGetRunSceneSuccessResult {
    /**
     * 小程序当前运行的版本，枚举类型：develop（开发版）、trial（体验版）、release（发布版）
     */
    readonly envVersion: 'develop' | 'trial' | 'release'
  }

  interface IGetRunSceneOptions {
    success(res: IGetRunSceneSuccessResult): void
  }

  export interface my {
    /**
     * 获取当前小程序的运行版本
     */
    getRunScene(res: IGetRunSceneOptions): void
  }
}
