/**
 * 撤回系统消息，虽然我觉得消息撤回并不应该以一种单独的系统消息类型来处理
 */
import { FC } from 'react'
interface Iprops {}
const SystemRevoke: FC<Iprops> = () => {
    const handler = () => {
        // 触发重新编辑
        console.log('重新编辑')
    }
    return (
        <div className="components_SystemRevoke">
            你撤回了一条消息
            <span
                onClick={handler}
                style={{ color: 'rgb(107,122,156)', marginLeft: '4px', cursor: 'pointer' }}
            >
                重新编辑
            </span>
        </div>
    )
}

export default SystemRevoke
