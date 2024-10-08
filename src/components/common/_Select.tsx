import { FieldError } from "react-hook-form";
import { SelectHTMLAttributes, forwardRef } from "react";

interface Item {
  id: string;
  name: string;
}

interface Props<T extends Item>
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: FieldError;
  items: T[];
}

function Select<T extends Item>(
  { items, label, error, ...rest }: Props<T>,
  ref: React.Ref<HTMLSelectElement>
) {
  return (
    <div className="p-3">
      <label className="form-control text-sm text-slate-500">{label}</label>
      <select
        ref={ref}
        className="select select-bordered w-full text-base"
        {...rest}
      >
        <option />
        {items.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      {error && <p className="text-error">{error.message}</p>}
    </div>
  );
}

export default forwardRef(Select);
