import { checkPropTypes } from "prop-types";
import React from "react";
import { connect } from "react-redux";

const combineReducer = (reducerObj) => {
    return function (state, action) {
        const keys = Object.keys(reducerObj);
        const newState = {}
        keys.forEach(key => {
            const reducer = reducerObj[key]
            newState[key] = reducer(state[key], action)
        })
        return {
            ...state,
            ...newState
        }
    }
}

function createStore(reducer, enhance={}) {
    let state = {},
        listeners = []
    const getState = () => {
        return state
    }
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach(fn => fn())
    }
    const subscribe = (fn) => {
        listeners.push(fn)
        return () => {
            unsubscribe(fn)
        }
    }
    const unsubscribe = (listener) => {
        let index = listeners.indexOf(listener)
        if (index === -1) {
            listeners.splice(index)
        }
    }
    return {
        getState,
        dispatch,
        subscribe,
    }
}
const initialState = {
    num: 0
}
function reducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD':
        return {
            ...state,
            num: state.num + 1
        }
      case 'SUB':
        return {
            ...state,
            num: state.num - 1
        }
      default: 
        return state
    }
}

let store = createStore(reducer)
let sub1 = store.subscribe(() => {
    let state = store.getState()
    console.log('sub1:', state.num)
})
let sub2 = store.subscribe(() => {
    let state = store.getState()
    console.log('sub2:', state.num)
})

const createAdd = () => {
    return {
        type: 'ADD'
    }
}

/**
 * connect({},Comp) -> newComp
 */





// 中间件：洋葱圈模型  高阶函数封装dispatch
// applyMiddlewares compose
// redux-thunk 允许action为函数 异步action
// applyMiddlewares = (store) => (dispatch) => (action) => {
    // ...
    // dispatch(action)
    // ...
// } 


// react-redux 
class Provider extends React.Component {
    constructor(props){
        super(props)
        this.store = props.store
    }
    static store = {
        store: PropTypes.Object
    }
    render(){
        return (
            this.props.children
        )
    }
}

connect = (mapStateToProps, mapDispatchToProps) => (WrappedComp) => {
    return class extends React.Component {
        construtor (props, context) {
            super(props, context)
            this.store = context.store
            this.state = {
                props: {}
            }
        }
        static contextTypes = {
            store: PropTypes.object
        }
        componentDidMount () {
            this.store.subscribe(this.update)
            this.update()
        }
        update() {
            const stateProps = mapStateToProps(store.getState())
            const dispatchProps = {}
            const keys = Object.keys(mapDispatchToProps)
            keys.forEach(key => {
                dispatchProps[key] = () => {
                    store.dispatch(mapDispatchToProps[key])
                }
            })

            this.setState({
                props: {
                    ...this.props,
                    ...stateProps,
                    ...dispatchProps
                }
            })
        }
        render() {
            return (
                <WrappedComp {...this.state.props}/>
            )
        }
    }
}