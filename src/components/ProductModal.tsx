import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { getPaint, savePaint } from "../services/paintService";
import { useCategories } from "../hooks/useCategories";
import { useModalContext } from "../context/ModalContext";
import InputField from "./common/InputField";
import SelectField from "./common/SelectField";

const schema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, { message: "Name is required" }),
  categoryId: z.string().min(1, { message: "Category is required" }),
  quantity: z.coerce.number().gt(0, { message: "Quantity is required" }),
  price: z.coerce.number().gt(0, { message: "Price is required" }),
  supplierInfo: z.string().min(1, { message: "Name is required" }),
});

type FormData = z.infer<typeof schema>;

function ProductModal() {
  const categories = useCategories();
  const { productModalRef, productId, setProductId } = useModalContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  useEffect(() => {
    async function fetch() {
      if (!productId) return;
      const { data: paint } = await getPaint(productId);
      reset(paint);
    }
    fetch();
  }, [productId]);

  async function onSubmit(data: FormData) {
    console.log("submitted", data);
    await savePaint(data);
    setProductId("");
    reset();
    productModalRef.current?.close();
  }

  function handleModalClose() {
    setProductId("");
    reset();
    productModalRef.current?.close();
  }

  return (
    <>
      <dialog id="modal" className="modal " ref={productModalRef}>
        <form className="modal-box" onSubmit={handleSubmit(onSubmit)}>
          {productId ? (
            <h1 className="font-bold text-xl p-3">Update Product</h1>
          ) : (
            <h1 className="font-bold text-xl p-3">Add Product</h1>
          )}
          <div className="input-container">
            <InputField>
              <InputField.Label>Name</InputField.Label>
              <InputField.Input {...register("name")} />
              <InputField.Error error={errors.name} />
            </InputField>

            <SelectField>
              <SelectField.Label>Categories</SelectField.Label>
              <SelectField.Select
                items={categories}
                {...register("categoryId")}
              />
              <SelectField.Error error={errors.categoryId} />
            </SelectField>

            <InputField>
              <InputField.Label>Quantity</InputField.Label>
              <InputField.Input {...register("quantity")} />
              <InputField.Error error={errors.quantity} />
            </InputField>

            <InputField>
              <InputField.Label>Price</InputField.Label>
              <InputField.Input {...register("price")} />
              <InputField.Error error={errors.price} />
            </InputField>

            <InputField>
              <InputField.Label>Supplier</InputField.Label>
              <InputField.Input {...register("supplierInfo")} />
              <InputField.Error error={errors.supplierInfo} />
            </InputField>
          </div>
          <div className="form-control p-3 mt-3">
            <button
              type="submit"
              disabled={!isValid}
              className="custom-button "
            >
              Save
            </button>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button onClick={handleModalClose}>Close</button>
        </form>
      </dialog>
    </>
  );
}

export default ProductModal;

{
  /* <div className="mt-6 ">
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
            </div> */
}
