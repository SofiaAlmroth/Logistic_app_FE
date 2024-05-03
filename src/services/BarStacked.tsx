import React from "react";
import { AxisOptions, Chart, UserSerie } from "react-charts";
// @ts-ignore
import ResizableBox from "./ResizableBox";
import { usePaints } from "../hooks/usePaints";
import { Paint } from "../types";

// Definiera en utökad version av Paint-typen med primär och sekundär egenskap
interface ExtendedPaint extends Paint {
  primary: string;
  secondary: number;
}

export default function BarStacked() {
  const { paints, setPaints } = usePaints();

  const primaryAxis = React.useMemo<AxisOptions<ExtendedPaint>>(
    () => ({
      getValue: (paint) => paint.primary,
    }),
    []
  );

  const secondaryAxes = React.useMemo<AxisOptions<ExtendedPaint>[]>(
    () => [
      {
        getValue: (paint) => paint.secondary,
        min: 0,
      },
    ],
    []
  );

  // Skapa en ny serie för varje unik färgkategori
  const formattedData: UserSerie<ExtendedPaint>[] = [];

  paints.forEach((paint) => {
    // Kolla om det redan finns en serie med samma kategori
    const existingSeries = formattedData.find(
      (series) => series.label === paint.category.name
    );

    if (existingSeries) {
      // Beräkna den kumulativa kvantiteten för att justera datapunkterna
      const cumulativeQuantity = existingSeries.data.reduce(
        (sum, dataPoint) => sum + dataPoint.secondary,
        0
      );

      // Justera varje datapunkt för att börja från 0
      const adjustedQuantity = paint.quantity - cumulativeQuantity;

      // Lägg till den justerade datapunkten till den befintliga serien
      existingSeries.data.push({
        primary: paint.name,
        secondary: adjustedQuantity,
      } as ExtendedPaint);
    } else {
      // Om det inte finns någon befintlig serie, skapa en ny
      formattedData.push({
        label: paint.category.name,
        data: [
          {
            primary: paint.name,
            secondary: paint.quantity,
          } as ExtendedPaint,
        ],
      });
    }
  });

  return (
    <>
      <ResizableBox>
        <Chart
          options={{
            data: formattedData,
            primaryAxis,
            secondaryAxes,
            tooltip: false,
          }}
        />
      </ResizableBox>
    </>
  );
}
