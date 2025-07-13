export default function TableRow({ data, onEdit, onDelete }) {
  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
      <td className="px-6 py-4 text-gray-900 dark:text-gray-100">{data.name}</td>
      <td className="px-6 py-4 text-gray-900 dark:text-gray-100">{data.position}</td>
      <td className="px-6 py-4 text-center space-x-2">
<button
  onClick={onEdit}
  className="px-2 py-1 rounded hover:underline text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30"
>
  Edit
</button>
<button
  onClick={onDelete}
  className="px-2 py-1 rounded hover:underline text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30"
>
  Delete
</button>

      </td>
    </tr>
  );
}
