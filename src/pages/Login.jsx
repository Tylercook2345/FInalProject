import styled from 'styled-components'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

const Container = styled.div`
    width: 100vw;
    height: 100vw;
    background: url('https://www.wallpaperup.com/uploads/wallpapers/2014/07/09/391765/f34e03c61301ee7edba84c668c4b7ecd.jpg');
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`


const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
`
const Title = styled.h1`
    font-size: 24px;
    flex-wrap: wrap;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`



const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border:none;
    padding: 15px 20px;
    background-color: green;
    color:white;
    cursor: pointer;
    margin-bottom: 10px;
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
    


  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder='Username'/>
                <Input placeholder='Password'/>
                <Button onChange={(e) => (e.target.value)}>LOGIN</Button>
                <Link>FORGOT PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
   </Container>
  )
}

export default Login