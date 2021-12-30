/**
 * 该层主要做数据处理，以及一些消息体通用的处理
 */
import React, { ReactNode } from 'react'
import { IMessageItem, msgType } from '../../vo'
import TextMsg from '../itemCell/textMsg'
import classNames from 'classnames'
import './index.scss'
import ImageMsg from '../itemCell/imageMsg'
import SystemMsg from '../itemCell/systemMsg'
import Avatar from './components/avatar'
type IProps = {
    dataItem: IMessageItem
    dataIndex: number
}
export interface IHandledMessageItem extends IMessageItem {
    tag: string
}
const LayItem: React.FC<IProps> = (props) => {
    const { avatar, isMsgIn, type } = props.dataItem
    // 是否是系统消息
    const isSystemMsg = type === msgType.MSG_SYSTEM
    // 数据处理层函数,与视图层做抽离
    const dataItemHandler = (): IHandledMessageItem => {
        return { tag: 'test', ...props.dataItem }
    }

    const warpRender = (dom: ReactNode) => {
        let warp
        if (isSystemMsg) {
            warp = <div className={'layitem_system_warp flex f-jc-c'}>{dom}</div>
        } else {
            warp = (
                <div
                    className={classNames('layitem_common_warp', {
                        layitem_common_warp_out: !isMsgIn,
                    })}
                >
                    {dom}
                </div>
            )
        }
        return warp
    }
    /**
     * 函数
     * @returns comp
     */
    const layItemRender = () => {
        let comp
        let handledItem = dataItemHandler()
        switch (type) {
            case msgType.MSG_TEXT:
                comp = <TextMsg item={handledItem}></TextMsg>
                break
            case msgType.MSG_IMAGE:
                comp = <ImageMsg item={handledItem}></ImageMsg>
                break
            case msgType.MSG_SYSTEM:
                comp = <SystemMsg item={handledItem}></SystemMsg>
                break
            default:
                comp = null
                break
        }
        return comp ? comp : null
    }
    return (
        <div
            className={classNames('component_LayItem flex', {
                'f-fd-rr': !isMsgIn && !isSystemMsg,
            })}
        >
            {/* 头像 */}
            {!isSystemMsg ? <Avatar src={avatar}></Avatar> : null}
            {/* 消息体主体 */}
            {warpRender(layItemRender())}
        </div>
    )
}

export default LayItem
