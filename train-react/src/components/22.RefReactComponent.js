/**
 * @since 2017-06-05 14:36:48
 * @author vivaxy
 */

import logger from '../lib/logger';
import React, { Component } from 'react';

import CustomInput from './21.RefDOMComponent';

export default class RefReactComponent extends Component {
  constructor(props) {
    super(props);
    this.inputRef1 = React.createRef();
  }

  componentDidMount() {
    logger('father', this.inputRef1.current);
    this.inputRef1.current.focusInput();
  }

  render() {
    return <CustomInput ref={this.inputRef1} />;
  }
}
