/**
 * @since 2017-05-23 17:35:50
 * @author vivaxy
 */

import React, { Component } from 'react';

import logger from '../lib/logger';

class TestComponent extends Component {
  constructor(props) {
    logger('constructor');
    super(props);
    this.state = {};
    this.forceUpdateComponent = this.forceUpdateComponent.bind(this);
  }

  componentWillMount() {
    logger('componentWillMount');
    setTimeout(() => {
      logger('async methods in componentWillMount');
    }, 0);
  }

  componentDidMount() {
    logger('componentDidMount');
  }

  componentWillReceiveProps() {
    logger('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    logger('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    logger('componentWillUpdate');
  }

  componentDidUpdate() {
    logger('componentDidUpdate');
  }

  componentWillUnmount() {
    logger('componentWillUnmount');
  }

  forceUpdateComponent() {
    logger('forceUpdate');
    this.forceUpdate(() => {
      logger('forceUpdated');
    });
  }

  render() {
    logger('render');
    return (
      <div>
        <button onClick={this.props.onClick}>update with props changes</button>
        <button
          onClick={() => {
            this.setState({});
          }}
        >
          update without props changes
        </button>
        <button onClick={this.forceUpdateComponent}>force update</button>
      </div>
    );
  }
}

export default class LegacyLifecycle extends Component {
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
