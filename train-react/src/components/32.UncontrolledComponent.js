/**
 * @since 2017-06-05 14:58:21
 * @author vivaxy
 */

import React, { Component } from 'react';

import logger from '../lib/logger';

export default class UncontrolledComponent extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault(); // 避免页面跳转
    logger(this.inputRef.current.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref={this.inputRef} defaultValue="默认值" />
        <input type="submit" value="提交" />
      </form>
    );
  }
}
