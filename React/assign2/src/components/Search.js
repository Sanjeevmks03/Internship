import React, { Component } from 'react'


class Search extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       query: ""
    }
  }

  setQuery = (e) => {
    this.setState({
      query: e
    })
  }
  
  render() {
    
    // console.log();
    const {query} = this.state
    const names=this.props.names

    return (
      <div>
        <div>
          <input
            type="text" 
            placeholder="search.."
            className='search'
            onChange={(e)=>this.setQuery(e.target.value)}
            />
          {names.filter(items=>items.toLowerCase().includes(query)).map(item => <h2 key={item}>{item}</h2>)}
        </div>
      </div>
    )
  }
}

export default Search