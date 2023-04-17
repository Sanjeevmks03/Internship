import React, { Component } from 'react'

class Todoitem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            disabled: props.todo.done? "disabled" : ""
        }
    }

    handleClick=(item, event)=> {
        if (!item.done && this.state.disabled === "") {
            this.setState({
                disabled: "disabled"
            }, () => this.props.action(item, event))
        }
    }

    render() {
        const { todo } = this.props

        return (
            <div className="row container">
                <div className='col-6'>
                    <div>
                        {todo.text}
                    </div>
                    <div>
                        <button type="button" disabled={this.state.disabled} className="btn btn-sm btn-warning" onClick={(event) => this.handleClick(todo, event)} >
                            completed
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todoitem