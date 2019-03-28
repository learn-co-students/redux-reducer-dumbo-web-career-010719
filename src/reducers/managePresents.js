export function managePresents(state, action){
  switch(action.type) {
    case 'INCREASE':
      return {numberOfPresents: state.numberOfPresents + 1}
    default:
      return state;
  }
}

// return {...state, numberOfPresents: state.numberOfPresents + 1}
