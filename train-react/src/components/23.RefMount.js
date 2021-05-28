/**
 * @since 2017-06-02 19:56:05
 * @author vivaxy
 */

import React, { Component } from 'react';

export default class CustomInput extends Component {

  state = {
    inputMounted: false,
  };

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.focusInput = this.focusInput.bind(this);
    this.mount = this.mount.bind(this);
    this.unmount = this.unmount.bind(this);
  }

  focusInput() {
    this.inputRef.current && this.inputRef.current.focus();
    console.log('focus');
  }

  mount() {
    this.setState({ inputMounted: true });
  }

  unmount() {
    this.setState({ inputMounted: false });
  }

  render() {
    return (
      <div>
        {
          this.state.inputMounted && (
            <div>
              <input ref={this.inputRef} />
            </div>
          )
        }
        <button onClick={this.mount}>挂载</button>
        <button onClick={this.unmount}>卸载</button>
        <button onClick={this.focusInput}>聚焦</button>
      </div>
    );
  }
}
