import React, {Component} from 'react';
import axios from "axios";

const initialState={
    title:'',
    body:'',
    userId:'123',
    isSubmit:false,
    error:false
}
let Base_url ='https://jsonplaceholder.typicode.com'

class PostForm extends Component {
    constructor() {
        super();
        this.myform = React.createRef()
    }
    state = {
        ...initialState
    }

    changeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submitHandaler=(e)=>{
        e.preventDefault()
        this.setState({
            ...initialState
        })
        this.myform.current.reset()

        axios.post(`${Base_url}/posts`,{
            title:this.state.title,
            body:this.state.body,
            userId:this.state.userId
        })
            .then(res=>{
                this.setState({
                    isSubmit:true,
                    error:false
                })
                console.log(res)
            })
            .catch(error=>{
                this.setState({
                    isSubmit: false,
                    error:true
                })
            })
    }
    render() {
        return (
            <form onSubmit={this.submitHandaler} ref={this.myform}>
                <div className='form-group'>
                    <label htmlFor='title'>Title</label>
                    <input
                        type='text'
                        name='title'
                        value={this.state.title}
                        className='form-control'
                        placeholder='Enter your Title'
                        onChange={this.changeHandler}
                    />
                </div>
                <div className='form-group mb-2'>
                    <label htmlFor='Body'>Body</label>
                    <textarea
                        type='text'
                        name='body'
                        value={this.state.body}
                        className='form-control'
                        placeholder='Enter your body'
                        onChange={this.changeHandler}
                    />
                </div>

                <button type='submit' className='btn btn-success py-2 '>Submit</button>
                {this.state.isSubmit && <p className='text-success'>Submit is successfull</p>}
                {this.state.error && <p className='text-danger'>Error Occurd</p> }
            </form>
        );
    }
}

export default PostForm;