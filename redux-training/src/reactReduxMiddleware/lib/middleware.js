import { createStore as originCreateStore } from 'redux';

// Step1 自定义中间件
export const middleware1 = (dispatch) => {
    return (action) => {
        console.log('first middleware');
        dispatch(action);
    };
};

export const middleware2 = (dispatch) => {
    return (action) => {
        console.log('second middleware');
        dispatch(action);
    };
};

// Step2 - 用 applyMiddleware 将中间件更优雅地链接起来
// // 只打印出 Action
// export const loggerAction = (store) => {
//     return (dispatch) => {
//         return (action) => {
//             console.log('action: ', action);
//             dispatch(action);
//         };
//     };
// };
//
// // 只打印出 更新后的state
// export const loggerState = (store) => {
//     return (dispatch) => {
//         return (action) => {
//             console.log('current state: ', store.getState());
//             dispatch(action);
//             console.log('next state', store.getState());
//         };
//     };
// };

/* es6 写法  */
// 只打印出 Action
export const loggerAction = (store) => (dispatch) => (action) => {
    console.log('action: ', action);
    dispatch(action);
};

// 只打印出 更新后的state
export const loggerState = (store) => (dispatch) => (action) => {
    console.log('current state: ', store.getState());
    dispatch(action);
    console.log('next state', store.getState());
};

export const applyMiddleware = (store, middlewares) => {
    let dispatch = store.dispatch;
    middlewares.forEach((middleware) => {
        dispatch = middleware(store)(dispatch);
    });

    return {
        ...store,
        dispatch,
    };
};

// Step3 - 更优雅的 applyMiddleware
export const applyMiddlewarePlus = (...middlewares) => (createStore) => (reducer) => {
    const store = createStore(reducer);

    let dispatch = store.dispatch;
    middlewares.forEach((middleware) => {
        dispatch = middleware(store)(dispatch);
    });

    return {
        ...store,
        dispatch,
    };
};

// Step4 - 最终版需要适配 createStore
export const createStore = (reducer, enhancer) => {
    let state = {};
    const listeners = [];
    const getState = () => state;
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach((listener) => listener());
    };
    const subscribe = (listener) => listeners.push(listener);

    if (enhancer !== undefined) {
        return enhancer(createStore)(reducer);
    }

    // 源生store里不止 getState，dispatch，subscribe，还有其他方法，因此无法完全模拟，用源生 createStore 代替
    return originCreateStore(reducer, enhancer);

    // return {
    //     getState,
    //     dispatch,
    //     subscribe,
    // };
};

// Step5 - 增加 compose 绑定插件功能
export const compose = (...funcs) => {
    return funcs.reduce((a, b) => (...args) => a(b(...args)));
};
