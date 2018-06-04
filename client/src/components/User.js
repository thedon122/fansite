import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NewUserForm from './NewUserForm'
import {Card, Col} from 'react-materialize'

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
                <div key={i}>
                    <Link key={i} to={`users/${user.id}`}>
                    <Col s={4}>
                    <Card >
                        {user.name}
                    </Card>
                    </Col>
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