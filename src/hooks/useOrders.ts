import { useEffect, useState } from "react";
import { Order } from "@types";
import { getOrders } from "@services";

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    async function fetch() {
      const { data: orders } = await getOrders();
      setOrders(orders);
    }

    fetch();
  }, []);

  return orders;
}
