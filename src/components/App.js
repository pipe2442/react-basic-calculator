import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/Calculate';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const calculation = calculate(this.state, buttonName);
    this.setState(calculation);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <Display result={total} next={next} operation={operation} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default AppComponent;
