import {AddSalary,DelSalary} from '../constant'
const initState={
  salary:15000,log:[]
}
const SalaryEmployee = (state = initState,action)=>{
  switch (action.type) {
    case AddSalary:
        state={
          ...state,
          salary:state.salary+=action.payload,
          log:[...state.log,action.payload]
        }
      break;
    case DelSalary:
        state={
          ...state,
          salary:state.salary-=action.payload,
          log:[...state.log,-action.payload]
        }
      break;
    default:
  }
  return state;
}
export default SalaryEmployee
