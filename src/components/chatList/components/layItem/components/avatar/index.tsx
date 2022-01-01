/**
 * 头像
 */
import { FC } from 'react'
import './index.scss'
interface IProps {
    src: string
}
const Avatar: FC<IProps> = (props) => {
    return (
        <div className="components_Avatar">
            <img src={props.src} alt=""></img>
        </div>
    )
}
export default Avatar
