export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="input w-64"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
