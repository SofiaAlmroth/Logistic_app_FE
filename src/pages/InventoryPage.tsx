import _ from "lodash";
import { useState } from "react";
import { Category, SortColumn } from "@types";
import { paginate } from "@utils";
import { ListGroup, Pagination, SearchBox } from "@components/common";
import { ProductModal, PaintsTable } from "@components";
import { useCategories, usePaints } from "@hooks";
import { deletePaint } from "@services";

const PAGE_SIZE = 6;
const DEFAULT_CATEGORY: Category = {
  id: "",
  name: "All Colors",
};
const DEFAULT_SORT_COLUMN: SortColumn = { path: "name", order: "asc" };

function InventoryPage() {
  const categories = useCategories();
  const { paints, setPaints } = usePaints();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([
    DEFAULT_CATEGORY,
  ]);
  const [sortColumn, setSortColumn] = useState(DEFAULT_SORT_COLUMN);

  async function handleDelete(id: string) {
    const newPaints = paints.filter((paint) => paint.id !== id);
    setPaints(newPaints);
    await deletePaint(id);
  }

  function handleCategoryToggle(category: Category, isChecked: boolean) {
    let categories = selectedCategories;

    if (!isChecked) {
      if (selectedCategories.length === 1) {
        categories = [DEFAULT_CATEGORY];
      } else {
        categories = selectedCategories.filter((c) => c.id !== category.id);
      }
    }

    if (isChecked) {
      if (category.id === DEFAULT_CATEGORY.id) {
        categories = [DEFAULT_CATEGORY];
      } else {
        categories = selectedCategories.filter(
          (c) => c.id !== DEFAULT_CATEGORY.id
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

  const allColorsSelected = selectedCategories.find(
    (c) => c.id === DEFAULT_CATEGORY.id
  );

  let filteredPaints = paints;

  if (searchQuery) {
    filteredPaints = paints.filter((paint) =>
      paint.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  } else if (!allColorsSelected) {
    filteredPaints = paints.filter((p) =>
      selectedCategories.find((c) => c.id === p.category.id)
    );
  }
  const sortedPaints = _.orderBy(
    filteredPaints,
    sortColumn.path,
    sortColumn.order
  );
  const paginatedPaints = paginate(sortedPaints, PAGE_SIZE, selectedPage);

  if (paints.length === 0)
    return (
      <div className="flex flex-row justify-center items-center">
        <p className="m-6 text-xl">Loading...</p>
        <span
          className="loading loading-spinner loading-xl  text-primary"
          aria-label="Loading"
        ></span>
      </div>
    );

  return (
    <div className="flex flex-col mt-16">
      <div className="flex justify-between ">
        <div className="flex-1 ">
          <SearchBox value={searchQuery} onChange={handleSearch} />
        </div>
        <div className="ml-4 h-12">
          <ListGroup
            items={[DEFAULT_CATEGORY, ...categories]}
            selectedItems={selectedCategories}
            onItemSelect={handleCategoryToggle}
          />
        </div>
      </div>
      <div>
        <div className="mt-3">
          <PaintsTable
            sortColumn={sortColumn}
            onSort={setSortColumn}
            paints={paginatedPaints}
            onDelete={handleDelete}
          />
          <Pagination
            totalCount={filteredPaints.length}
            pageSize={PAGE_SIZE}
            selectedPage={selectedPage}
            onPageSelect={setSelectedPage}
          />
        </div>
      </div>

      <ProductModal />
    </div>
  );
}
export default InventoryPage;
