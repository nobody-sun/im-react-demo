import React, { Component } from 'react'
import ChatList from './components/chatList'
import { IMessageItem } from './components/chatList/vo'
import { mockDataList, getRandomMsgItem } from './mockData'
interface Props {}
interface State {
    data: Array<IMessageItem>
    loading: boolean
}

export default class App extends Component<Props, State> {
    public constructor(props: Props) {
        super(props)
        this.state = {
            // mock data
            data: JSON.parse(JSON.stringify(mockDataList)),
            loading: false,
        }
    }
    // mock 加载数据
    private pushMockData = () => {
        const mockArr: Array<IMessageItem> = []
        for (let i = 0; i < 10; i++) {
            mockArr.push(getRandomMsgItem(i))
        }
        this.setState({
            data: [...mockArr, ...this.state.data],
        })
    }
    private onReachTop = () => {
        this.setState({
            loading: true,
        })
        // 简单mock一下上拉加载数据
        return new Promise((resolve: (value: boolean) => void, reject) => {
            setTimeout(() => {
                try {
                    this.pushMockData()
                    this.setState(
                        {
                            loading: false,
                        },
                        () => resolve(true),
                    )
                } catch (error) {
                    reject(error)
                }
            }, 400)
        })
    }
    render() {
        const { data, loading } = this.state
        return (
            <ChatList
                data={data}
                height="400px"
                onReachBottom={() => {
                    console.log('onReachBottom')
                }}
                onReachTop={this.onReachTop}
                reachTopImmidiate={true}
                hasMore={true}
                loading={loading}
            ></ChatList>
        )
    }
}
