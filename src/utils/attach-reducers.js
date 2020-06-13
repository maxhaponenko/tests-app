export function attachReducers(original, reducers) {
    // debugger
    const nestedReducerKeys = Object.keys(reducers)
    return function combination(state, action) {
      const nextState = original(state, action)
      let hasChanged = false
      const nestedState = {}
      for (let i = 0; i < nestedReducerKeys.length; i++) {
        const key = nestedReducerKeys[i]
        const reducer = reducers[key]
        const previousStateForKey = nextState[key]
        const nextStateForKey = reducer(previousStateForKey, action)
        nestedState[key] = nextStateForKey
        hasChanged = hasChanged || nextStateForKey !== previousStateForKey
      }
      return hasChanged ? Object.assign({}, nextState, nestedState) : nextState
    }
  }