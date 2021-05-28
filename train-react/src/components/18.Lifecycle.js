/**
 * @since 2017-05-23 17:35:50
 * @author vivaxy
 */

import React, { Component } from 'react';

import logger from '../lib/logger';

class TestComponent extends Component {
  constructor(props) {
    logger('constructor', props);
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    logger('getDerivedStateFromProps', props, state);
    return null; // return object to update state, return null to update nothing.
  }

  shouldComponentUpdate(nextProps, nextState) {
    logger('shouldComponentUpdate', nextProps, nextState);
    return true; // return true to render, return false not to render.
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 即将更新，可以读取 dom 上的数据，作为 snapshot 记录下来，在 didMount 中可以做对比
    logger('getSnapshotBeforeUpdate', prevProps, prevState);
    return { snapshotData: 'snapshotData' };
  }

  componentDidMount() {
    logger('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    logger('componentDidUpdate', prevProps, prevState, snapshot);
  }

  componentWillUnmount() {
    logger('componentWillUnmount');
  }

  render() {
    logger('render');
    return (
      <div>
        <button onClick={this.props.onClick}>更新 props</button>
        <button
          onClick={() => {
            this.setState({});
          }}
        >
          更新 state
        </button>
      </div>
    );
  }
}

export default class Lifecycle extends Component {
  state = {
    mount: false,
    count: 0,
  };

  render() {
    const { count, mount } = this.state;
    return (
      <div>
        {mount && (
          <TestComponent
            count={count}
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
            }}
          />
        )}
        <button
          onClick={() => {
            this.setState({ mount: !this.state.mount });
          }}
        >
          {mount ? '卸载' : '挂载'}
        </button>
      </div>
    );
  }
}
