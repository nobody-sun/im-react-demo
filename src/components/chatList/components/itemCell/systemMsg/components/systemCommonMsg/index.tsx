/**
 * 通用无逻辑系统消息
 */
import { FC } from 'react'
interface Iprops {
    content: string
}
const systemCommonMsg: FC<Iprops> = (props) => {
    return <div className="components_SystemGroupMsg">{props.content}</div>
}

export default systemCommonMsg
