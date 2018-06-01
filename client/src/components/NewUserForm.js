import React, { Component } from 'react'
import styled from 'styled-components';
import { form } from 'react-materialize'
import axios from 'axios'

const Header = styled.div`
padding: 20px;
margin: auto;
text-align: center;`

const FormBody = styled.div`
padding: 40px;
margin: auto;
text-align: center;
`
class NewUserForm extends Component {
    state = {
        user: {
            name: '',
            username: '',
            password: ''
        }
    }
    handleChange = name => event => {
        const name = event.target.name
        const newState = { ...this.state }
        newState[name] = event.target.value
        this.setState(newState)
        console.log(newState)
    };

    creatNewUser = () => {
        axios.post(`/users`, { users: this.state.user })
            .then((res) => {
                console.log("RESPONSE FROM NEW User", res.data)
                this.setState({
                    users: res.data.user
                })
                    .catch((error) => {
                        console.log(error)
                    })
            })
    }

    render() {
        return (
            <div>
                <Header><h2>New Post Form</h2></Header>
                <FormBody>
                    <form>
                        
                            <input name="name" onChange={this.handleChange('name')} l={6} s={8} label="Name" />
                            <input name="username" onChange={this.handleChange('username')} m={6} s={8} label="User Name" />
                            <input name="password" onChange={this.handleChange('password')} l={6} s={8} label="Password" />
                       
                    </form>
                </FormBody>
            </div>
        )
    }
}

export default NewUserForm