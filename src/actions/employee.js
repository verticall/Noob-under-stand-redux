import {changeName,changeAge} from '../constant'
const initState={
  name:'bank',age:25
}
const Employee = (state = initState,action)=>{
  switch (action.type) {
    case changeName:
        state={
          ...state,
          name:action.payload
        }
      break;
    case changeAge:
    state={
      ...state,
      age:action.payload
    }
      break;
    default:
  }
  return state;
}
export default Employee
