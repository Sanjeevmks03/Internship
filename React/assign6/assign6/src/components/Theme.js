import React from 'react'
import WithTheme from './WithTheme';

class Theme extends React.Component {
  render() {
    // const { theme, setTheme } = this.props;
    return (
      <div>
        <h6>Q. Using class components, create a HOC - withTheme that accepts a wrappable component and
injects ‘theme’ and ‘setTheme’ props to its wrapped component. ‘theme’ should be read from
localstorage and ‘setTheme’ should update the localstorage for the selection of dark theme or light
theme.</h6>
        <h1>Theme in localstorage:- <span style={{color:localStorage.getItem('theme')==='light'?'Gold':'black'}}>{localStorage.getItem('theme')}</span></h1>
        <button type="button" class="btn btn-warning" onClick={()=>this.props.setTheme('light')}>Switch to light mode</button>
        <button type="button" class="btn btn-dark" onClick={()=>this.props.setTheme('dark')}>Switch to Dark mode</button>
      </div>
    );
  }
}

export default WithTheme(Theme);