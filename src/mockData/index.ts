import { customType, IMessageItem, msgType } from '../components/chatList/vo'

export const mockToAvatar =
    'https://cdn.wanwudezhi.com/mall-portal/image/26382609_MTYzMzQzNTc2MzQ0MA==637_563x563.jpg?imageView2/1/w/400/h/400/format/webp'
export const mockFromAvatar =
    'https://cdn.wanwudezhi.com/mall-portal/image/17790129_MTYzOTEyMjAyMDY0OQ==420_750x750.jpg?imageView2/1/w/400/h/400/format/webp'
export const mockDataList: IMessageItem[] = [
    {
        msgKey: 'to2_from_1_hash4',
        to: 'toUser',
        from: 'fromUser',
        isMsgIn: false,
        avatar: mockToAvatar,
        payload: { content: '你好' },
        time: 123,
        type: msgType.MSG_TEXT,
        isRevoke: false,
    },
    {
        msgKey: 'to1_from_2_hash3',
        to: 'toUser',
        from: 'fromUser',
        isMsgIn: true,
        avatar: mockFromAvatar,
        payload: { content: '123' },
        time: 123,
        type: msgType.MSG_TEXT,
        isRevoke: false,
    },
    {
        msgKey: 'to1_from_2_hash9',
        to: 'toUser',
        from: 'fromUser',
        isMsgIn: true,
        avatar: mockFromAvatar,
        payload: {
            content:
                'https://cdn.wanwudezhi.com/mall-portal/image/17790129_MTYzNzYwOTg1ODA3MQ==637_1200x1200.jpg?imageView2/1/w/562/h/720/format/webp',
        },
        time: 123,
        type: msgType.MSG_IMAGE,
        isRevoke: false,
    },
    {
        msgKey: 'to1_from_2_hash10',
        to: 'toUser',
        from: 'fromUser',
        isMsgIn: true,
        avatar: mockFromAvatar,
        payload: {
            customType: customType.revokeMsg,
            content:
                'https://cdn.wanwudezhi.com/mall-portal/image/17790129_MTYzNzYwOTg1ODA3MQ==637_1200x1200.jpg?imageView2/1/w/562/h/720/format/webp',
        },
        time: 123,
        type: msgType.MSG_SYSTEM,
        isRevoke: false,
    },
    {
        msgKey: 'to1_from_2_hash11',
        to: 'toUser',
        from: 'fromUser',
        isMsgIn: true,
        avatar: mockFromAvatar,
        payload: {
            customType: customType.commonSystem,
            content: 'toUser邀请fromUser加入群聊',
        },
        time: 123,
        type: msgType.MSG_SYSTEM,
        isRevoke: false,
    },
    {
        msgKey: 'to1_from_2_hash14',
        to: 'toUser',
        from: 'fromUser',
        isMsgIn: true,
        avatar: mockFromAvatar,
        payload: {
            content:
                '你好~你好~你好~你好~你好~你好~你好~你好~你好~你好~你好~你好~你好~你好~你好~你好~你好~你好~你好~你好~你好~你好~你好~你好~你好~你好~你好~你好~你好~你好~你好~',
        },
        time: 123,
        type: msgType.MSG_TEXT,
        isRevoke: false,
    },
]

export const getRandomMsgItem: (index: number) => IMessageItem = (i: number) => {
    const random = Math.random()
    return {
        msgKey: `to2_from_1_hash123${i + random}`,
        to: 'toUser',
        from: 'fromUser',
        isMsgIn: !!(i % 2),
        avatar: !(i % 2) ? mockToAvatar : mockFromAvatar,
        payload: { content: `你好${random}` },
        time: 123,
        type: msgType.MSG_TEXT,
        isRevoke: false,
    }
}