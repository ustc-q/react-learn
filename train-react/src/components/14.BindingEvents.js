/**
 * @since 2017-05-23 19:03:10
 * @author vivaxy
 */

import logger from '../lib/logger';
import React, { Component } from 'react';

export default class BindingEvents extends Component {
  isSubmitting = false;

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
    // 记得绑定 this
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    logger('this', this);  // 不bind this的话，是undefined
    logger(this.isSubmitting);
  }

  // 箭头函数也能解决 this 指向问题
  // handleClick = () => {
  //   logger(this.isSubmitting);
  // };

  render() {
    return <button onClick={this.handleClick}>提交</button>;
  }
}
