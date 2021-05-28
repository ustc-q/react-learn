/**
 * @since 2019-05-09 11:23
 * @author vivaxy
 */
import React, { Component } from 'react';

// 1. 使用 React.createContext 创建 context，定义数据结构，并传入默认值
const ThemeContext = React.createContext('light');

class StyledComponent extends Component {
  // 3. 在需要使用 context 的子组件中，定义 contextType
  static contextType = ThemeContext;

  render() {
    // 4. 通过 this.context 来获取 context 的值
    return <p>Theme: {this.context}</p>;
  }
}

export default function ContextType() {
  // 2. 使用 ThemeContext.Provider 为子组件提供 context
  return (
    <ThemeContext.Provider value="dark">
      <StyledComponent />
    </ThemeContext.Provider>
  );
}
