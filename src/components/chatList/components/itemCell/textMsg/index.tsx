import { FC } from 'react'
import { IHandledMessageItem } from '../../layItem'
import './index.scss'
interface IProps {
    item: IHandledMessageItem
}
const TextMsg: FC<IProps> = (props) => {
    return <div className="component_TextMsg flex f-ai-c">{props.item.payload.content}</div>
}
export default TextMsg
