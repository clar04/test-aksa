import { useState, useEffect } from 'react';

export default function Modal({ initial, onClose, onSave }) {
  const [form, setForm] = useState({ name: '', position: '' });

  useEffect(() => {
    if (initial) setForm({ name: initial.name, position: initial.position });
  }, [initial]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.position) {
      onSave({ ...form, id: initial?.id || Date.now() });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded shadow w-11/12 max-w-md">
        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
  {initial ? 'Edit' : 'Add'} Employee
</h2>
        <form onSubmit={handleSubmit}>
<input
  className="w-full mb-3 px-3 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
  placeholder="Full name"
  value={form.name}
  onChange={(e) => setForm({ ...form, name: e.target.value })}
  required
/>
<input
  className="w-full mb-3 px-3 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
  placeholder="Position"
  value={form.position}
  onChange={(e) => setForm({ ...form, position: e.target.value })}
  required
/>

          <div className="flex flex-col sm:flex-row justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded"
            >
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
