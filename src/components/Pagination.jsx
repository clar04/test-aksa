export default function Pagination({ page, max, onPageChange }) {
  const pages = Array.from({ length: max }, (_, i) => i + 1);

  return (
    <div className="mt-4 flex justify-center items-center gap-2">
      <button
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
      >
        Prev
      </button>

      {pages.map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          className={`px-3 py-1 rounded ${
            num === page
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white'
          }`}
        >
          {num}
        </button>
      ))}

      <button
        disabled={page >= max}
        onClick={() => onPageChange(page + 1)}
        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
