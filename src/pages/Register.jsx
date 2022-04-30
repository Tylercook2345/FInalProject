import React , { useState } from 'react';
import {UserAuth} from '../context/AuthContext'
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom'

const Container = styled.div`
    width: 100vw;
    height: 100vw;
    background: url('https://wallpaperaccess.com/full/564460.jpg');
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`


const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: lightyellow;
`
const Title = styled.h1`
    font-size: 24px;
    flex-wrap: wrap;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`



const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 10px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

const Button = styled.button`
    width: 40%;
    border:1px;
    padding: 15px 20px;
    background-color: green;
    color:white;
    cursor: pointer;

`

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {createUser} = UserAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try{
            await createUser(email, password);
            navigate('/Home')
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    }

  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder='First Name'/>
                <Input placeholder='Last Name'/>
                <Input placeholder='Username'/>
                <Input onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
                <Input placeholder='Password'/>
                <Input onChange={(e) => setPassword(e.target.value)} placeholder='Confirm Password'/>
                <Agreement>By creating an account, I consent to the processing of my personal data</Agreement>
                <Button>Create</Button>
            </Form>
        </Wrapper>
   </Container>
  )
}

export default Register