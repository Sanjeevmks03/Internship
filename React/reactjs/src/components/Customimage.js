import React, { Component } from 'react'

class Customimage extends Component {

  func(){

  }
  render() {
    const {details} =this.props
    return (
      <div>
        <a onClick={()=> window.open("https://www.google.com", "_blank")} href={details.href} >
          <img src={details.src} alt={details.alt} width="100px" height="100px"/>
          
        </a>
      </div>
    )
  }
}

export default Customimage