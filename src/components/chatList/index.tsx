import * as React from 'react'
import LayItem from './components/layItem'
import './index.scss'
import { IMessageItem } from './vo'

export interface IChatListProps {
    data: Array<IMessageItem>
}
const ChatList: React.FC<IChatListProps> = (props) => {
    return (
        <div className="component_ChatList">
            <div>头部</div>
            {props.data && props.data.length > 0
                ? props.data.map((item, index) => (
                      <LayItem key={item.msgKey} dataItem={item} dataIndex={index} />
                  ))
                : null}
            <div>底部</div>
        </div>
    )
}

export default ChatList
