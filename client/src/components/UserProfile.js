import React, {Component} from 'react'
import axios from 'axios'
import {Card, Button, Input} from 'react-materialize'

class UserProfile extends Component {
    state = {
        user: {
            name:'',
            username:'',
            password:''
        },
        StarWarsInput:''
    }
    componentDidMount = () =>{
        this.getCurrentUser()
    }
    getCurrentUser = () => {
        const userId = this.props.match.params.userId
        console.log("userID from UserProfile component: ", userId)
        axios.get(`/users/${userId}`)
        .then(res=> {
            this.setState({
                user: res.data
            })
            console.log(this.state.user)
            })
            .catch(err => {
                console.error(err)
        })
    }
    handleChange = (event) => {
        const name = event.target.name
        const char = {...this.state.StarWarsInput}
        char.name= event.target.value
        console.log(name)
        this.setState({StarWarsInput: char})
        console.log(this.state.StarWarsInput)
    }
    getStatWarsChar = () => {
        axios.get()
    }
    deleteUser = () => {
        const userId = this.props.match.params.userId
        axios.delete(`/users/${userId}`)
        .then((res) => {
            console.log("RESPONSE FROM POST DELETING", res.data)
            this.setState({redirect: true})
          }).catch(console.error)
    }
    render() {
        return(
            <div>
                Search for Star Wars characters: <br/>
                <Input name="swchar"/>
                Name: {this.state.user.name}<br/>
                <Button onClick={this.deleteUser}>deleteUser</Button>
            </div>
        )
    }
}

export default UserProfile