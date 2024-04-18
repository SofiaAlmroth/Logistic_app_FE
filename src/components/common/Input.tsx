import { InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

function Input(
  { label, error, ...rest }: Props,
  ref: React.Ref<HTMLInputElement>
) {
  return (
    <div className="mb-3">
      <label className="form-control mb-1 text-sm text-slate-500">
        {label}
      </label>
      <input
        ref={ref}
        type="text"
        className="input input-bordered w-full "
        {...rest}
      />
      {error && <p className="text-error">{error.message}</p>}
    </div>
  );
}

export default forwardRef(Input);
