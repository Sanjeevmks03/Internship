import React, { Component } from 'react'

export class Subjective extends Component {
  render() {
    return (
      <div>
        <div>
            <h6>Q. What can be used to return more than one component from a react component?</h6>
            <p>ans:- 
(i) Wrapping in one division
(ii) using array
(iii)fragments</p>
        </div>
        <div>
            <h6>
                Q. What is the difference between a React Component and a React PureComponent?
            </h6>
            <p>
                ans:- A Component is a basic React component that re-renders whenever its parent re-renders, regardless of whether its props or state have changed.
       On the other hand, a PureComponent is a specialized type of component that does a shallow comparison of its props and state to determine if it needs to re-render. If the props and state of a PureComponent are the same as the previous props and state, it will not re-render, even if its parent re-renders.
            </p>
        </div>
        <div>
            <h6>
            Q. What can be used to access the methods and properties of a child component from a 
component?
            </h6>
            <p>We can access the methods and properties of a child component by creating ref or passing props.</p>
        </div>
        <div>
            <h6>Q. What is used to access the methods and properties of a nested child component from a 
component?</h6>
            <p>ans:- 
            To access the methods and properties of a nested child component from a component, you can use a combination of refs.

ParentComponent creates a ref for the GrandchildComponent and passes it down to the ChildComponent as a prop. The ChildComponent then renders its children, passing the ref to the GrandchildComponent.

            </p>
        </div>
        <div>
            <h6>Q. Name at least one method that is used to create an Error Boundary in React.</h6>
            <p>ans:- static getDerivedStateFromError() is used to create an Error Boundary. 
</p>
        </div>
      </div>
    )
  }
}

export default Subjective