import { memo } from "react";

const User=(props)=>{
    const {id,name,age,} = props;
    console.log(props);

    return (
        <div style={{backgroundColor:"beige", margin:10, textAlign:"center", padding:10}}>
            <div>id : {id}</div>
            <div>name : {name}</div>
            {age>0 && <div>age : {age}</div>}
        </div>
    );
}
export default memo(User);