import React from 'react';

class LoadingAnimation extends React.Component {
  state = {
    text: ''
  };

  componentDidMount() {
    const stopper = this.state.text + '...';

    this.interval = setInterval(() => {
      this.state.text === stopper
        ? this.setState({ text: '' })
        : this.setState(prevState => ({ text: prevState.text + '.' }))
    }, 300);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <span>{this.state.text}</span>;
  }
}

export default LoadingAnimation;
