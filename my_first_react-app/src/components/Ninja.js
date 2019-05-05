import React from 'react'

const Ninja = ({ ninjas }) => {
    // const { ninjas } =props
    // const ninjaList = ninjas.map(ninja => {
    //     return (
    //         <div key={ninja.id}>
    //             <h3>my name is {ninja.name}</h3>
    //             <h4>I am {ninja.age} yearsold.</h4>
    //             <br />
    //             <hr />
    //         </div>
    //     )
    // })
    
    return (
        <div>
            {/* {ninjaList} */}
        {
    ninjas.map(ninja => {
        return ninja.age === 32 ? (
            <div key={ninja.id}>
                <h3>my name is {ninja.name}</h3>
                <h4>I am {ninja.age} yearsold.</h4>
                <br />
                <hr />
            </div>
        ) : null
    })
        }
        </div>
    )
}
export default Ninja;