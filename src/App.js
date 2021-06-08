import React, {Component} from 'react';
import axios from 'axios';
import PostForm from "./PostForm";

class App extends Component {
  state={
    posts:[]
  }

  componentDidMount(){
     axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(response=>{
           this.setState({
             posts:response.data
           })
         })
         .catch(error=>console.log(error))
  }

  render() {
     return(
         <div className='container'>
             <PostForm/>
         </div>
     )
  }


}

export default App;
