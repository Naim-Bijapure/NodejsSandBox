import {createStore, combineReducers,applyMiddleware} from 'redux'
 

// reducer 
function reducer1(state,action) {
      switch (action.type) {
        case 'add' :
           return 'added state' 
          break;

        case 'remove':
           return 'remove state' 
         break;
        default:
          break;
      }
     return "hello naim" 
}

function reducer2(state,action) {
      switch (action.type) {
        case 'N':
           return 'cool N state' 
          break;

        case 'M':
           return 'this is M state' 
         break;
        default:
          break;
      }
     return "hello naim" 
}

// ! my middleware
function myMiddleMan(State) {
   return next=>  action=>{
     State.getState();/*?*/
     action 
     const returnedVal= next({type:'N'});
     State.getState() ;/*?*/
     
     return returnedVal;
   }
}



const combined= combineReducers({reducer1,reducer2});
const store = createStore(combined,'',applyMiddleware(myMiddleMan));
 


store.dispatch({type:'add'});
store.getState() /*?*/

function mySub() {
  store.getState(); /*?*/
  
    if(store.getState()=='added state'){
       store.dispatch({type:'remove'}); 
      return 'cool added man'
    } 
    
}
//  const unsub= store.subscribe(mySub);
var a=  store.dispatch({type:'M'});
store.getState().reducer2; /*?*/





