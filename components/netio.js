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
        const result = await fetch('http://127.0.0.1:3000')
    }

    render() {
        return (
            <Text>这是子组件</Text>
        )
    }
}

export default Netio