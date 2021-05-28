/**
 * @since 2019-05-07 08:13
 * @author vivaxy
 */

import React, { Component } from 'react';

// 1. 定义 ThemeContext 数据格式，包括更新函数
const ThemeContext = React.createContext({
  theme: 'light',
  updateTheme: () => {},
});

class StyledComponent extends Component {
  state = {
    inputValue: '',
  };

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  render() {
    const { inputValue } = this.state;
    // 4. 使用 Context.Consumer 获取 context 的值，通过更新函数更新 context
    return (
      <ThemeContext.Consumer>
        {({ theme, updateTheme }) => (
          <div>
            <p>Current theme: {theme}</p>
            <input value={inputValue} onChange={this.handleInputChange} />
            <button onClick={() => updateTheme(inputValue)}>更新主题</button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default class UpdatingContext extends Component {
  // 2. 在根组件的 state 上声明 context 的值
  state = {
    theme: 'light',
  };

  constructor(props) {
    super(props);
    this.updateTheme = this.updateTheme.bind(this);
  }

  updateTheme(theme) {
    this.setState({ theme });
  }

  render() {
    // 3. 组装 context，传入更新函数
    const contextValue = {
      theme: this.state.theme,
      updateTheme: this.updateTheme,
    };
    return (
      <ThemeContext.Provider value={contextValue}>
        <StyledComponent />
      </ThemeContext.Provider>
    );
  }
}
