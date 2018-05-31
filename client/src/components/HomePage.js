import React, { Component } from 'react'
import styled from 'styled-components';
import { Card, Col } from 'react-materialize'

const Header = styled.div`
padding: 3% 3% 3% 3%;
text-align: center;
font-size: 30px;
font-weight: bold;
`
const Body = styled.div`
padding: 0% 1.5% 1% 1.5%;
background-image: url("https://mmoexaminer.com/wp-content/uploads/2017/10/sw352356.jpg");
border-style: solid;
border-width: 1px;`
class HomePage extends Component {
    render() {
        return (
            <div>
                <Header>Ultimate Fansite<br />
                    What kind of fan are you
                </Header>
                <Body>
                    <Col l={12} m={12} s={12}>
                        <Card className='blue-grey darken-1' textClassName='white-text' title='Card title' actions={[<a href='#'>This is a link</a>]}>
                            I am a very simple card.
    </Card>
                    </Col>
                </Body>
            </div>
        )
    }
}
export default HomePage