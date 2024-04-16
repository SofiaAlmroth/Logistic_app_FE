import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useRef, useState } from "react";
import { getCategories } from "../services/categoryService";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getPaint, savePaint } from "../services/paintService";
import { Category } from "../types";

const schema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, { message: "Name is required" }),
  categoryId: z.string().min(1, { message: "Category is required" }),
  quantity: z.coerce.number().gt(0, { message: "Quantity is required" }),
  price: z.coerce.number().gt(0, { message: "Price is required" }),
  supplierInfo: z.string().min(1, { message: "Name is required" }),
  orderDate: z.coerce.date(),
  ean_gtin: z.string().min(1, { message: "ean_gtin is required" }),
  batchName: z.string().min(1, { message: "BatchName is required" }),
  bestBeforeDate: z.coerce.date(),
});

type FormData = z.infer<typeof schema>;

interface Props {
  orderId?: string;
  isOpen: boolean;
  onClose(): void;
}
function ProductModal({ orderId, onClose, isOpen }: Props) {
  const [categories, setCategories] = useState<Category[]>([]);
  const modalRef = useRef<HTMLDialogElement>(null);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    async function fetchCategories() {
      const { data: categories } = await getCategories();
      setCategories(categories);
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [isOpen]);

  function handleDateChange(date: Date) {
    console.log(date);
  }
  async function onSubmit(data: FormData) {
    console.log("data", data);
    await savePaint(data);
    reset();
    modalRef.current?.close();
  }

  return (
    <>
      <dialog id="modal" className="modal gap-4" ref={modalRef}>
        <form className="modal-box" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="font-bold text-xl mb-6">New Order</h1>
          <div className="input-container">
            <input
              {...register("name")}
              type="text"
              placeholder="Product Name"
              className="input input-bordered w-full"
            />
            {errors.name && <p className="text-error">{errors.name.message}</p>}
            <select
              {...register("categoryId")}
              defaultValue=""
              className="select select-bordered w-full text-base mt-6"
            >
              <option value="" disabled>
                Category
              </option>

              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.categoryId && (
              <p className="text-error">{errors.categoryId.message}</p>
            )}
            <input
              {...register("quantity")}
              type="text"
              placeholder="Quantity"
              className="input input-bordered w-full mt-6"
            />
            {errors.quantity && (
              <p className="text-error">{errors.quantity.message}</p>
            )}
            <input
              {...register("price")}
              type="text"
              placeholder="Price"
              className="input input-bordered w-full mt-6"
            />{" "}
            {errors.price && (
              <p className="text-error">{errors.price.message}</p>
            )}
            <input
              {...register("supplierInfo")}
              type="text"
              placeholder="SupplierInfo"
              className="input input-bordered w-full mt-6"
            />{" "}
            {errors.supplierInfo && (
              <p className="text-error">{errors.supplierInfo.message}</p>
            )}
            <div className="mt-6 ">
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
              />{" "}
              {errors.orderDate && (
                <p className="text-error">{errors.orderDate.message}</p>
              )}
            </div>
            <input
              {...register("ean_gtin")}
              type="text"
              placeholder="ean_gtin"
              className="input input-bordered w-full mt-6"
            />{" "}
            {errors.ean_gtin && (
              <p className="text-error">{errors.ean_gtin.message}</p>
            )}
            <input
              {...register("batchName")}
              type="text"
              placeholder="BatchName"
              className="input input-bordered w-full mt-6"
            />{" "}
            {errors.batchName && (
              <p className="text-error">{errors.batchName.message}</p>
            )}
            <div className="mt-6 ">
              <Controller
                control={control}
                name="bestBeforeDate"
                render={({ field }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={(date: Date) => {
                      field.onChange(date);
                      handleDateChange(date);
                    }}
                    className="input input-bordered w-full"
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Best Before Date"
                    popperPlacement="bottom-start"
                    wrapperClassName="w-full"
                  />
                )}
              />
              {errors.bestBeforeDate && (
                <p className="text-error">{errors.bestBeforeDate.message}</p>
              )}
            </div>
          </div>
          <div className="form-control">
            <button
              type="submit"
              disabled={!isValid}
              className="btn btn-primary mt-12"
            >
              Save
            </button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button onClick={onClose}>Close</button>
        </form>
      </dialog>
    </>
  );
}

export default ProductModal;
