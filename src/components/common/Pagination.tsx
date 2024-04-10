import { range } from "../../utils";

interface Props {
  pageSize: number;
  totalCount: number;
  selectedPage: number;
  onPageSelect(page: number): void;
}

export function Pagination({
  pageSize,
  totalCount,
  selectedPage,
  onPageSelect,
}: Props) {
  const pageCount = Math.ceil(totalCount / pageSize);

  const pages = range(1, pageCount);

  if (pageCount === 1) return null;

  return (
    <div className="join m-3">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageSelect(page)}
          className={`join-item btn ${
            page === selectedPage ? "btn-active" : ""
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
