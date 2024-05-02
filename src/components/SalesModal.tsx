import { Column, Paint, SortColumn } from "@types";
import { forwardRef, useState } from "react";
import { Table } from "./common";
import _ from "lodash";
import { getSale, saveSale } from "@services/salesService";
import { useNavigate } from "react-router-dom";

interface Props {
  onClose(): void;
  cartItems: Paint[];
}

const DEFAULT_SORT_COLUMN: SortColumn = { path: "name", order: "asc" };

function SalesModal(
  { onClose, cartItems }: Props,
  ref: React.Ref<HTMLDialogElement>
) {
  const navigate = useNavigate();
  const [sortColumn, setSortColumn] = useState(DEFAULT_SORT_COLUMN);

  async function handleSave() {
    await saveSale({ rows: cartItems });
    navigate("/sales");
  }

  const columns: Column<Paint>[] = [
    { path: "name", label: "Name" },
    { path: "category.name", label: "Category" },
    { path: "quantity", label: "Quantity" },
    { path: "price", label: "Price" },
    { path: "supplierInfo", label: "Suppier" },
    {
      path: "orderDate",
      label: "Order Date",
      content: (paint) => <>{new Date(paint.orderDate).toLocaleDateString()}</>,
    },
    { path: "ean_gtin", label: "Ean-Gtin" },
    {
      key: "bestBeforeDate",

      path: "bestBeforeDate",
      label: "Best Before Date",
      content: (paint) => (
        <>{new Date(paint.bestBeforeDate).toLocaleDateString()}</>
      ),
    },
  ];

  const sortedPaints = _.orderBy(cartItems, sortColumn.path, sortColumn.order);

  return (
    <>
      <dialog id="order_modal" className="modal" ref={ref}>
        <div className="max-w-none modal-box w-max h-1/2">
          <h1 className="m-4 text-3xl">New Sales Order</h1>

          <Table
            columns={columns}
            items={sortedPaints}
            onSort={setSortColumn}
            sortColumn={sortColumn}
          />
          <div className="flex justify-end py-12">
            <button onClick={handleSave} className="custom-button btn-wide">
              Submit Sales Order
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={onClose}>close</button>
        </form>
      </dialog>
    </>
  );
}

export default forwardRef<HTMLDialogElement, Props>(SalesModal);
