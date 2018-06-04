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
background-repeat: no-repeat;
background-position: center;
background-size: 100%;
border-style: solid;
border-width: 1px;
height: 90vh
width: 90vw;`
const Cardholder = styled.div`
background-color: gray;
width: 20vw;
`
class HomePage extends Component {
    render() {
        return (
            <div>
                <Header>Ultimate Fansite<br />
                    What kind of fan are you
                </Header>
                <Body>
                    <Col l={6} m={8} s={10}>
                    <Cardholder>
                        <Card className='blue-grey darken-1' textClassName='white-text' title='Star Wars site' actions={[<a href='#'>This is a link</a>]}>
                            I am a very simple card.
                        </Card>
                        </Cardholder>
                    </Col>
                </Body>
            </div>
        )
    }
}
export default HomePage