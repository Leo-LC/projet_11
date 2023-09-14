import React from "react";

interface SignInFormInputProps {
    inputClassName : string;
    labelText : string;
    htmlFor : string;
    inputType : string;
    inputId : string;
}


export default function SignInFormInput({inputClassName, labelText, htmlFor, inputId, inputType}: SignInFormInputProps) {
    return(
        <div className={inputClassName}>
              <label htmlFor={htmlFor}>{labelText}</label>
              <input type={inputType} id={inputId} />
            </div>
    )
}
