import { useEffect, useState } from "react";
import { Paint } from "../types";
import { getPaints } from "../services/paintService";

export function usePaints() {
  const [paints, setPaints] = useState<Paint[]>([]);

  useEffect(() => {
    async function fetch() {
      const { data: paints } = await getPaints();
      setPaints(paints);
    }

    fetch();
  }, []);

  return { paints, setPaints };
}
