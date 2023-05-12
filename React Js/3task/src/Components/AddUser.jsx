import React, { useState } from 'react';

const AddUser = ({addUser}) => {
    const [userData,setUserData]=useState({name:"",age:0});

    const handleSubmit=(event)=>{
       event.preventDefault();
       addUser(userData);
       setUserData({name:'',age:0})
    }

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setUserData({...userData,[name]:value})  //computedproperty
        console.log(e);
    }

    return (
       <form onSubmit={handleSubmit} style={{margin:5, padding:10, backgroundColor:'Highlight', textAlign:'center'}}>
            <label>Name : </label><input name='name' type='text' value={userData.name} onChange={handleChange}></input>
            <br></br>
            <label>Age : </label><input name='age' type='number' value={userData.age} onChange={handleChange}></input>
            <br/>
            <input type='submit' value="Add user"></input>
       </form>
    );
};

export default AddUser;