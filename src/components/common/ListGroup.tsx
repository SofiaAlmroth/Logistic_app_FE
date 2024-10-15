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
    <div className="relative z-30">
      <ul className="menu rounded-box bg-slate-200 h-full ">
        <li className="h-full">
          <details className="h-full">
            <summary className="text-lg flex items-center h-full cursor-pointer">
              <i className="fa-solid fa-filter"></i>
            </summary>
            <ul className="ml-4 mt-2">
              {items.map((item) => (
                <li key={item.id} className="mb-2">
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
