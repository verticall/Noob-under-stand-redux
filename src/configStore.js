import {AddSalary,DelSalary,changeName,changeAge} from './constant'
export const mapStatetoProp = (state) => {
  return {
    rxEmployee:state.EP,
    rxSalary:state.SL
  }
}
export const mapDispatchtoProp = (dispatch) => {
  return {
    changeName:(passParam)=>{
      dispatch({
        type:changeName,
        payload:passParam
      })},
    changeAge:(passParam)=>{
      dispatch({
        type:changeAge,
        payload:passParam
      })},
    AddSalary:(passParam)=>{
        dispatch({
          type:AddSalary,
          payload:passParam
        })},
    DelSalary:(passParam)=>{
        dispatch({
          type:DelSalary,
          payload:passParam
        })}
  }
}
