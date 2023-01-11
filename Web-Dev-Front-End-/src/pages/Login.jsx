import React from 'react'

import styled from 'styled-components'
import { useState } from 'react'
import { login } from '../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'
import {user} from '../App.jsx'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(
        255,255,255,0.5),
        rgba(255,255,255,0.5)),
        url("https://www.sepkicks.com/uploads/Nike_Air_Force_Shoes/Air_Force_1_Low/Nike_Air_Force_1_Low_Vast_Grey_White_AA1726-201_P6.JPG") ;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
`
const Wrapper = styled.div`
    width: 30%;
    padding: 20px;
    
    `
const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px    ;  
    padding: 10px;
    border-radius: 15px;
    border: none;
`
const Button = styled.button`

    width: 30%;
    border: None;
    padding: 10px 20px;
    margin: 20px 120px;
    background-color: #1482D0;
    color: white;
    cursor: pointer;
    border-radius: 15px;
    font-weight: 600;

    &:disabled{
        color:green;
        cursor: not-allowed;    
    }
`
/* const Link = styled.a`
    margin: 5px 0px;
    font-size: 15px;
    text-decoration: underline;
    cursor: pointer;
    text-align: center;

`*/

const Error = styled.span `
    color: red;
    margin-left: 0px;
    font-weight: 600;
    margin: 15px 125px;
`

const MenuItem = styled.div`
    font-size: 17px;
    font-weight: 1000;
    cursor: pointer;
    margin-left: 0px;
    
`

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
        <Wrapper>
        <Title> LOGIN </Title>
        <Form>
            <Input 
            placeholder="Username" 
            onChange={(e)=>setUsername(e.target.value)}
            />
            <Input 
            placeholder="Password"
            type=  "password"
            onChange={(e)=>setPassword(e.target.value)}
            />
            <Button onClick={handleClick} disabled={isFetching}> SIGN IN </Button>
            { error && <Error>Invalid Credentials</Error> } 
            
            <Link to = "/register">
                <MenuItem>NEW HERE? REGISTER</MenuItem>
            </Link>
        </Form>
      </Wrapper>
      
    </Container>
  )
}

export default Login
