import { FC } from 'react'
import { customType } from '../../../vo'
import { IHandledMessageItem } from '../../layItem'
import SystemCommonMsg from './components/systemCommonMsg'
import SystemRevoke from './components/systemRevoke'
import './index.scss'
interface IProps {
    item: IHandledMessageItem
}

const SystemMsg: FC<IProps> = (props) => {
    const { content } = props.item.payload
    const systemMsgRender = () => {
        let dom
        const { payload } = props.item
        switch (payload.customType) {
            case customType.revokeMsg:
                dom = <SystemRevoke></SystemRevoke>
                break
            default:
                dom = <SystemCommonMsg content={content}></SystemCommonMsg>
                break
        }
        return dom
    }
    return <div className="component_SystemMsg flex f-ai-c">{systemMsgRender()}</div>
}
export default SystemMsg
