import React, { Component } from 'react'

class Customimage extends Component {

  func(){

  }
  render() {
    const {details} =this.props
    return (
      <div>
        <div>Q. Create a class component that takes the following props: src, title, altText,
href; The component should render an image with title on top and clicking the image should open
the link in new tab.</div>
        <a onClick={()=> window.open("https://www.google.com", "_blank")} href={details.href} >
          <img src={details.src} alt={details.alt} width="100px" height="100px"/>
          
        </a>
      </div>
    )
  }
}

export default Customimage