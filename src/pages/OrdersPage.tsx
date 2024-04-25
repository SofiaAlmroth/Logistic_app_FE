import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const orderRowSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  categoryId: z.string().min(1, { message: "Category is required" }),
  quantity: z.coerce.number().gt(0, { message: "Quantity is required" }),
  price: z.coerce.number().gt(0, { message: "Price is required" }),
  supplierInfo: z.string().min(1, { message: "Name is required" }),
});

const schema = z.object({
  rows: z.array(orderRowSchema),
});

type FormData = z.infer<typeof schema>;

function OrdersPage() {
  const { register, control, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(orderRowSchema),
    mode: "onChange",
  });
  const { fields, append, remove } = useFieldArray({ control, name: "rows" });
  console.log(fields, append);
  return (
    <div className=" m-10">
      <button
        onClick={() =>
          append({
            name: "",
            categoryId: "",
            quantity: 0,
            price: 0,
            supplierInfo: "",
          })
        }
        className="custom-button btn-wide"
      >
        Add Product
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Supplier Info</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field, index) => (
            <tr key={field.id}>
              <td>
                <input {...register(`rows.${index}.name`)} />
              </td>
              <td>
                <input {...register(`rows.${index}.categoryId`)} />
              </td>
              <td>
                <input {...register(`rows.${index}.quantity`)} />
              </td>
              <td>
                <input {...register(`rows.${index}.price`)} />
              </td>
              <td>
                <input {...register(`rows.${index}.supplierInfo`)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersPage;
