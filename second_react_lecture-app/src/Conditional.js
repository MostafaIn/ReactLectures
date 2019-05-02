import React from 'react'

const Conditional = (props) => {

    
    //     if(props.isLoading === true){
    //       return (
    //           <h1>LOADING ...</h1>
    //     )
    //   }else{
    //       return (
    //           <h1>some cool about conditional is Rendering ...</h1>
    //     )
    // }

// ternary condition is like this
    
    return(
        <div>
        {props.isLoading === true ? <h1>LOADING ...</h1> : <h1>some cool about conditional is Rendering ...</h1>}
        </div>
    )
    
}

export default Conditional
