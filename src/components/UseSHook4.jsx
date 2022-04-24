import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const UseSHook4 = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [allEntry, setAllEntry] = useState([]);
    const enteredMail = (e) =>{
        setEmail(e.target.value);
    }
    const enteredPassword = (e) =>{
        setPassword(e.target.value);
    }
    const clicked = (e) =>{
        e.preventDefault();
        if(email && password){
            const newEntry = { id: new Date().getTime().toString(), email: email, password: password};
            setAllEntry([...allEntry,newEntry]);
            console.log(allEntry);
            setEmail("");
            setPassword("");
        }else{
            alert("please fill both fields")
        }
        
    }
  return (
    <>
    <Box mt={10} ml={70}>
    <Typography variant="h2" ml={5} gutterBottom component="div">Login</Typography>
    <form onSubmit={clicked}>
    <TextField onChange={enteredMail} id="outlined-basic"  autoComplete="off" label="Mobile Number or Email" variant="outlined" /><br /><br />
    <TextField type="password" onChange={enteredPassword} id="outlined-basic1"  autoComplete="off" label="Password" variant="outlined" /><br /><br />
    <Box mt={0} ml={8}><Button variant="contained" type="submit" >Submit</Button></Box><br /><br />
    <Typography variant="h4" ml={5} gutterBottom component="div">{allEntry.map((currElem)=>{
        const {id, email, password} = currElem;
        return (
            <div key={id}>
                <p>{email}</p>
                <p>{password}</p>
            </div>
        )
    })}</Typography>
    </form>
    </Box>
    </>
  )
}

export default UseSHook4