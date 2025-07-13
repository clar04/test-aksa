export default function TableRow({ data, onEdit, onDelete }) {
  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
      <td className="px-6 py-4 text-gray-900 dark:text-gray-100">{data.name}</td>
      <td className="px-6 py-4 text-gray-900 dark:text-gray-100">{data.position}</td>
      <td className="px-6 py-4 text-center space-x-2">
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
  );
}
