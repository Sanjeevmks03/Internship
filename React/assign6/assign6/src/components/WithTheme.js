import React from 'react';

const WithTheme = (WrappedComponent) => {
  class WithTheme extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        theme: localStorage.getItem('theme')
      };
    }

    setTheme=(theme) =>{
      localStorage.setItem('theme', theme);
      this.setState({ theme });
    }

    render() {
      const { theme } = this.state;
      return <WrappedComponent {...this.props} theme={theme} setTheme={this.setTheme} />;
    }
  }

  return WithTheme;
};

export default WithTheme;
