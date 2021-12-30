import { FC } from 'react'
import { IHandledMessageItem } from '../../layItem'
import './index.scss'
interface IProps {
    item: IHandledMessageItem
}
const ImageMsg: FC<IProps> = (props) => {
    return <img className="component_ImageMsg" src={props.item.payload.content} alt=""></img>
}
export default ImageMsg
