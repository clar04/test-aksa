import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';

import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import Modal from '../components/Modal';
import TableRow from '../components/TableRow';
import { useTheme } from '../contexts/ThemeContext';

export default function Employees() {
  const [employees, setEmployees] = useLocalStorage('employees', []);
  const [modalOpen, setModalOpen] = useState(false);
  const [editTarget, setEditTarget] = useState(null);
  const { theme } = useTheme();

  /* query string */
  const [searchParams, setSearchParams] = useSearchParams();
  const pageQS = parseInt(searchParams.get('page') || '1', 10);
  const keywordQS = searchParams.get('q') || '';

  const [keyword, setKeyword] = useState(keywordQS);
  const [page, setPage] = useState(pageQS);

  /* filter & pagination */
  const filtered = useMemo(
    () =>
      employees.filter((e) =>
        e.name.toLowerCase().includes(keyword.toLowerCase())
      ),
    [employees, keyword]
  );
  const perPage = 5;
  const maxPage = Math.max(1, Math.ceil(filtered.length / perPage));
  const currentPage = Math.min(page, maxPage);
  const slice = filtered.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  /* sync query string */
  useEffect(() => {
    setSearchParams({ page: currentPage, q: keyword });
  }, [currentPage, keyword, setSearchParams]);

  /* CRUD handlers */
  const saveEmployee = (data) => {
    if (editTarget) {
      setEmployees((list) =>
        list.map((e) => (e.id === editTarget.id ? data : e))
      );
    } else {
      setEmployees((list) => [...list, { ...data, id: Date.now() }]);
    }
    setModalOpen(false);
    setEditTarget(null);
  };

  const deleteEmployee = (id) =>
    setEmployees((l) => l.filter((e) => e.id !== id));

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,var(--grad-from),var(--grad-to))] px-4 py-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header section */}
        <div className="mb-6">
          <h1 className={`${theme === 'light' ? 'text-gray-900' : 'text-white'} text-2xl font-bold mb-4`}>
            Employee Management
          </h1>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <SearchBar value={keyword} onChange={setKeyword} />
            <button
              onClick={() => setModalOpen(true)}
              className="btn-primary w-full sm:w-auto whitespace-nowrap"
            >
              + Add Employee
            </button>
          </div>
        </div>

        {/* Table section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Position
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
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
                    <td
                      colSpan="3"
                      className="px-6 py-8 text-center text-gray-500 dark:text-gray-400"
                    >
                      {keyword
                        ? 'No employees found matching your search.'
                        : 'No employees yet. Click "Add Employee" to get started.'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination section */}
        {filtered.length > 0 && (
          <div className="mt-6">
            <Pagination
              page={currentPage}
              max={maxPage}
              onPageChange={setPage}
            />
          </div>
        )}
      </div>

      {/* Modal */}
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
