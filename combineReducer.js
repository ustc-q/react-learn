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