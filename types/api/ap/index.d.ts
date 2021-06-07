/**
 * @file 升级支付宝最新版本
 */
declare namespace AliMiniProgram {
    interface IUpdateAlipayClientSuccessResult {
        readonly success: boolean;
    }

    interface IUpdateAlipayClientOptions {
        /**
         * 跳转成功
         */
        success?(res: IUpdateAlipayClientSuccessResult): void;

        /**
         * - 3：发生未知错误
         */
        fail?(error: any): void;
    }

    interface IPreventCheatBizContext {
        /**
         * 合作伙伴匹配服务类型
         */
        service: 'marketing';

        /**
         * 风险策略类型
         */
        risk_type: 'riskinfo_anticheat_common';

        /**
         * 用于输入用户注册的手机号码。
         */
        mobile_no: string;

        /**
         * 申请业务合作伙伴ID
         */
        pid: string;

        /**
         * 支付宝用户ID
         */
        user_id?: string;

        /**
         * 银行卡号
         */
        bank_card_no?: string;

        /**
         * 用于输入用户的身份证号码
         */
        cert_no?: string;

        /**
         * 账户登录IP
         */
        client_ip?: string;

        /**
         * 邮箱账号
         */
        email_address?: string;

        /**
         * 手机序列号
         */
        imei?: string;

        /**
         * 国际移动用户识别码
         */
        imsi?: string;

        /**
         * mac地址或设备唯一标识
         */
        mac_address?: string;

        /**
         * 拓展字段，其余信息通过此字段进行传输：
         *
         * 业务约定：
         *  - nickname:账户昵称；
         *  - reg_time:账户注册时间
         */
        extended_info?: string;
    }

    interface IPreventCheatSuccessResult {
        /**
         * 风险识别结果：
         *
         * riskinfo_anticheat_common—风险评级结果：
         *  - rank0 信息不足/参数有误
         *  - rank1 表示用户作弊风险为低
         *  - rank2 表示用户作弊风险为中
         *  - rank3 表示用户作弊风险为高
         *
         * riskinfo_anticheat_common_infocode—风险评级说明：
         *  - 171-作弊风险
         *
         * @example {\"riskinfo_anticheat_common\":\"rank3\",\"riskinfo_anticheat_common_infocode\":\"171\"}
         */
        readonly riskResult: string;

        /**
         * 风险信息描述
         *
         * @example {\"rank0\":\"等级0\"}
         */
        readonly riskResultDesc: string;

        /**
         * 业务唯一识别码
         *
         * 用户标识请求信息
         *
         * @example 0b92uueie87636222
         */
        readonly uniqueId: string;
    }

    interface IPreventCheatFailResult {
        /**
         * 识别错误码
         */
        readonly error: string;

        /**
         * - serviceNoAuth：服务未授权。请检查配置的账户是否有当前接口权限以及service参数是否正确
         * - riskTypeNoAuth：场景（risktype）未授权。请检查risktype参数是否正确
         * - bizContentEmpty：风险数据内容为空。检查入参格式
         * - paramMissingError：参数缺失。检查必传参数是否传入
         * - param error：参数错误。检查入参格式是否符合文档要求
         * - SYSTEM_OUT_ERROR：系统繁忙。请稍后再试
         * - INVALID_PARAMETER：缺少必选参数或参数有误。检查参数是否正确或者缺失
         * - OVER_LIMIT：超过调用量限制。如需增加额度，请发邮件至RiskGoCSC@service.alipay.com进行申请
         */
        readonly errorMessage:
            | 'serviceNoAuth'
            | 'riskTypeNoAuth'
            | 'bizContentEmpty'
            | 'paramMissingError'
            | 'param error'
            | 'SYSTEM_OUT_ERROR'
            | 'INVALID_PARAMETER'
            | 'OVER_LIMIT';
    }

    interface IPreventCheatOptions {
        /**
         * 小程序的开放平台账号
         */
        pid: string;

        /**
         * 小程序对应的APPID
         */
        appId: string;

