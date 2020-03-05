import React from 'react';
import Profile from './Profile';

const Form =({onChange,onClick})=>{
    return(
        <div style={{border:"1px solid gray", width:"300px",padding:"20px", margin:"auto"}}>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" id="email" onChange={onChange} required/><br/>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={onChange} required/>
                <button className ="btn btn-primary" onClick={onClick}>submit</button> 
            </form>
            
        </div>
    )
}
export default Form;