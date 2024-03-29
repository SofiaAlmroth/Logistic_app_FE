import { useState } from "react";
import ListGroup from "./components/ListGroup";
import { Category, getCategories } from "./services/fakeCategoryService";
import { paints } from "./services/fakePaintService";

const DEFAULT_CATEGORY: Category = {
  _id: "default",
  name: "All Colors",
};

function BalancePage() {
  const [selectedCategories, setSelectedCategories] = useState([
    DEFAULT_CATEGORY,
  ]);

  function handleCategoryToggle(category: Category, isChecked: boolean) {
    setSelectedCategories((prevCategories) => {
      let categories = prevCategories;

      if (!isChecked) {
        if (prevCategories.length === 1) {
          categories = [DEFAULT_CATEGORY];
        } else {
          categories = prevCategories.filter((c) => c._id !== category._id);
        }
      }

      if (isChecked) {
        if (category._id === DEFAULT_CATEGORY._id) {
          categories = [DEFAULT_CATEGORY];
        } else {
          categories = prevCategories.filter(
            (c) => c._id !== DEFAULT_CATEGORY._id
          );
          categories.push(category);
        }
      }

      return categories;
    });
  }

  if (paints.length === 0) return <p>There are no products in the database</p>;

  const allColorsSelected = selectedCategories.find(
    (c) => c._id === DEFAULT_CATEGORY._id
  );
  const filteredPaints = allColorsSelected
    ? paints
    : paints.filter((p) =>
        selectedCategories.find((c) => c._id === p.category._id)
      );

  return (
    <div className="flex">
      <div className="flex-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>SupplierInfo</th>
              <th>Orderdate</th>
              <th>EAN</th>
              <th>Batch</th>
              <th>Best before date</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {filteredPaints.map((paint) => (
              <tr key={paint._id}>
                <td>{paint.name}</td>
                <td>{paint.quantity}</td>
                <td>{paint.price}</td>
                <td>{paint.supplierInfo}</td>
                <td>{paint.orderDate.toLocaleDateString()}</td>
                <td>{paint.EAN_GTIN}</td>
                <td>{paint.batchName}</td>
                <td>{paint.bestBeforeDate.toLocaleDateString()}</td>
                <td>
                  <button className="btn btn-ghost">Adjust</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex-none ml-4">
        <ListGroup
          items={[DEFAULT_CATEGORY, ...getCategories()]}
          selectedItems={selectedCategories}
          onItemSelect={handleCategoryToggle}
        />
      </div>
    </div>
  );
}
export default BalancePage;
