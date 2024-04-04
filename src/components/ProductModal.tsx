import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRef } from "react";
import { getCategories } from "../services/fakeCategoryService";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  _id: z.string().optional(),
  name: z.string().min(1, { message: "Name is required" }),
  categoryId: z.string().min(1, { message: "Category is required" }),
  quantity: z.coerce.number().gt(0, { message: "Quantity is required" }),
  price: z.coerce.number().gt(0, { message: "Price is required" }),
  supplierInfo: z.string().min(1, { message: "Name is required" }),
  orderDate: z.coerce.date(),
});

type FormData = z.infer<typeof schema>;

function ProductModal() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const { register, handleSubmit, control, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  function handleDateChange(date: Date) {
    console.log(date);
  }
  function onSubmit(data: FormData) {
    console.log("data", data);
    reset();
    modalRef.current?.close();
  }

  return (
    <>
      <button
        onClick={() => modalRef.current?.showModal()}
        className="custom-button btn-wide"
      >
        New Order
      </button>
      <dialog id="modal" className="modal" ref={modalRef}>
        <form className="modal-box" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="font-bold text-xl mb-3">New Order</h1>
          <div>
            <input
              {...register("name")}
              type="text"
              placeholder="Product Name"
              className="input input-bordered w-full mb-4"
            />
            <select
              {...register("categoryId")}
              defaultValue=""
              className="select select-bordered w-full mb-4 text-base"
            >
              <option value={""} disabled>
                Category
              </option>

              {getCategories().map((category) => (
                <option key={category._id}>{category.name}</option>
              ))}
            </select>
            <input
              {...register("quantity")}
              type="text"
              placeholder="Quantity"
              className="input input-bordered w-full mb-4"
            />
            <input
              {...register("price")}
              type="text"
              placeholder="Price"
              className="input input-bordered w-full mb-4"
            />
            <input
              {...register("supplierInfo")}
              type="text"
              placeholder="SupplierInfo"
              className="input input-bordered w-full mb-4"
            />
            <div className="mb-4 ">
              <Controller
                control={control}
                name="orderDate"
                render={({ field }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={(date: Date) => {
                      field.onChange(date);
                      handleDateChange(date);
                    }}
                    className="input input-bordered w-full"
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Order Date"
                    popperPlacement="bottom-start"
                    wrapperClassName="w-full"
                  />
                )}
              />
            </div>
          </div>
          <div className="form-control">
            <button type="submit" className="btn btn-primary mt-3">
              Save
            </button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
}

export default ProductModal;
