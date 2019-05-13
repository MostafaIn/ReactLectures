import React from 'react'

class Test extends React.Component {
    constructor(){
        super()
        this.state={
            loggedIn: true
        }
    }
    render() {
        let inOut
        if(this.state.loggedIn){
            inOut = 'IN'
        }else{
            inOut='OUT'
        }
        return (
            <div>
            <h2>you are {inOut}</h2>
            </div>
        )
    }

}

export default Test
