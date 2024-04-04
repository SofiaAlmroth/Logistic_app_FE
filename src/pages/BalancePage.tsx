import { useState } from "react";
import { paginate } from "../utils";
import _ from "lodash";
import { SortColumn } from "../types";
import { PaintsTable } from "../components/PaintsTable";
import ListGroup from "../components/ListGroup";
import { Category, getCategories } from "../services/fakeCategoryService";
import { deletePaint, getPaints } from "../services/fakePaintService";
import { Pagination } from "../components/Pagination";
import SearchBox from "../components/SearchBox";

const PAGE_SIZE = 6;
const DEFAULT_CATEGORY: Category = {
  _id: "default",
  name: "All Colors",
};
const DEFAULT_SORT_COLUMN: SortColumn = { path: "name", order: "asc" };

function BalancePage() {
  const [paints, setPaints] = useState(getPaints());
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([
    DEFAULT_CATEGORY,
  ]);
  const [sortColumn, setSortColumn] = useState(DEFAULT_SORT_COLUMN);

  function handleDelete(id: string) {
    const newPaints = paints.filter((paint) => paint._id !== id);
    deletePaint(id);
    setPaints(newPaints);
  }

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

  if (paints.length === 0) return <p>There are no products available</p>;

  const allColorsSelected = selectedCategories.find(
    (c) => c._id === DEFAULT_CATEGORY._id
  );
  // const filteredPaints = allColorsSelected
  //   ? paints
  //   : paints.filter((p) =>
  //       selectedCategories.find((c) => c._id === p.category._id)
  //     );
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
  const sortedPaints = _.orderBy(
    filteredPaints,
    sortColumn.path,
    sortColumn.order
  );
  const paginatedPaints = paginate(sortedPaints, PAGE_SIZE, selectedPage);
  return (
    <div className="flex flex-row m-12">
      <div className="basis-1/4 m-6">
        <SearchBox value={searchQuery} onChange={handleSearch} />

        <div>
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
      <ListGroup
        items={[DEFAULT_CATEGORY, ...getCategories()]}
        selectedItems={selectedCategories}
        onItemSelect={handleCategoryToggle}
      />
    </div>
  );
}
export default BalancePage;
