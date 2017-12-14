import React from 'react';

class RouteLoader extends React.Component {
  state = {
    mod: null,
  };

  componentWillMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  load(props) {
    this.setState(
      {
        mod: null,
      },
      () => {
        props.load().then(mod => {
          this.setState({
            mod: mod.default,
          });
        });
      }
    );
  }

  render() {
    return this.state.mod ? this.props.children(this.state.mod) : null;
  }
}

export default RouteLoader;
