/**
 * @since 2019-05-09 07:43
 * @author vivaxy
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StyledComponent extends Component {
  // 3. 在需要使用 context 的子组件中，定义 contextType
  static contextTypes = {
    theme: PropTypes.string.isRequired,
  };

  render() {
    const { theme } = this.context;
    // 4. 通过 this.context 来获取 context 的值
    return <p>Theme: {theme}</p>;
  }
}

export default class LegacyContextType extends Component {
  // 1. 定义 context 的数据结构
  static childContextTypes = {
    theme: PropTypes.string.isRequired,
  };

  // 2. 设置 context 的值
  getChildContext() {
    return { theme: 'dark' };
  }

  render() {
    return <StyledComponent />;
  }
}
