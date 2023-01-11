import { Badge } from '@material-ui/core'
import { HelpOutline, Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {user} from '../App.jsx'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/apiCalls.js'

const Container = styled.div`
    height: 50px;
    
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div`
    flex:1;
    text-align: left;
`
const Center = styled.div`
    flex:1;
    display: flex;
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    padding: 5px;
    display: flex;
    align-items: center;
    margin-left: 5px;
    border-radius: 25px;
    width: 400px;
    
`
const Input = styled.input`
    border: none;
    width: 2000px;
    
`
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`
const Logo = styled.h1`
    font-weight: bold;
    cursor: pointer;
    font-size: 50px;
`

const Button = styled.button`

    width: 70%;
    border: None;
    padding: 10px 20px;
    margin: 15px 30px;
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

const Button2 = styled.button`

    width: 30%;
    border: None;
    padding: 10px 20px;
    margin: 15px 30px;
    background-color: black;
    color: white;
    cursor: pointer;
    border-radius: 15px;
    font-weight: 600;

    &:disabled{
        color:green;
        cursor: not-allowed;    
    }
`

const Button3 = styled.button`

    width: 80%;
    border: None;
    padding: 10px 20px;
    margin: 10px 20px; 
    background-color: white;
    color: black;
    font-size: 20px;
    
    border-radius: 15px;
    font-weight: 600;

    &:disabled{
        color:green;
        cursor: not-allowed;    
    }
`

const Button4 = styled.button`

    width: 80%;
    border: None;
    padding: 10px 20px;
    margin: 10px 20px; 
    background-color: black;
    color: white;
    font-size: 15px;
    cursor: pointer;
    border-radius: 15px;
    font-weight: 600;

    &:disabled{
        color:green;
        cursor: not-allowed;    
    }
`

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)

    const userLogin = useSelector(state => state.user.currentUser)

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(logoutUser())
        
      };
    
  return (
    <Container>
        <Wrapper>
           <Left>
            <Logo>
                Soled Out Shoes.
            </Logo>
           </Left>
           <Center>
           
           </Center>  
           <Right>
                {userLogin ? (
                    <>
                    <Button3>Hello, {userLogin.username}</Button3>
                    <Button2 onClick = {handleClick}>Logout</Button2>
                    <Link to ="/cart">
                <MenuItem>
                <Badge badgeContent={quantity} color="secondary">
                     <ShoppingCartOutlined  />
                
                </Badge>
                </MenuItem>
                </Link>
                    </>
                    
                ) : (
                <><Link to="/register">
                              <Button4>REGISTER</Button4>
                          </Link>
                          <Link to="/login">
                                  <Button4>LOGIN</Button4>
                          </Link>
                          
                          </>
                 )}
                
               
           </Right>   
        </Wrapper>
        
    </Container>
  )
}

export default Navbar
