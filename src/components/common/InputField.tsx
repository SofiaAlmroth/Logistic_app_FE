import { InputHTMLAttributes, PropsWithChildren, forwardRef } from "react";
import { FieldError } from "react-hook-form";

export default function InputField({ children }: PropsWithChildren) {
  return <div className="p-2 mb-2">{children}</div>;
}

InputField.Label = function Label({ children }: PropsWithChildren) {
  return (
    <label className="form-control text-sm text-slate-500">{children}</label>
  );
};

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input({ ...rest }: InputProps, ref: React.Ref<HTMLInputElement>) {
  return (
    <input
      ref={ref}
      type="text"
      className="input input-bordered w-full mt-1"
      {...rest}
    />
  );
}

InputField.Input = forwardRef(Input);

interface ErrorProps {
  error?: FieldError;
}

InputField.Error = function Error({ error }: ErrorProps) {
  return <>{error && <p className="text-error ">{error.message}</p>}</>;
};
