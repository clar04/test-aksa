export default function Dropdown({ children, onClose }) {
  return (
    <div
      onMouseLeave={onClose}
      className="absolute right-0 mt-2 w-56 z-50 rounded-xl shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-md divide-y divide-gray-200 dark:divide-gray-600"
    >
      {children}
    </div>
  );
}