        /**
         * 需要识别的业务参数
         */
        biz_context: IPreventCheatBizContext;

        /**
         * 调用成功的回调函数
         */
        success?(res: IPreventCheatSuccessResult): void;

        /**
         * 调用失败的回调函数
         */
        fail?(res: IPreventCheatFailResult): void;

        /**
         * 调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(res: IPreventCheatFailResult | IPreventCheatSuccessResult): void;
    }

    interface INsfSuccessResult {
        /**
         * 风险识别结果：
         * - riskinfo_nsf_common—风险评级结果 rank0 提供信息不足，提供参数信息有误，或提供的支付宝账号不存在
         *  - rank1 表示用户拒付风险为低rank2 表示用户拒付风险为中
         *  - rank3 表示用户拒付风险为高；
         *
         * - riskinfo_nsf_common_infocode——表示风险识别类型；先享后付场景下当前类型标识为172，无其余类型；
         *
         * @example {\"riskinfo_nsf_common_infocode\":\"172\",\"riskinfo_nsf_common\":\"rank1\"}
         */
        readonly riskResult: string;

        /**
         * 风险信息描述
         *
         * @example {"rank0":"等级0"}
         */
        readonly riskResultDesc: string;

        /**
         * 业务唯一识别码
         *
         * 用户标识请求信息
         *
         * @example 0b92uueie87636222
         */
        readonly uniqueId: string;
    }

    interface INsfFailResult {
        /**
         * 识别错误码
         */
        readonly errorCode: string;

        /**
         * 识别错误信息
         *
         * - serviceNoAuth：服务未授权。请检查配置的账户是否已签约响应的功能包
         * - riskTypeNoAuth：场景（risktype）未授权。请检查配置的账户是否已签约响应的功能包；请检查risktype参数是否正确
         * - bizContentEmpty：风险数据内容为空。检查入参数据格式
         * - paramMissingError：参数缺失。检查必传参数是否传入
         * - param error：参数错误。检查入参格式是否符合文档要求
         * - SYSTEM_OUT_ERROR：系统繁忙。请稍后再试
         * - INVALID_PARAMETER：缺少必选参数或参数有误。检查参数是否正确或者缺失
         * - OVER_LIMIT：超过调用量限制。如需增加额度，请发邮件至RiskGoCSC@service.alipay.com进行申请
         */
        readonly errorMessage: string;
    }

    interface INsfOptions {
        /**
         * 小程序的开放平台账号
         */
        pid: string;

        /**
         * 小程序对应的APPID
         */
        appId: string;

        /**
         * 需要识别的业务参数
         */
        biz_context: {
            /**
             * 用于代表商户风险类型
             */
            risk_type: 'riskinfo_nsf_common';

            /**
             * 用于输入使用此服务的商户ID
             */
            pid: string;

            /**
             * 用于输入用户支付宝的 2088 账号，如不了解此字段如何获取，可了解下静默授权。如参数无法提供，请填写“null”
             */
            user_id: string;

            /**
             * 用于输入用户注册支付宝的手机号码。如参数无法提供，请填写“null”
             */
            mobile_no: string;

            /**
             * 用于输入用户身份证号。如参数无法提供，请填写“null”
             */
            cert_no?: string;

            /**
             * 用于输入用户产生交易时的地理位置信息。如参数无法提供，请填写“null”
             */
            lbs: string;

            /**
             * 用户购买或使用服务时产生的具体金额。如参数无法提供，请填写“null”
             */
            sales_amount: string;
        };

        /**
         * 调用成功的回调函数
         */
        success?(res: INsfSuccessResult): void;

        /**
         * 调用失败的回调函数
         */
        fail?(res: INsfFailResult): void;

        /**
         * 调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(res: INsfSuccessResult | INsfFailResult): void;
    }

    interface IFaceVerifySuccessResult {
        /**
         * 刷脸认证标识
         */
        readonly zimId: string;

