// import { useContext } from "react";
// import contextTheme from "../Context";
import  {useDispatch, useSelector} from 'react-redux'
import { setValue } from '../slice';

const Button = () => {
  const value = useSelector(state => state.value)
  const dispatch = useDispatch();
  const change_bg_fn = ()=>{
    if(value === true){
      dispatch(setValue(false))
    }else{
      dispatch(setValue(true));
    }
  }
  

    // const {light,changeTheme} = useContext(contextTheme)
    // console.log(light);
  return (
    <div>
        <button onClick={change_bg_fn} >Button {value === true?"True":"False"}</button>
        </div>
  )
}

export default Button;