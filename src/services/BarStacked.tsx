import { useEffect, useRef } from "react";
import { usePaints } from "../hooks/usePaints";
import { useCategories } from "../hooks/useCategories";
import { Chart } from "chart.js/auto";

const PaintsChart = () => {
  const { paints } = usePaints();
  const categories = useCategories();
  const chartRef = useRef<HTMLCanvasElement>(null);

  const categoryColors = {
    Yellow: "#ffee8c", // Gold Yellow
    Blue: "#6C88C4", // Dodger Blue
    Red: "#B5BEF5", // Orange Red
    Green: "#06402B", // Lime Green
    Pink: "#FF96C5", // Hot Pink
    Black: "#000000", // Black
    Purple: "#CDBDEB", // Medium Purple
    Orange: "#FC6238", // Orange
    Beige: "#F2D4CC", // Beige
    Brown: "#4C3228", // Saddle Brown
    White: "#FFFFF0", // White
    Grey: "#808080", // Gray
  };

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    // Skapa en sorterad lista av målningar baserat på kategorinamn
    const sortedPaints = [...paints].sort((a, b) => {
      const categoryA = categories.find(
        (category) => category.id === a.category.id
      );
      const categoryB = categories.find(
        (category) => category.id === b.category.id
      );
      if (categoryA && categoryB) {
        return categoryA.name.localeCompare(categoryB.name);
      } else {
        return 0; // Returnera 0 om antingen categoryA eller categoryB är undefined
      }
    });

    // Extrahera namnen på färgerna baserat på den sorterade listan av målningar
    // const colors = sortedPaints.map((paint) => {
    //   const category = categories.find(
    //     (category) => category.id === paint.category.id
    //   );
    //   return category ? category.name : "rgba(255, 99, 132, 1)";
    // });

    const colors = sortedPaints.map((paint) => {
      const category = categories.find(
        (category) => category.id === paint.category.id
      );
      return category
        ? categoryColors[category.name as keyof typeof categoryColors] ||
            "rgba(0,0,0,0.5)"
        : "rgba(0,0,0,0.5)";
    });

    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: sortedPaints.map((paint) => paint.name),
        datasets: [
          {
            label: "In stock",
            data: sortedPaints.map((paint) => paint.quantity),
            backgroundColor: colors, // Använd färgerna från kategorin
            borderColor: "rgba(255, 99, 132, 1)",
          },
        ],
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: "Paints",
            },
          },
          y: {
            title: {
              display: true,
              text: "Quantity",
            },
            beginAtZero: true,
          },
        },
      },
    });

    return () => chart.destroy(); // Cleanup on unmount
  }, [paints, categories]);

  return (
    <div>
      <canvas className="chartCanvas" ref={chartRef}></canvas>
    </div>
  );
};

export default PaintsChart;
