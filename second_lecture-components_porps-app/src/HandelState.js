import React, { Component } from 'react'

class HandelState extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.addMore = this.addMore.bind(this)
        this.lessMore = this.lessMore.bind(this)
    }
    addMore() {
        this.setState(prvState => {
            return {
                count: prvState.count + 1
            }
        })
    }
    lessMore() {
        this.setState(lessState => {
            return {
                count: lessState.count - 1
            }
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.lessMore}> -- CHANGE</button>
                <button onClick={this.addMore}>CHANGE >></button>

            </div>
        )
    }
}
export default HandelState