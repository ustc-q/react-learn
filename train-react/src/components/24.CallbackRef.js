/**
 * @since 20180702 20:51
 * @author vivaxy
 */

import React, { Component } from 'react';

export default class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.focusInput = this.focusInput.bind(this);
    this.setInputRef = this.setInputRef.bind(this);
  }

  focusInput() {
    this.inputRef.focus();
  }

  setInputRef(ref) {
    this.inputRef = ref;
  }

  render() {
    return (
      <div>
        <input ref={this.setInputRef} />
        <button onClick={this.focusInput}>聚焦</button>
      </div>
    );
  }
};
