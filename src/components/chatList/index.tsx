import { FC, useRef, useEffect, SyntheticEvent } from 'react'
import LayItem from './components/layItem'
import './index.scss'
import { IMessageItem } from './vo'

export interface IChatListProps {
    data: Array<IMessageItem>
    height?: string
    onReachBottom?: Function // 触底事件
    onReachTop?: () => Promise<boolean> // 触顶事件
    reachTopImmidiate?: boolean // 默认是否触发一次onReachTop
    hasMore?: boolean // 数据是否还有剩余未拉取完成
    loading?: boolean // 顶部loading
}
const ChatList: FC<IChatListProps> = (props) => {
    const chatListRef = useRef<HTMLDivElement | null>(null)
    const { data, height, onReachBottom, onReachTop, loading, reachTopImmidiate } = props

    const onScroll = async (e: SyntheticEvent) => {
        if (chatListRef.current) {
            const { scrollTop, clientHeight, scrollHeight } = chatListRef.current
            if (scrollTop + clientHeight === scrollHeight) {
                onReachBottom && onReachBottom()
            } else if (scrollTop === 0) {
                onReachTop && (await onReachTop())
                setTimeout(() => {
                    // 数据渲染完成后把scrollTop 调整到原位置
                    if (chatListRef.current) {
                        chatListRef.current.scrollTop =
                            chatListRef.current.scrollHeight - scrollHeight
                    }
                }, 0)
            }
        }
    }
    /**
     * 初始化时将scroll触底
     */
    const initScroll = () => {
        setTimeout(() => {
            if (chatListRef && chatListRef.current) {
                const { clientHeight, scrollHeight } = chatListRef.current
                chatListRef.current.scrollTop = scrollHeight - clientHeight
            }
        }, 0)
    }
    useEffect(() => {
        const asyncInit = async () => {
            reachTopImmidiate && onReachTop && (await onReachTop())
            initScroll()
        }
        asyncInit()
    }, [onReachTop, reachTopImmidiate])
    return (
        <div
            className="component_ChatList"
            ref={chatListRef}
            style={{ height }}
            onScrollCapture={onScroll}
        >
            {
                // 简陋的loading
                loading && <div className="flex f-c">loading...</div>
            }
            {
                // 列表主体
                data && data.length > 0 ? (
                    data.map((item, index) => (
                        <LayItem key={item.msgKey} dataItem={item} dataIndex={index} />
                    ))
                ) : (
                    // 简陋的兜底
                    <div className="flex f-c">暂无消息</div>
                )
            }
        </div>
    )
}
ChatList.defaultProps = {
    height: '100%',
    loading: false,
    reachTopImmidiate: true,
    hasMore: true,
}
export default ChatList
