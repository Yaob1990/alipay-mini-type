/**
 * @file 支付代扣签约
 */
declare namespace AliMiniProgram {
  interface IPaySignCenterOptions {
    signStr: string

    success?(res: any): void

    fail?(res: 7000 | 7001 | 7002 | 6001 | 6002): void

    complete?(): void
  }

  export interface my {
    paySignCenter(options: IPaySignCenterOptions): void
  }
}
