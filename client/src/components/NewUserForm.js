import React, { Component } from 'react'
import styled from 'styled-components';
import { Form } from 'react-materialize'
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
    handleChange = (event) => {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        console.log(user)
        this.setState({ user })
      }
    
    render() {
        return (
            <div>
                <Header><h2>New Post Form</h2></Header>
                <Row>
                <Input onChange={this.handleChange} s={8} label="Name" />
                <Input onChange={this.handleChange} s={8} label="User Name" />
                <Input onChange={this.handleChange} s={8} label="Password" />
                </Row>
            </div>
        )
    }
}