import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NewUserForm from './NewUserForm'
import Card from 'react-materialize'

class User extends Component {
    state = {
        users: [],
        user: {
            name: '',
            username: '',
            password: ''
        }
    }
    componentDidMount() {
        this.getAllUsers()
    }
    getAllUsers = () => {
        axios.get(`/users`)
            .then(res => {
                this.setState({ users:res.data })
                console.log("Saving users to state", res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }

    render() {
        const userLinks = this.state.users.map((user, i) => {
            return (
                <div>
                    <Link key={i} to={`/users/${user._id}`}>
                    <Card >
                        <h2>{this.state.user.name}</h2>
                    </Card>
                    </Link>
                </div>
            )
        })
    
    return(
            <div>
    {userLinks}
    <NewUserForm />
            </div >
        )
    }
}
export default User