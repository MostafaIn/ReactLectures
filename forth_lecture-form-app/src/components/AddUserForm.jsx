import React, { Component } from 'react'
import Header from './Header';
import InputField from './InputField';
import SelectField from './SelectField';
import TextareaField from './TextareaField';
import './formStyles.css';


const options = [
    { label: '--select country--', value: '' },
    { label: 'Finland', value: 'Finland' },
    { label: 'Sweden', value: 'Sweden' },
    { label: 'Norway', value: 'Norway' },
    { label: 'Denmark', value: 'Denmark' }
];

export class AddUserForm extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            email: '',
            phone: '',
            country: '',
            occupation: '',
            message:'',
            skills: { html: false, css: false, javascript: false, react: false, redux: false, nodeJS: false, mongoDB: false },
            touched: { firstName: false, lastName: false, age: false }
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log('me');
    };
    handleChange = e => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const skills = { ...this.state.skills };
            skills[name] = !skills[name]
            this.setState({ skills });
        } else {
            this.setState({ [name]: value });
        }
    };
    handleBlur = e => {
        const { name } = e.target;
        this.setState({ touched: { ...this.state.touched, [name]: true } })
    };
    Validation = () => {
        const errors={firstName:'',lastName:'',age:'',message:''};
        const{firstName,lastName,age,message}=this.state.touched;
        if(firstName && this.state.firstName.length < 4){
            errors.firstName= 'first name must at least 3 characters.'
        }
        if (lastName && this.state.lastName.length < 4) {
            errors.lastName = 'last name must at least 3 characters.'
        }
        if(age && Number(this.state.age) < 18){
            errors.age='you must be above 18'
        }
        if(message && this.state.message.length < 50){
            errors.message= 'you must leave more than 50 characters as a message.'
        }
        return errors;
    }
    render() {
        const errors=this.Validation();
        return (
            <div>
                <Header />
                <form onSubmit={this.handleSubmit}>
                    <InputField
                        type='text'
                        label='First Name'
                        floatingLabelText='first name'
                        name='firstName'
                        value={this.state.firstName}
                        placeholder='Enter your first name here!'
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        error={errors.firstName}
                    />
                    <br />
                    <InputField
                        type='text'
                        label='Last Name'
                        name='lastName'
                        value={this.state.lastName}
                        placeholder='Enter your last name here!'
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        error={errors.lastName}
                    />
                    <br />
                    <InputField
                        type='number'
                        label='Age'
                        name='age'
                        value={this.state.age}
                        placeholder='How old are you!'
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        error={errors.age}
                    />
                    <br />
                    <InputField
                        type='text'
                        label='Email ID'
                        name='email'
                        value={this.state.email}
                        placeholder='your.email.id@example.com'
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                    />
                    <br />
                    <InputField
                        type='text'
                        label='Phone'
                        name='phone'
                        value={this.state.phone}
                        placeholder='040 000 0000!'
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                    />
                    <br />
                    <hr />
                    <h4>Gender:</h4>
                    <InputField
                        type='radio'
                        label='Female'
                        name='gender'
                        value={this.state.gender}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                    />
                    <InputField
                        type='radio'
                        label='Male'
                        name='gender'
                        value={this.state.gender}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                    />
                    <InputField
                        type='radio'
                        label='Other'
                        name='gender'
                        value={this.state.gender}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                    />
                    <br />
                    <hr />
                    <h3>skills: </h3>
                    <InputField
                        type='checkbox'
                        label='HTML'
                        name='html'
                        checked={this.state.skills.html}
                        onChange={this.handleChange}
                    />
                    <InputField
                        type='checkbox'
                        label='CSS'
                        name='css'
                        checked={this.state.skills.css}
                        onChange={this.handleChange}
                    />
                    <InputField
                        type='checkbox'
                        label='JavaScript'
                        name='javascript'
                        checked={this.state.skills.javascript}
                        onChange={this.handleChange}
                    />
                    <InputField
                        type='checkbox'
                        label='React'
                        name='react'
                        checked={this.state.skills.react}
                        onChange={this.handleChange}
                    />
                    <InputField
                        type='checkbox'
                        label='Redux'
                        name='redux'
                        checked={this.state.skills.redux}
                        onChange={this.handleChange}
                    />
                    <InputField
                        type='checkbox'
                        label='NodeJS'
                        name='nodeJS'
                        checked={this.state.skills.nodeJS}
                        onChange={this.handleChange}
                    />
                    <InputField
                        type='checkbox'
                        label='MongoDB'
                        name='mongoDB'
                        checked={this.state.skills.mongoDB}
                        onChange={this.handleChange}
                    />
                    <br />
                    <hr />
                    <SelectField
                        options={options}
                        label="Country"
                        name="Country"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <TextareaField
                        name="message"
                        value={this.state.value}
                        onChange={this.handleChange}
                        onBlur={this.onBlur}
                        error={errors.message}
                    />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default AddUserForm
