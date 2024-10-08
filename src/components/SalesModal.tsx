import { Column, Paint, Sale, SortColumn } from "@types";
import { forwardRef, useEffect, useState } from "react";
import { Table } from "./common";
import _ from "lodash";
import { getSale, saveSale } from "@services/salesService";
import { useNavigate } from "react-router-dom";

interface Props {
  onClose(): void;
  cartItems?: Paint[];
  salesId?: string;
}

const DEFAULT_SORT_COLUMN: SortColumn = { path: "name", order: "asc" };

function SalesModal(
  { onClose, cartItems, salesId }: Props,
  ref: React.Ref<HTMLDialogElement>
) {
  const navigate = useNavigate();
  const [sortColumn, setSortColumn] = useState(DEFAULT_SORT_COLUMN);
  const [sale, setSale] = useState<Sale | undefined>();

  console.log("salesId", salesId);
  // console.log("sale", sale);
  useEffect(() => {
    async function fetch() {
      if (!salesId) return;
      const { data: salesData } = await getSale(salesId);
      if (!salesData) return navigate("/not-found");
      console.log("salesData", salesData);
      setSale(salesData);
    }
    fetch();
  }, [salesId]);

  async function handleSave() {
    if (cartItems) await saveSale({ rows: cartItems });
    navigate("/sales");
    console.log(cartItems);
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

  const items: Paint[] = salesId ? sale?.rows || [] : cartItems || [];
  const sortedPaints = _.orderBy(items, sortColumn.path, sortColumn.order);

  return (
    <>
      <dialog id="order_modal" className="modal" ref={ref}>
        <div className="max-w-none modal-box w-max h-1/2">
          {cartItems && <h1 className="m-4 text-3xl">New Sales Order</h1>}
          {salesId && (
            <h1 className="m-4 text-3xl">{`Sale ${sale?.number}`} </h1>
          )}
          <Table
            columns={columns}
            items={sortedPaints}
            onSort={setSortColumn}
            sortColumn={sortColumn}
          />
          {!salesId && (
            <div className="flex justify-end py-12">
              <button onClick={handleSave} className="custom-button btn-wide">
                Submit Sales Order
              </button>
            </div>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={onClose}>close</button>
        </form>
      </dialog>
    </>
  );
}

export default forwardRef<HTMLDialogElement, Props>(SalesModal);
