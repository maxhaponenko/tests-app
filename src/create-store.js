import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
// import { logOut, saveTokens } from 'store/auth/auth.actions';
// import showToast from 'services/toaster'
import thunk from 'redux-thunk'
import rootReducer from './store/root.reducer';
import {saveState} from "./utils/state-handler";

// const localStorageAuthKey = 'auth_state'
// export const localStorageKeys = {
//     AUTH_STATE: 'authState',
//     SKIP_TUTORIAL: 'skipTutorial'
// }

// const saveState = (state) => {
//     try {
//         // console.log(state.localStorage)
//         if (state.testFlow.localStorage) {
//             for (const [localStorageKey, localStorageValue] of Object.entries(state.testFlow.localStorage)) {
//                 console.log(localStorageKey, localStorageValue);
//                 const serialisedLocalStorageValue = JSON.stringify(localStorageValue);
//                 localStorage.setItem(localStorageKey, serialisedLocalStorageValue);
//             }
//         }
//     } catch (err) {
//         console.error(err)
//     }
// };
// console.log('Init loadState');
// export const loadState = (key) => {
//     try {
//         const serialisedState = localStorage.getItem(key);
//         if (!serialisedState) return undefined;
//         return JSON.parse(serialisedState);
//     } catch (err) {
//         return undefined;
//     }
// };

// const authState = loadState(localStorageKeys.AUTH_STATE)
// const skipTutorial = loadState(localStorageKeys.SKIP_TUTORIAL)

const oldState = {
}

//Dabee: Use Redux Persist for LocalStorage

let middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
    const reduxLogger = createLogger({ collapsed: true, diff: true })
    middleware = [...middleware, reduxLogger]
}

const store = createStore(rootReducer, oldState, composeWithDevTools(applyMiddleware(...middleware)))

saveState(store.getState())

store.subscribe(() => {
    // saveState(store.getState().auth)
    saveState(store.getState())
})

// Listen events within localStorage and change tokens
// --> Logout when user made logout on another tab
// --> Re-save tokens which was reseived from /GetNewTokens in other tab
// window.addEventListener('storage', event => {
//     const storeState = store.getState()
//     const lsState = JSON.parse(event.storageArea[localStorageAuthKey])
//     if (storeState.auth.isAuthenticated) {
//         if (lsState.auth.tokens.accessToken === '' ) {
//             store.dispatch(logOut())
//             showToast({toastType: 2, toastMessage: 'Logged out.'})
//         } else if (lsState.auth.tokens.accessToken !== storeState.auth.tokens.accessToken) {
//             store.dispatch(saveTokens({
//                 accessToken: lsState.auth.tokens.accessToken,
//                 refreshToken: lsState.auth.tokens.refreshToken
//             }))
//             showToast({toastType: 3, toastMessage: 'Re-saved tokens from other tab <---------'})
//         }
//     }
// });


export default store