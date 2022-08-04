import { InputWrapper } from './InputStyle';

export default function Input({ type, placeholder, required, onChange }) {
    return (
        <InputWrapper 
            type={type} 
            placeholder={placeholder}
            required={required}
            onChange={onChange}
        />
    )
}