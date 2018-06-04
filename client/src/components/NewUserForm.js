import React, { Component } from 'react'
import styled from 'styled-components';
import { Input, Button } from 'react-materialize'
import axios from 'axios'
import Row from 'react-materialize/lib/Row';

const Header = styled.div`
padding: 10px;
margin: auto;
text-align: center;`

const FormBody = styled.div`
padding: 20px;
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
        const name = event.target.name
        const user = { ...this.state.user }
        user[name] = event.target.value
        console.log(user)
        this.setState({user: user})
        console.log(this.state.user)
    };

    creatNewUser = (event) => {
        event.preventDefault()
        console.log(this.state.user)
        axios.post(`/users`, { user: this.state.user })
            .then((res) => {
                console.log("RESPONSE FROM NEW User", res.data)
                this.setState({
                    users: res.data.user
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <Header><h2>New Post Form</h2></Header>
                <FormBody>
                    <form onSubmit={this.creatNewUser}>
                        <Row>
                            <Input name="name" onChange={this.handleChange} l={6} s={8} label="Name" />
                            <Input name="username" onChange={this.handleChange} l={6} s={8} label="User Name" />
                            <Input name="password" onChange={this.handleChange} l={6} s={8} label="Password" />
                        </Row>
                        <Button type="submit" waves='light'>Submit</Button>

                    </form>
                </FormBody>
            </div>
        )
    }
}

export default NewUserForm