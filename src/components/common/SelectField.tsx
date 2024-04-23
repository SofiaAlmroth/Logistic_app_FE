import { PropsWithChildren, forwardRef, SelectHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export default function SelectField({ children }: PropsWithChildren) {
  return <div className="p-2">{children}</div>;
}

SelectField.Label = function Label({ children }: PropsWithChildren) {
  return (
    <label className="form-control text-sm text-slate-500">{children}</label>
  );
};

interface Item {
  id: string;
  name: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  items: Item[];
}

function Select(
  { items, ...rest }: SelectProps,
  ref: React.Ref<HTMLSelectElement>
) {
  return (
    <select
      ref={ref}
      className="select select-bordered w-full text-base mt-1"
      {...rest}
    >
      <option />
      {items.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
}

SelectField.Select = forwardRef(Select);

interface ErrorProps {
  error?: FieldError;
}

SelectField.Error = function Error({ error }: ErrorProps) {
  return <>{error && <p className="text-error">{error.message}</p>}</>;
};
