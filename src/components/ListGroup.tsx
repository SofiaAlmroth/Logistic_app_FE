import { Category } from "../services/fakeCategoryService";

interface Props {
  items: Category[];
  selectedItems: Category[];
  onItemSelect(category: Category, isChecked: boolean): void;
}

function ListGroup({ items, selectedItems, onItemSelect }: Props) {
  return (
    <div className="text-center m-6">
      <ul className="menu bg-base-200 w-44 rounded-box">
        <li>
          <details open>
            <summary className="text-lg">Filter</summary>
            <ul>
              {items.map((item) => (
                <li key={item._id}>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs mr-2"
                      onChange={(e) => onItemSelect(item, e.target.checked)}
                      checked={selectedItems.includes(item)}
                    />
                    <span>{item.name}</span>
                  </label>
                </li>
              ))}
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
}

export default ListGroup;
