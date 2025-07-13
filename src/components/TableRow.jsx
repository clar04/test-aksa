export default function TableRow({ data, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border">
        <tbody>
          <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
            <td className="px-4 py-2">{data.name}</td>
            <td className="px-4 py-2">{data.position}</td>
            <td className="px-4 py-2 text-center space-x-2">
              <button
                onClick={onEdit}
                className="text-blue-500 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={onDelete}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
