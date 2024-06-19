import { useState } from "react";

interface Props{
  initial?: boolean;
}

//propriété passé a une fonction Props = {}
export const useToggle = ({initial = false}:Props = {}) =>{

  //generer un state
  const [value, setValue] = useState<boolean>(initial);

  const toggle = () =>{
    setValue(!value)
  }
  
    return {
        value,
        setValue, 
        toggle
    }
}