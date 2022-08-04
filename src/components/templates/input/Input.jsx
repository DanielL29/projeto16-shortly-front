import { InputWrapper } from './InputStyle';

export default function Input({ type, placeholder, required, onChange, name, disabled }) {
    return (
        <InputWrapper 
            type={type} 
            name={name}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            onChange={onChange}
        />
    )
}