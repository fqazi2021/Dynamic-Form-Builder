import React from "react";
import { useForm, SubmitHandler } from 'react-form-hook';

function formbuilder(){
  const Inputs = {
    example: string,
    exampleRequired: string
  }
    const {
        register,
        handleSubmit,        
        formState: { errors },
      } = useForm()

      function save(data){  
        alert(data);
      }

return(
 <form onsubmit={save}>
 </form>

)
}
export default formbuilder;