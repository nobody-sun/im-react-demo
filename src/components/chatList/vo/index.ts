// 一级消息类型
export enum msgType {
    MSG_TEXT,
    MSG_IMAGE,
    MSG_SYSTEM,
}
// 二级自定义&&系统消息类型code
export enum customType {
    commonSystem = 1000, // 通用系统消息类型
    revokeMsg = 1001, // 撤回消息
}

// 消息内容obj
export interface IMsgPayload {
    customType?: customType
    content: any
}
// 消息体
export interface IMessageItem {
    msgKey: string
    to: string
    from: string
    isMsgIn: boolean
    avatar: string
    payload: IMsgPayload
    time: number
    type: msgType
    isRevoke: boolean
}