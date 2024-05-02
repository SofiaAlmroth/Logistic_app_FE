import _ from "lodash";
import { useRef, useState } from "react";
import { Category, Paint, SortColumn } from "@types";
import { paginate } from "@utils";
import { ListGroup, Pagination, SearchBox } from "@components/common";
import { ProductModal } from "@components";
import { useCategories, usePaints } from "@hooks";
import SalesTable from "@components/SalesTable";
import SalesModal from "@components/SalesModal";

const PAGE_SIZE = 6;
const DEFAULT_CATEGORY: Category = {
  id: "",
  name: "All Colors",
};
const DEFAULT_SORT_COLUMN: SortColumn = { path: "name", order: "asc" };

function Sales() {
  const categories = useCategories();
  const { paints, setPaints } = usePaints();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([
    DEFAULT_CATEGORY,
  ]);
  const [sortColumn, setSortColumn] = useState(DEFAULT_SORT_COLUMN);
  const [cartItems, setCartItems] = useState<Paint[]>([]);
  const modalRef = useRef<HTMLDialogElement>(null);

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

  function handleOpenModal() {
    modalRef.current?.showModal();
  }

  function handleCloseModal() {
    modalRef.current?.close();
  }

  function handleAddToCart(id: string) {
    const paintToAdd = paints.find((paint) => paint.id === id);

    if (paintToAdd) {
      const existingItemIndex = cartItems.findIndex((item) => item.id === id);

      if (existingItemIndex !== -1) {
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemIndex].quantity++;

        setCartItems(updatedCartItems);
      } else {
        setCartItems((prevCartItems) => [
          ...prevCartItems,
          { ...paintToAdd, quantity: 1 },
        ]);
      }
    }
  }

  function calculateCartItems(cartItems: Paint[]) {
    let totalQuantity = 0;

    for (let i = 0; i < cartItems.length; i++) {
      let itemQuantity = cartItems[i].quantity;

      totalQuantity = totalQuantity + itemQuantity;
    }
    return totalQuantity;
  }

  const cartItemsQuantity = calculateCartItems(cartItems);

  function handleSearch(value: string) {
    setSearchQuery(value);
    setSelectedCategories([DEFAULT_CATEGORY]);
  }

  if (paints.length === 0) return <p>There are no products available</p>;

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
  return (
    <div className="flex flex-row">
      <div className="m-6 ">
        <div className="flex justify-end my-3">
          <button onClick={handleOpenModal} className="btn btn-sm">
            Cart
            <div className="badge badge-secondary">{cartItemsQuantity}</div>
          </button>
          <SalesModal
            cartItems={cartItems}
            onClose={handleCloseModal}
            ref={modalRef}
          />
        </div>
        <SearchBox value={searchQuery} onChange={handleSearch} />
        <div>
          <div>
            <SalesTable
              sortColumn={sortColumn}
              onSort={setSortColumn}
              paints={paginatedPaints}
              onAdd={handleAddToCart}
            />
            <Pagination
              totalCount={filteredPaints.length}
              pageSize={PAGE_SIZE}
              selectedPage={selectedPage}
              onPageSelect={setSelectedPage}
            />
          </div>
        </div>
      </div>
      <div>
        <ListGroup
          items={[DEFAULT_CATEGORY, ...categories]}
          selectedItems={selectedCategories}
          onItemSelect={handleCategoryToggle}
        />
      </div>
      <ProductModal />
    </div>
  );
}

export default Sales;