        /**
         * 刷脸认证结果返回码
         *
         * - 1000：刷脸认证成功
         * - 1001：系统错误
         * - 1003：验证中断
         * - 2002：网络错误
         * - 2006：刷脸失败
         */
        readonly faceRetCode?: '1000' | '1001' | '1003' | '2002' | '2006';

        /**
         * 认证可用性返回码
         *
         * - OK_SUCCESS：刷脸可用性判断通过，代表刷脸功能可用
         * - SYSTEM_ERROR：系统错误
         * - ACCOUNT_SERVICE_SUSPEND：用户不可用刷脸
         * - HIGH_RISK：刷脸失败次数过多，请稍候再试
         * - DEVICE_NOT_SUPPORT：设备不支持刷脸
         * - OS_NOT_SUPPORT：手机操作系统不支持刷脸
         * - SDKVERSION_NOT_SUPPORT：SDK版本不支持
         * - ASSET_NOT_AVAILABLE：刷脸资源未准备好
         * - UNABLE_GET_IMAGE：比对源不可用
         * - ALG_NOT_SUPPORT：算法不支持
         * - NOT_REAL_NAME：非实名认证用户
         */
        readonly retCode:
            | 'OK_SUCCESS'
            | 'SYSTEM_ERROR'
            | 'ACCOUNT_SERVICE_SUSPEND'
            | 'HIGH_RISK'
            | 'DEVICE_NOT_SUPPORT'
            | 'OS_NOT_SUPPORT'
            | 'SDKVERSION_NOT_SUPPORT'
            | 'ASSET_NOT_AVAILABLE'
            | 'UNABLE_GET_IMAGE'
            | 'ALG_NOT_SUPPORT'
            | 'NOT_REAL_NAME';

        /**
         * 认证可用性返回码明细
         */
        readonly retCodeSub: string;

        /**
         * 认证可用性结果描述
         */
        readonly retMessageSub?: string;
    }

    interface IFaceVerifyOptions {
        /**
         * 业务流水号，需要保证唯一性，不超过64位
         */
        bizId: string;

        /**
         * 填写 2，代表刷脸认证场景
         */
        bizType: string;

        /**
         * 是否使用后置摄像头，true为使用后置摄像头；不设置时，默认使用前置摄像头
         */
        useBackCamera?: boolean;

        /**
         * 调用成功的回调函数 (返回刷脸调用结果，包括刷脸认证成功和失败的结果)
         */
        success?(res: IFaceVerifySuccessResult): void;

        /**
         * 调用失败的回调函数 （返回小程序框架系统错误）
         */
        fail?(error: any): void;
    }

    interface IImgRiskOptions {
        /**
         * 小程序的开放平台账号
         */
        pid: string;

        /**
         * 小程序对应的APPID
         */
        appId: string;

        /**
         * 需要识别的业务参数
         */
        biz_context: {
            /**
             * 风险类型，固定传img_risk
             */
            risk_type: 'img_risk';

            /**
             * 需要验证的图片URL
             */
            content: string;
        };

        /**
         * 调用成功的回调函数
         */
        success?(res: IImgRiskSuccessResult): void;

        /**
         * 调用失败的回调函数
         */
        fail?(res: IImgRiskFailResult): void;

        /**
         * 调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(res: IImgRiskSuccessResult | IImgRiskFailResult): void;
    }

    interface IImgRiskFailResult {
        /**
         * 识别错误码
         */
        errorCode: string;

        /**
         * 识别错误信息
         */
        errorMessage: string;
    }

    interface IImgRiskSuccessResult {
        /**
         * 图片风险识别的任务的任务ID。
         *
         * @example \"apply_id\":\"dfaef54c-70ae-4011-91cc-5806d7bb0990\"
         */
        risk_result: string;

        /**
         * 风险识别结果描述。返回结果会默认为空，忽略即可
         */
        risk_result_desc: string;

        /**
         * 业务唯一识别码
         *
         * @example 0b92uueie87636222
         */
        uniqueId: string;
    }

