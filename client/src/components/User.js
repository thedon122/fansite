import React, {Component} from 'react'
import axios from 'axios'

class User extends Component {
    state = {
        User: []
    }
    componentDidMount(){
        this.getUsers
    }
    getUsers= ()=>{
        axios.get(`api/User`)
        .then(res =>{
            console.log("Saving users to state", res.data)
            this.setState({ users: res.data })
        })
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
export default User