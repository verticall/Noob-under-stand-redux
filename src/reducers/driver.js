import {createStore,combineReducers} from 'redux'
import Employee from '../actions/employee'
import SalaryEmployee from '../actions/salaryemployee'

const store = createStore(
  combineReducers(
    {
      EP:Employee,SL:SalaryEmployee
    }
  )
)
store.subscribe(()=>{
  console.log('update : ',store.getState());
});
export default store
