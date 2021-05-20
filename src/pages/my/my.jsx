import React, { Component } from 'react';
import './my.css'
class my extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '李泽'
        }

    }
    render() {
        const { name } = this.state
        return (
            <div>
                <h2 className='nav'>{name}</h2>

            </div>
        );
    }
}


export default my;