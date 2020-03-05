import React ,{Component} from 'react';

import './App.css';
import Form from './Form';
import Profile from './Profile'
import Signout from './Signout';

const Users=
  {
    name:"John",
    id:1,
    email:"john@email.com",
  password:'123'
}




class App extends Component {
constructor(props){
  super(props)

  this.state={
    name:"john",
    signIn:false,
    email:"",
    password:"",
   
    route:"form"
  }
}
  onChange = (event)=>{
  this.setState({[event.target.name]:event.target.value})
  
  }
  onClick =(e)=>{
    e.preventDefault();

   

   
       
   
      if(this.state.email===Users.email && this.state.password===Users.password) 
        {

        this.setState({signIn:!this.state.signIn})
         
      }
      else{
        this.setState({signIn:this.state.signIn})
        alert('please enter the correct credintials')
       
      }

    

    }
  
    

  

  onRouteChange = (route)=>{
this.setState({route:route})
 


       
  }
  render(){
   
    
    return (
      <div className="App">
      {this.state.signIn ? <Profile name={this.state.name} route={this.state.route} onRouteChange={this.onRouteChange} user={Users.name}/> : 
       <Form signin={this.state.signIn}
        email={this.state.email}
        password={this.state.password}
        onChange={this.onChange}
        onClick={this.onClick}
        name={this.state.name}
       
    />
      }
      </div>
    );
  }
}



export default App;
