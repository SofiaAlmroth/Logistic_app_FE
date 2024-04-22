interface Item {
  id: string;
  name: string;
}

interface Props<T extends Item> {
  items: T[];
  selectedItems: T[];
  onItemSelect(item: T, isChecked: boolean): void;
}

function ListGroup<T extends Item>({
  items,
  selectedItems,
  onItemSelect,
}: Props<T>) {
  return (
    <div className="text-center m-6">
      <ul className="menu bg-base-200 w-44 rounded-box">
        <li>
          <details open>
            <summary className="text-lg">Filter</summary>
            <ul>
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
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
}

export default ListGroup;
