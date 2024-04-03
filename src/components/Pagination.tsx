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
  let pages: number[] = [];

  for (let count = 1; count <= pageCount; count++) {
    pages.push(count);
  }

  if (pageCount === 1) return null;

  return (
    <div className="join">
      {pages.map((page) => (
        <button
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
