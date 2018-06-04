import React, {Component} from 'react'
import axios from 'axios'
import NewUserForm from './NewUserForm'

class User extends Component {
    state = {
        users: [],
        user: {
            name: '',
            username: '',
            password: ''
        }
    }
    componentDidMount(){
        this.getAllUsers()
    }
    getAllUsers= () => {
        axios.get(`/users`)
        .then(res =>{
            this.setState({ users: res.data })
            console.log("Saving users to state", res.data)
        })
        .catch(err => {
            console.error(err)
        })
    }
    
    render() {
        return (
            <div>
                <input/>
                <NewUserForm/>
            </div>
        )
    }
}
export default User