import React, {Component} from 'react'
import { Userconsumer } from './Context'
const WithSupportUser=(WrappedComponent)=>{
    return class extends Component{
        constructor(props) {
          super(props)
        
          this.state = {
             role:"user"
          }
        }
        roletoggler=()=>{
            this.setState({
                role:this.state.role==="support"?"user":"support"
            })
        }
        render(){
            return(
                <Userconsumer>
                    {role=>{
                            if(role==="support"){
                                return <WrappedComponent role={this.state.role} roletoggler={this.roletoggler}/>
                            }
                            else{
                                return null;
                            }
                        }
                    }
                </Userconsumer>
            )
        }
    }
}

export default WithSupportUser;