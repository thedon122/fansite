import React, {Component} from 'react'
import axios from 'axios'
import {Card} from 'react-materialize'

class UserProfile extends Component {
    state = {
        user: {
            name:'',
            username:'',
            password:''
        }
    }
    componentDidMount = () =>{
        this.getCurrentUser()
    }
    getCurrentUser = () => {
        const userId = this.props.match.params.userId
        console.log("eventId from UserProfile component: ", userId)
        axios.get(`users/{userId}`)
        .then(res=> {
            this.setState({
                user: res.data
            })
            .catch(err => {
                console.error(err)
            })
        })
    }
    deleteUser = () => {
        const userId = this.props.match.params.userId
        axios.delete(`users/${userId}`)
        .then((res) => {
            console.log("RESPONSE FROM POST DELETING", res.data)
            this.setState({redirect: true})
          }).catch(console.error)
    }
    render() {
        return(
            <div>
                work
            </div>
        )
    }
}

export default UserProfile