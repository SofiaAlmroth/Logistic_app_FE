import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useCategories } from "@hooks";
import { useNavigate } from "react-router-dom";
import { saveOrder } from "@services/orderService";

const orderRowSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  categoryId: z.string().min(1, { message: "Category is required" }),
  quantity: z.coerce.number().positive(),
  price: z.coerce.number().positive(),
  supplierInfo: z.string().min(1, { message: "Supplier is required" }),
});

const schema = z.object({
  rows: z.array(orderRowSchema),
});

type FormData = z.infer<typeof schema>;

function OrdersPage() {
  const navigate = useNavigate();
  const categories = useCategories();
  const [showHeader, setShowHeader] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const { fields, append, remove } = useFieldArray({ control, name: "rows" });
  const rows = watch("rows");

  function handleAddProduct() {
    append({
      name: "",
      categoryId: "",
      supplierInfo: "",
      price: 0,
      quantity: 0,
    });
    setShowHeader(true);
  }

  function handleRemove(index: number) {
    remove(index);
    if (fields.length === 1) {
      setShowHeader(false);
    }
  }

  async function onSubmit(data: FormData) {
    console.log("submitted", data);
    await saveOrder(data);
    navigate("/orders");
  }

  return (
    <div className="w-full max-w-7xl m-10">
      <button onClick={handleAddProduct} className="custom-button btn-wide">
        Add Product
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        {showHeader && (
          <table className="table mt-6">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Supplier Info</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {fields.map((field, index) => (
                <tr key={field.id}>
                  <td className="p-2">
                    <input
                      className=" rounded  px-4 py-2 "
                      {...register(`rows.${index}.name`)}
                    />
                  </td>
                  <td className="p-2">
                    <select
                      className=" rounded  px-4 py-2 w-48"
                      {...register(`rows.${index}.categoryId`)}
                    >
                      <option />
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="p-2">
                    <input
                      className="rounded px-4 py-2 "
                      {...register(`rows.${index}.quantity`, {
                        valueAsNumber: true,
                      })}
                    />
                  </td>
                  <td className="p-2">
                    <input
                      className="rounded  px-4 py-2  "
                      {...register(`rows.${index}.price`, {
                        valueAsNumber: true,
                      })}
                    />
                  </td>
                  <td className="p-2">
                    <input
                      className="rounded  px-4 py-2 w-full "
                      {...register(`rows.${index}.supplierInfo`)}
                    />
                  </td>
                  <td className="w-20">
                    {rows[index].price * rows[index].quantity}
                  </td>
                  <td className="p-2">
                    <div className="tooltip tooltip-error" data-tip="Delete">
                      <button
                        onClick={() => handleRemove(index)}
                        className="btn btn-circle"
                      >
                        {<i className="fa-solid fa-x"></i>}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {showHeader && (
          <div className="flex justify-end w-full">
            <button type="submit" className="custom-button btn-wide mt-12 ">
              Submit Order
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
export default OrdersPage;
