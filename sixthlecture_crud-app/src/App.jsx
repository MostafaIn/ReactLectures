import React, { Component } from 'react'
import uuidv4 from 'uuid/v4';
import Header from './components/Header';
import EditForm from './components/EditForm';
import { data } from './data.js';
import './App.css';

export default class App extends Component {
    state = {
        firstName: '',
        lastName: '',
        age: '',
        users: [],
        feedback: '',
        isEditting: false,
        setEdittingID: ''
    }
    componentDidMount() {
        this.setState({
            users: data
        });
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }
    handleSubmit = (e) => {
        const { firstName, lastName } = this.state;
        e.preventDefault();
        const user = {
            id: uuidv4(),
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age
        };
        if (!firstName || !lastName) {
            this.setState({
                feedback: 'required'
            });
        } else {
            this.setState({
                users: [...this.state.users, user],
                feedback: ''
            });
        }
    }
    handleDelete = (id) => {
        const { users } = this.state;
        const newUsers = users.filter(user => user.id !== id);
        this.setState({
            users: newUsers
        });
    }
    handleUpdate =(e,index)=>{
        e.preventDefault();
        const updatedUser={
            firstName: this.state.firstName,
            lastName: this.state.lastName
        };
        const sliced=[...this.state.users.slice(0,index),updatedUser,...this.state.users.slice(index+1)];
    this.setState({
        users:sliced
    });
    }
    render() {
        const { users, feedback,isEditting,setEdittingID } = this.state;
        return (
            <div>
                <Header />
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="firstName" placeholder='First Name:' onChange={this.handleChange} />
                    <input type="text" name="lastName" placeholder='Last Name:' onChange={this.handleChange} />
                    <input type="number" name="age" placeholder='Age:' onChange={this.handleChange} />
                    <button>submit</button>
                </form>
                <h3 className="feedback">{feedback}</h3>
                <br />
                <hr />
                {users.map(user => {
                    return (
                        <div className="user" key={user.id}>
                            <h3>First Name: {user.firstName}</h3>
                            <h3>Last Name: {user.lastName}</h3>
                            <h3>Age: {user.age}</h3>
                            <div className="controllers">
                                <i onClick={() => this.handleDelete(user.id)} className="fas fa-trash"></i>
                                <i onClick={()=> this.setState({
                                    isEditting: !isEditting,
                                    setEdittingID: user.id
                                })} className="fas fa-edit"></i>
                            
                                {isEditting && user.id === setEdittingID && <EditForm
                                    user={user}
                                    handleChange={this.handleChange}
                                    handleUpdate={this.handleUpdate}
                                // index={index}
                                />}
                            </div>
                            
                        </div>
                    )
                })}
            </div>
        )
    }
}
