import React from 'react';
import Form from './Form';

const Signout =({route, onRouteChange})=>{
    
       if(route==="signin"){
          return <Form/>
       }

    return(
        <div><button onClick={()=>onRouteChange('signin')}>Sign In</button>
            
        </div>

    )
}
export default Signout;