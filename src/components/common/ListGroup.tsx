import { Category } from "../../types";

interface Props {
  items: Category[];
  selectedItems: Category[];
  onItemSelect(category: Category, isChecked: boolean): void;
}

function ListGroup({ items, selectedItems, onItemSelect }: Props) {
  console.log("Selected Items:", selectedItems);
  return (
    <div className="text-center mt-6">
      <ul className="menu  bg-stone-200 w-36 rounded-box">
        <li>
          <details open>
            <summary className="text-lg">Filter</summary>
            {items.map((item) => (
              <li key={item.id}>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-xs checkbox-primary mr-2"
                    onChange={(e) => onItemSelect(item, e.target.checked)}
                    checked={selectedItems.includes(item)}
                  />
                  <span>{item.name}</span>
                </label>
              </li>
            ))}
          </details>
        </li>
      </ul>
    </div>
  );
}

export default ListGroup;
