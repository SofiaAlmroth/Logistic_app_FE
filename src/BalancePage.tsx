import { useState } from "react";
import ListGroup from "./components/ListGroup";
import { Category, getCategories } from "./services/fakeCategoryService";
import { paints } from "./services/fakePaintService";
import { Pagination } from "./components/Pagination";
import SearchBox from "./components/SearchBox";

const PAGE_SIZE = 4;
const DEFAULT_CATEGORY: Category = {
  _id: "default",
  name: "All Colors",
};

function BalancePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([
    DEFAULT_CATEGORY,
  ]);

  function handleCategoryToggle(category: Category, isChecked: boolean) {
    let categories = selectedCategories;

    if (!isChecked) {
      if (selectedCategories.length === 1) {
        categories = [DEFAULT_CATEGORY];
      } else {
        categories = selectedCategories.filter((c) => c._id !== category._id);
      }
    }

    if (isChecked) {
      if (category._id === DEFAULT_CATEGORY._id) {
        categories = [DEFAULT_CATEGORY];
      } else {
        categories = selectedCategories.filter(
          (c) => c._id !== DEFAULT_CATEGORY._id
        );
        categories.push(category);
      }
    }

    setSelectedCategories(categories);
    setSearchQuery("");
    setSelectedPage(1);
  }

  function handleSearch(value: string) {
    setSearchQuery(value);
    setSelectedCategories([DEFAULT_CATEGORY]);
  }

  if (paints.length === 0) return <p>There are no products in the database</p>;

  const allColorsSelected = selectedCategories.find(
    (c) => c._id === DEFAULT_CATEGORY._id
  );

  let filteredPaints = paints;

  if (searchQuery) {
    filteredPaints = paints.filter((paint) =>
      paint.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  } else if (!allColorsSelected) {
    filteredPaints = paints.filter((p) =>
      selectedCategories.find((c) => c._id === p.category._id)
    );
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <div className="w-1/2 m-6">
          <SearchBox value={searchQuery} onChange={handleSearch} />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex">
          <div className="mr-4">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Cateogry</th>
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
                    <td>{paint.category.name}</td>
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
            <Pagination
              totalCount={paints.length}
              pageSize={PAGE_SIZE}
              selectedPage={selectedPage}
              onPageSelect={setSelectedPage}
            />
          </div>
          <div className="">
            <ListGroup
              items={[DEFAULT_CATEGORY, ...getCategories()]}
              selectedItems={selectedCategories}
              onItemSelect={handleCategoryToggle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default BalancePage;
