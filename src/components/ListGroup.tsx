import { getCategories } from "../services/fakeCategoryService";

function ListGroup() {
  const categories = getCategories();

  return (
    <div className="m-6 text-center">
      <ul className="menu bg-base-200 w-40 rounded-box">
        <li>
          <details open>
            <summary>Filter</summary>
            <ul>
              {categories.map((category) => (
                <li key={category._id}>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm mr-2"
                    />
                    <li>{category.name}</li>
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