    interface IImgRiskCallbackSuccessResult {
        /**
         * 图片风险识别的任务的任务ID
         *
         * @example
         *  \"action\":\"REJECTED\"
         *  \"action\":\"PASSED\"
         */
        readonly risk_result: string;

        /**
         * 风险识别结果描述
         *
         * @example
         *   \"REJECTED\":\"拦截\"
         *   \"PASSED\":\"放过\
         */
        readonly risk_result_desc: string;

        /**
         * 业务唯一识别码
         *
         * @example 0b92uueie87636222
         */
        readonly uniqueId: string;
    }

    interface IImgRiskCallbackFailResult {
        /**
         * 识别错误码
         */
        readonly errorCode: string;

        /**
         * 识别错误信息
         *
         * - serviceNoAuth：服务未授权。请检查配置的账户是否已签约响应的功能包
         * - riskTypeNoAuth：场景（risktype）未授权。请检查配置的账户是否已签约响应的功能包；请检查risktype参数是否正确
         * - bizContentEmpty：风险数据内容为空。检查入参数据格式
         * - paramMissingError：参数缺失。检查必传参数是否传入
         * - param error：参数错误。检查入参格式是否符合文档要求
         * - SYSTEM_OUT_ERROR：系统繁忙。请稍后再试
         * - INVALID_PARAMETER：缺少必选参数或参数有误。检查参数是否正确或者缺失
         * - OVER_LIMIT：超过调用量限制。如需增加额度，请发邮件至RiskGoCSC@service.alipay.com进行申请
         */
        readonly errorMessage: string;
    }

    interface IImgRiskCallbackOptions {
        /**
         * 小程序的开放平台账号
         */
        pid: string;

        /**
         * 小程序对应的APPID
         */
        appId: string;

        /**
         * 需要识别的业务参数
         */
        biz_context: {
            /**
             * 风险类型
             */
            risk_type: 'img_risk_result';

            /**
             * 需要查询图片的任务id
             */
            apply_id: string;
        };

        /**
         * 调用成功的回调函数
         */
        success?(res: IImgRiskCallbackSuccessResult): void;

        /**
         * 调用失败的回调函数
         */
        fail?(): void;

        /**
         * 调用结束的回调函数（调用成功、失败都会执行）
         */
        complete?(): void;
    }

    interface INavigateToAlipayPageSuccessResult {
        readonly success: boolean;
    }

    interface INavigateToAlipayPageOptions {
        /**
         * 要跳转的支付宝业务、运营活动schema或url，如果url中带有参数，请务必先将整个url做encode处理
         *
         * 注：path目前暂未全量开放，跳转链接请找对应的接口人咨询。
         */
        path: string;

        /**
         * 跳转成功
         */
        success?(res: INavigateToAlipayPageSuccessResult): void;

        /**
         * 跳转失败
         *
         * - 2：参数错误，打开失败
         */
        fail?(error: any): void;
    }

    export interface my {
        ap: {
            /**
             * 打开支付宝客户端升级界面，用户可主动选择升级支付宝客户端。
             */
            updateAlipayClient(options: IUpdateAlipayClientOptions): void;

            preventCheat(options: IPreventCheatOptions): void;

            /**
             * 有关先享后付保障的产品和接入介绍，详见[先享后付保障](https://docs.alipay.com/mini/introduce/non-sufficient-funds)
             */
            nsf(options: INsfOptions): void;

            /**
             * 该接口通过活体检测和人脸比对技术，认证当前用户是否为登陆支付宝用户的本人和真人。
             */
            faceVerify(options: IFaceVerifyOptions): void;

            /**
             * 图片风险咨询任务提交接口，用于提交
             */
            imgRisk(options: IImgRiskOptions): void;

            imgRiskCallback(options: IImgRiskCallbackOptions): void;

            /**
             * 小程序中跳转到支付宝官方业务或运营活动页面，例如共享单车、城市服务。
             */
            navigateToAlipayPage(options: INavigateToAlipayPageOptions): void;
        };
    }
}
