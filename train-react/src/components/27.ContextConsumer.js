/**
 * @since 2019-05-09 02:21
 * @author vivaxy
 */
import React from 'react';

// 1. 使用 React.createContext 创建 context，定义数据结构，并传入默认值
const ThemeContext = React.createContext('light');

function StyledComponent() {
  return (
    // 3. 通过 Context.Consumer 的回调函数获取 context 的值
    <ThemeContext.Consumer>
      {(value) => <p>Theme: {value}</p>}
    </ThemeContext.Consumer>
  );
}

export default function ContextConsumer() {
  // 2. 使用 ThemeContext.Provider 为子组件提供 context
  return (
    <ThemeContext.Provider value="dark">
      <StyledComponent />
    </ThemeContext.Provider>
  );
}
