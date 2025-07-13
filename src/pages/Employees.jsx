import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import Modal from '../components/Modal';
import TableRow from '../components/TableRow';

export default function Employees() {
  const [employees, setEmployees] = useLocalStorage('employees', []);
  const [modalOpen, setModalOpen] = useState(false);
  const [editTarget, setEditTarget] = useState(null);

  /* query string */
  const [searchParams, setSearchParams] = useSearchParams();
  const pageQS = parseInt(searchParams.get('page') || '1', 10);
  const keywordQS = searchParams.get('q') || '';

  const [keyword, setKeyword] = useState(keywordQS);
  const [page, setPage] = useState(pageQS);

  /* filter & pagination */
  const filtered = useMemo(
    () => employees.filter((e) => e.name.toLowerCase().includes(keyword.toLowerCase())),
    [employees, keyword]
  );
  const perPage = 5;
  const maxPage = Math.max(1, Math.ceil(filtered.length / perPage));
  const currentPage = Math.min(page, maxPage);
  const slice = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

  /* sync query string */
  useEffect(() => {
    setSearchParams({ page: currentPage, q: keyword });
  }, [currentPage, keyword, setSearchParams]);

  /* CRUD handlers */
  const saveEmployee = (data) => {
    if (editTarget) {
      setEmployees((list) => list.map((e) => (e.id === editTarget.id ? data : e)));
    } else {
      setEmployees((list) => [...list, { ...data, id: Date.now() }]);
    }
    setModalOpen(false);
    setEditTarget(null);
  };
  const deleteEmployee = (id) => setEmployees((l) => l.filter((e) => e.id !== id));

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4"> {/* Tambahkan flex-col untuk mobile, gap-4 */}
  <SearchBar value={keyword} onChange={setKeyword} />
  <button onClick={() => setModalOpen(true)} className="btn-primary w-full sm:w-auto"> {/* w-full untuk mobile, w-auto untuk desktop */}
    + Add
  </button>
</div>

      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Position</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {slice.map((emp) => (
              <TableRow
                key={emp.id}
                data={emp}
                onEdit={() => {
                  setEditTarget(emp);
                  setModalOpen(true);
                }}
                onDelete={() => deleteEmployee(emp.id)}
              />
            ))}
            {slice.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center py-4">
                  No data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Pagination page={currentPage} max={maxPage} onPageChange={setPage} />

      {modalOpen && (
        <Modal
          initial={editTarget}
          onClose={() => {
            setModalOpen(false);
            setEditTarget(null);
          }}
          onSave={saveEmployee}
        />
      )}
    </div>
  );
}
