import { useState } from "react";
import ListGroup from "./components/ListGroup";
import { Category, getCategories } from "./services/fakeCategoryService";
import { paints } from "./services/fakePaintService";
import { Pagination } from "./components/Pagination";
import { TableHeader } from "./components/TableHeader";
import { TableBody } from "./components/TableBody";
import { paginate } from "./utils";

const PAGE_SIZE = 4;
const DEFAULT_CATEGORY: Category = {
  _id: "default",
  name: "All Colors",
};

function BalancePage() {
  const [selectedPage, setSelectedPage] = useState(1);
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
  const paginatedPaints = paginate(filteredPaints, PAGE_SIZE, selectedPage);
  return (
    <div className="flex">
      <div className="flex-auto">
        <table className="table">
          <TableHeader />
          <TableBody paints={paginatedPaints} />
        </table>
        <Pagination
          totalCount={filteredPaints.length}
          pageSize={PAGE_SIZE}
          selectedPage={selectedPage}
          onPageSelect={setSelectedPage}
        />
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
