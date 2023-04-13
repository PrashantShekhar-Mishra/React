import { InputLabel,FormControl,Input,Button, FormGroup,styled, Switch } from "@mui/material";
import { useState}  from "react";
import Rout from './Routing';
import {BrowserRouter,Routes,Route,NavLink } from "react-router-dom";


const Container = styled(FormGroup)`
    width : 35%;
    margin : 3% auto 3% auto;
    border-radius: 4px;
    padding: 30px 30px 30px 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    & > div {
        margin-top : 30px
    }
`

const Tabs = styled(NavLink)`
    font-size : 15px;
    margin-right : 20px;
    color : white !important;
    text-decoration : none;
    &:focus, &:active {
        color:orange !important;
    }
    `



const loginValue = {
    username:'',
    Password:''
}


function LoginUser(){

        const [user,setUser]=useState(loginValue);
        const onValueChange = (e) => {
            setUser({...user,[e.target.name]:e.target.value})
            console.log(user);
        }


    /*
    function componentDidMount() {  
        axios.get("https://localhost:8000/api/Earphones").then(response => {  
            
            console.log(response.data);  
            this.setState({  
                ProductData: response.data  
            });  
        });  
    }*/

    return(
        <div className = "Body">

            <Container>
            <Button variant ="h5"> Login </Button> 
            <FormControl>
                <InputLabel>UserName</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username"/>
            </FormControl>
            <FormControl>
                <InputLabel>Password</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name ="Password" />
            </FormControl>
            <FormControl>    
            <BrowserRouter>
                <Tabs to ='/home'>Submit</Tabs>
                <Routes>
                    <Route path='/home' element={<Rout/>} />
                    
                </Routes>
            </BrowserRouter>
            </FormControl>
            </Container>
            
        </div>
    );
}
export default LoginUser;