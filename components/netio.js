import React from "react";
import {Text, LogBox} from 'react-native'

class Netio extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: ''
        }
    }

    async componentDidMount() {
        const result = await fetch('http://10.3.0.191:3000')
        console.log(result)
        const b = await result.json()
        console.log(b)
        this.setState({msg: b.data.msg})
    }

    render() {
        return (
            <Text>这是子组件{this.state.msg}</Text>
        )
    }
}

export default Netio