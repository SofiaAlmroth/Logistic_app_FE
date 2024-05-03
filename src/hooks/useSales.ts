import { useEffect, useState } from "react";
import { Sale } from "@types";
import { getSales } from "@services/salesService";

export function useSales() {
  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    async function fetch() {
      const { data: sales } = await getSales();
      setSales(sales);
    }

    fetch();
  }, []);

  return { sales, setSales };
}
