import { useState } from "react";
import User from "./User";
import {v4 as uuid} from 'uuid';
import AddUser from "./AddUser";

const Users = () => {
    const [usersArr,setUsers]=useState([
        {id:uuid(), name:"Hassan A",age:28},
        {id:uuid(), name:"Hassan M",age:23},
        {id:uuid(), name:"Mahmoud",age:22},
        {id:uuid(), name:"Ahmed K",age:33},
        {id:uuid(), name:"Ahmed S",age:22},
        {id:uuid(), name:"Youssef",age:21},
    ]);

    const addU=(data)=>{
        setUsers((oldUsers)=>[...oldUsers,{...data,id:uuid()}])
        //console.log(usersArr);
    }

    return (
        <>
            <AddUser addUser={addU}></AddUser>
            <div>{usersArr.map((u)=><User key={u.id} id={u.id} name={u.name} age={u.age}></User>)}</div>
        </>
    );
};

export default Users;
