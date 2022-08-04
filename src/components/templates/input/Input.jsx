import { InputWrapper } from './InputStyle';

export default function Input({ type, placeholder, required, onChange, name, disabled, value }) {
    return (
        <InputWrapper 
            type={type} 
            name={name}
            value={value}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            onChange={onChange}
        />
    )
}