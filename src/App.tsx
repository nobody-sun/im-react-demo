import React, { Component } from 'react'
import ChatList from './components/chatList'
import { customType, IMessageItem, msgType } from './components/chatList/vo'

interface Props {}
interface State {
    data: Array<IMessageItem>
}

export default class App extends Component<Props, State> {
    public constructor(props: Props) {
        super(props)
        this.state = {
            // mock data
            data: [
                {
                    msgKey: 'to2_from_1_hash4',
                    to: 'toUser',
                    from: 'fromUser',
                    isMsgIn: false,
                    avatar: 'https://cdn.wanwudezhi.com/mall-portal/image/26382609_MTYzMzQzNTc2MzQ0MA==637_563x563.jpg?imageView2/1/w/400/h/400/format/webp',
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
                    avatar: 'https://cdn.wanwudezhi.com/mall-portal/image/17790129_MTYzOTEyMjAyMDY0OQ==420_750x750.jpg?imageView2/1/w/400/h/400/format/webp',
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
                    avatar: 'https://cdn.wanwudezhi.com/mall-portal/image/17790129_MTYzOTEyMjAyMDY0OQ==420_750x750.jpg?imageView2/1/w/400/h/400/format/webp',
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
                    avatar: 'https://cdn.wanwudezhi.com/mall-portal/image/17790129_MTYzOTEyMjAyMDY0OQ==420_750x750.jpg?imageView2/1/w/400/h/400/format/webp',
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
                    avatar: 'https://cdn.wanwudezhi.com/mall-portal/image/17790129_MTYzOTEyMjAyMDY0OQ==420_750x750.jpg?imageView2/1/w/400/h/400/format/webp',
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
                    avatar: 'https://cdn.wanwudezhi.com/mall-portal/image/17790129_MTYzOTEyMjAyMDY0OQ==420_750x750.jpg?imageView2/1/w/400/h/400/format/webp',
                    payload: {
                        content:
                            '哈哈哈哈哈1哈哈哈你好你好哈哈哈哈哈哈哈哈你好你好哈哈哈哈哈哈哈哈你好你好哈哈哈哈哈哈哈哈你好你好哈哈哈哈哈哈哈哈你好你好哈哈哈哈哈哈哈哈你好你好',
                    },
                    time: 123,
                    type: msgType.MSG_TEXT,
                    isRevoke: false,
                },
            ],
        }
    }

    render() {
        const { data } = this.state
        return <ChatList data={data}></ChatList>
    }
}
