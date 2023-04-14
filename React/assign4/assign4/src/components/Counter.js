import React, { Component } from 'react'

class Counter extends Component {
    constructor() {
        super();
        this.inputref=React.createRef()
        
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        this.inputref.current.addEventListener('click', this.countfunc);
    }

    componentWillUnmount() {
        this.inputref.current.removeEventListener('click', this.countfunc);
    }

    countfunc = () => {
        this.setState(prevState => ({
             count: prevState.count + 1 
        }));
    }

    render() {
        return (
            <div className='justify-content-center'>
                <td className='col-6'>
                    <button type="button" className="btn btn-warning" ref={this.inputref}>Add Count</button>
                </td>
                <td className='col-6'>
                    <p>clicked: {this.state.count} times</p>
                </td>

            </div>
        );
    }
}

export default Counter