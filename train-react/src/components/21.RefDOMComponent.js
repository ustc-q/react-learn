/**
 * @since 2017-06-02 19:56:05
 * @author vivaxy
 */

import logger from '../lib/logger';
import React, { Component } from 'react';

export default class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.focusInput = this.focusInput.bind(this);
  }

  focusInput() {
    logger('child',this);
    this.inputRef.current.focus();
    logger('child', this.inputRef.current);
  }

  render() {
    return (
      <div>
        <input ref={this.inputRef} />
        <button onClick={this.focusInput}>聚焦</button>
      </div>
    );
  }
}
