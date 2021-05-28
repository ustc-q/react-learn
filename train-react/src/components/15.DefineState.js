/**
 * @since 2017-05-23 17:02:08
 * @author vivaxy
 */

import React, { Component } from 'react';

export default class Submit extends Component {
  // 内部定义初始化的 state
  state = {
    isSubmitting: false
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    // state 根据外部定义初始化
    // this.state = {
    //   isSubmitting: props.isSubmitting,
    // };
  }

  handleClick() {
    console.log('clicked')
    this.setState({ isSubmitting: true }, () => {console.log('disabled',this.state.isSubmitting)});
  }

  toggleDisabled = () => {
    this.setState(prevState => {this.state.isSubmitting = !prevState.isSubmitting}, () => {console.log('disabled',this.state.isSubmitting)})
  }
  
  // toggleDisabled = () => {
  //   this.setState({isSubmitting: !this.state.isSubmitting}, ()=> console.log('disabled', this.state.isSubmitting, this))
  // }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('SCU')
  //   if(nextState.isSubmitting !== this.state.isSubmitting){
  //     return true
  //   }
  //   return false;
  // }

  render() {
    const { isSubmitting } = this.state;
    return (
      <React.Fragment>
        <p>{isSubmitting}</p>
        <button disabled={isSubmitting} onClick={this.handleClick}>
          提交
        </button>
        <button onClick={this.toggleDisabled}>toggleDisabled</button>
      </React.Fragment>
    );
  }
}
