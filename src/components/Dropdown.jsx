export default function Dropdown({ children, onClose }) {
  return (
    <div
      className="absolute right-0 mt-2 w-44 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow"
      onMouseLeave={onClose}
    >
      {children}
    </div>
  );
}
