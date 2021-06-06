/**
 * @file webview 组件控制
 */
declare namespace AliMiniProgram {
  interface IWebViewContext {
    /**
     * 小程序向web-view组件发送消息，配合web-view.js中提供的my.postMessage可以实现小程序和web-view网页的双向通信
     */
    postMessage(msg: Record<string, any>): void
  }

  export interface my {
    /**
     * 创建并返回 web-view 上下文 webViewContext 对象。
     *
     * @param webviewId 要创建的web-view所对应的id属性
     */
    createWebViewContext(webviewId: string): IWebViewContext
  }
}
