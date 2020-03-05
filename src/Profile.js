import React from 'react';
import Signout from './Signout';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile =({route, name, onRouteChange})=>{


    if(route==="signin"){
        return <Signout route={route} onRouteChange={onRouteChange}/>
    }
        
   
    return(
      
        <div>
          
           
            <button className ="primary" onClick={()=>onRouteChange('signin')}>signOut</button>
            <h1>Welcome {name}</h1>
            <div onRouteChange>
                    <img style={{border:"1px solid #000"}} src="https://media.istockphoto.com/photos/happy-laughing-man-picture-id544358212?k=6&m=544358212&s=612x612&w=0&h=odURMNz2hty8LIfpVahaaUKpGU4vd-UlZx4jy-OAnJA=" height="500" width="600" alt="John's image" />
            </div>
            
        </div>
    )
}
export default Profile;