'use client';

import React, { useState } from 'react';
import { Checkbox } from './checkbox';
import { Badge } from './badge';

interface TableColumn<T> {
  key: keyof T;
  label: string;
  sortable?: boolean;
  width?: string;
  render?: (value: any, row: T, index: number) => React.ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  selectable?: boolean;
  onSelectionChange?: (selectedRows: T[]) => void;
  onRowClick?: (row: T, index: number) => void;
  emptyMessage?: string;
}

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  className = '',
  size = 'md',
  selectable = true,
  onSelectionChange,
  onRowClick,
  emptyMessage = 'No data available'
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: 'asc' | 'desc' } | null>(null);

  const sizeClasses = {
    sm: {
      table: 'text-xs sm:text-sm',
      header: 'px-2 sm:px-3 py-2 sm:py-3 whitespace-nowrap',
      cell: 'px-2 sm:px-3 py-2 sm:py-3 whitespace-nowrap',
      checkbox: 'w-3 h-3 sm:w-4 sm:h-4'
    },
    md: {
      table: 'text-sm sm:text-base',
      header: 'px-3 sm:px-4 py-3 sm:py-4 whitespace-nowrap',
      cell: 'px-3 sm:px-4 py-3 sm:py-4 whitespace-nowrap',
      checkbox: 'w-4 h-4 sm:w-5 sm:h-5'
    },
    lg: {
      table: 'text-base sm:text-lg',
      header: 'px-4 sm:px-5 py-4 sm:py-5 whitespace-nowrap',
      cell: 'px-4 sm:px-5 py-4 sm:py-5 whitespace-nowrap',
      checkbox: 'w-5 h-5 sm:w-6 sm:h-6'
    }
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const allIndices = new Set(data.map((_, index) => index));
      setSelectedRows(allIndices);
      onSelectionChange?.(data);
    } else {
      setSelectedRows(new Set());
      onSelectionChange?.([]);
    }
  };

  const handleSelectRow = (index: number, checked: boolean) => {
    const newSelectedRows = new Set(selectedRows);
    if (checked) {
      newSelectedRows.add(index);
    } else {
      newSelectedRows.delete(index);
    }
    setSelectedRows(newSelectedRows);
    
    const selectedData = data.filter((_, i) => newSelectedRows.has(i));
    onSelectionChange?.(selectedData);
  };

  const handleSort = (key: keyof T) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  const isAllSelected = selectedRows.size === data.length && data.length > 0;
  const isIndeterminate = selectedRows.size > 0 && selectedRows.size < data.length;

  if (data.length === 0) {
    return (
      <div className={`text-center py-8 text-muted-foreground ${className}`}>
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className={`w-full overflow-x-auto ${className}`}>
      <table className={`w-full ${sizeClasses[size].table}`}>
        <thead>
          <tr className="border-b border-border">
            {selectable && (
              <th className={`${sizeClasses[size].header} text-left`}>
                <Checkbox
                  checked={isAllSelected}
                  onChange={(checked) => handleSelectAll(checked)}
                  className={sizeClasses[size].checkbox}
                />
              </th>
            )}
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className={`
                  ${sizeClasses[size].header}
                  text-left font-semibold text-foreground
                  ${column.sortable ? 'cursor-pointer hover:text-foreground/80' : ''}
                `}
                onClick={() => column.sortable && handleSort(column.key)}
                style={{ width: column.width }}
              >
                <div className="flex items-center gap-2">
                  {column.label}
                  {column.sortable && (
                    <div className="flex flex-col">
                      <svg
                        className={`w-3 h-3 ${
                          sortConfig?.key === column.key && sortConfig.direction === 'asc'
                            ? 'text-foreground'
                            : 'text-muted-foreground'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                      <svg
                        className={`w-3 h-3 -mt-1 ${
                          sortConfig?.key === column.key && sortConfig.direction === 'desc'
                            ? 'text-foreground'
                            : 'text-muted-foreground'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => (
            <tr
              key={index}
              className={`
                border-b border-border/50
                ${onRowClick ? 'cursor-pointer hover:bg-muted/30' : ''}
                ${selectedRows.has(index) ? 'bg-foreground/5' : ''}
                transition-colors duration-150
              `}
              onClick={() => onRowClick?.(row, index)}
            >
              {selectable && (
                <td className={sizeClasses[size].cell}>
                  <Checkbox
                    checked={selectedRows.has(index)}
                    onChange={(checked) => handleSelectRow(index, checked)}
                    className={sizeClasses[size].checkbox}
                  />
                </td>
              )}
              {columns.map((column) => (
                <td
                  key={String(column.key)}
                  className={`${sizeClasses[size].cell} text-foreground/80`}
                >
                  {column.render
                    ? column.render(row[column.key], row, index)
                    : String(row[column.key] || '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Preset configurations
export const DataTablePresets = {
  small: {
    size: 'sm' as const,
    selectable: true
  },
  medium: {
    size: 'md' as const,
    selectable: true
  },
  large: {
    size: 'lg' as const,
    selectable: true
  }
};
