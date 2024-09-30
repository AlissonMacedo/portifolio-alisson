// include type check against field path with the name you have supplied.

import { register } from "module"
import { type } from "os"
import { input } from "zod"

type InputProps = {
  placeholder?: string
  helperText?: string
}

export default function Input({
  placeholder,

  helperText,
}: InputProps) {
  const { onChange, onBlur, name, ref } = register()

  return (
    <>
      <input
        placeholder={placeholder}
        onChange={onChange} // assign onChange event
        onBlur={onBlur} // assign onBlur event
        name={name} // assign name prop
        ref={ref} // assign ref prop
      />
      <a>{helperText}</a>
    </>
  )
}
