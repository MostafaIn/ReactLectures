import React from 'react'

class First extends React.Component{
    state={
        name:'mostafa',
        age: 34
    }
    handlerClick= (e) =>{
        console.log(e.target);
        console.log(this.state.name);
        if(this.state.name === 'mostafa'){
            this.setState({
                name: 'rohy',
                age: 32
            })
        }else{
            this.setState({
                name:'mostafa',
                age: 34
            })
        }  
    }
    changeName= (e)=>{
        this.setState({
            name: e.target.value
        })
    }
    handleSubmit= (e)=>{
        e.preventDefault()
        console.log(this.state.name);
        
    }
    render(){
        return(
            <div className="first">
            <h1>Hello I am {this.state.name}</h1>
            <h3>, and {this.state.age} yearsold.</h3>
            <br />
            <button onClick={this.handlerClick}>Click ME</button>
            <br/>
            <hr/>
            <hr/>
            <br/>
            <br/>
            <form onSubmit={this.handleSubm}>
                <input type="text" onChange={this.changeName}/>
                <button>add</button>
            </form>
            </div>
        )
    }
}

export default First
