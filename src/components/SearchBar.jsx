export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="input w-full sm:w-64"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
