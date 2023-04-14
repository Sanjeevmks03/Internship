import React from 'react'
import WithSupportUser from './WithSupportUser'

class Apps extends React.Component {
  render() {
    const {role,roletoggler} = this.props
    return (
      <div>
        <button type="button" class="btn btn-warning mt-4" onClick={()=>roletoggler()}>Role is : {role}</button>
        {this.props.children}
      </div>
      
    )
  }
}

export default WithSupportUser(Apps)