import React from 'react';
import Container from './my/Container';

class Main extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
  }

  render() {
    return (
      <Container width={500} />
    );
  }
}

export default Main;
