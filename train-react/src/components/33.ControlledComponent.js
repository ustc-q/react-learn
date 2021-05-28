/**
 * @since 2017-06-05 14:58:21
 * @author vivaxy
 */

import React, { Component } from 'react';

import logger from '../lib/logger';

export default class ControlledComponent extends Component {
  state = { value: '默认值' };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    logger(this.state.value);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="提交" />
      </form>
    );
  }
}
