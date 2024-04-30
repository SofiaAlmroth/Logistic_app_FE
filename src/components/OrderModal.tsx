import { Column, Order, Paint, SortColumn } from "@types";
import { forwardRef, useEffect, useState } from "react";
import { Table } from "./common";
import { getOrder } from "@services/orderService";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

interface Props {
  onClose(): void;
  orderId: string;
}

const DEFAULT_SORT_COLUMN: SortColumn = { path: "name", order: "asc" };

function OrderModal(
  { onClose, orderId }: Props,
  ref: React.Ref<HTMLDialogElement>
) {
  const navigate = useNavigate();
  const [sortColumn, setSortColumn] = useState(DEFAULT_SORT_COLUMN);
  const [order, setOrder] = useState<Order | undefined>();

  useEffect(() => {
    async function fetch() {
      if (!orderId) return;
      const { data: orderData } = await getOrder(orderId);
      if (!orderData) return navigate("/not-found");
      setOrder(orderData);
    }
    fetch();
  }, [orderId]);

  const items: Paint[] = order?.rows || [];
  console.log("orders", order);

  const columns: Column<Paint>[] = [
    { path: "name", label: "Name" },
    { path: "category.name", label: "Category" },
    { path: "quantity", label: "Quantity (l)" },
    { path: "price", label: "Price" },
    { path: "supplierInfo", label: "Suppier" },
    {
      path: "orderDate",
      label: "Order Date",
      content: (paint) => <>{new Date(paint.orderDate).toLocaleDateString()}</>,
    },
    { path: "ean_gtin", label: "Ean-Gtin" },
    {
      path: "bestBeforeDate",
      label: "Best Before Date",
      content: (paint) => (
        <>{new Date(paint.bestBeforeDate).toLocaleDateString()}</>
      ),
    },
  ];

  const sortedPaints = _.orderBy(items, sortColumn.path, sortColumn.order);

  return (
    <>
      <dialog id="order_modal" className="modal" ref={ref}>
        <div className="max-w-none modal-box w-max h-1/2">
          <h1 className="m-4 text-3xl">{`Order ${order?.number}`} </h1>

          <Table
            columns={columns}
            items={sortedPaints}
            onSort={setSortColumn}
            sortColumn={sortColumn}
          />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={onClose}>close</button>
        </form>
      </dialog>
    </>
  );
}

export default forwardRef<HTMLDialogElement, Props>(OrderModal);
