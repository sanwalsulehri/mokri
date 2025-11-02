'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Checkbox } from './checkbox';
export function DataTable({ data, columns, className = '', size = 'md', selectable = true, onSelectionChange, onRowClick, emptyMessage = 'No data available' }) {
    const [selectedRows, setSelectedRows] = useState(new Set());
    const [sortConfig, setSortConfig] = useState(null);
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
    const handleSelectAll = (checked) => {
        if (checked) {
            const allIndices = new Set(data.map((_, index) => index));
            setSelectedRows(allIndices);
            onSelectionChange === null || onSelectionChange === void 0 ? void 0 : onSelectionChange(data);
        }
        else {
            setSelectedRows(new Set());
            onSelectionChange === null || onSelectionChange === void 0 ? void 0 : onSelectionChange([]);
        }
    };
    const handleSelectRow = (index, checked) => {
        const newSelectedRows = new Set(selectedRows);
        if (checked) {
            newSelectedRows.add(index);
        }
        else {
            newSelectedRows.delete(index);
        }
        setSelectedRows(newSelectedRows);
        const selectedData = data.filter((_, i) => newSelectedRows.has(i));
        onSelectionChange === null || onSelectionChange === void 0 ? void 0 : onSelectionChange(selectedData);
    };
    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };
    const sortedData = React.useMemo(() => {
        if (!sortConfig)
            return data;
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
        return (_jsx("div", { className: `text-center py-8 text-muted-foreground ${className}`, children: emptyMessage }));
    }
    return (_jsx("div", { className: `w-full overflow-x-auto ${className}`, children: _jsxs("table", { className: `w-full ${sizeClasses[size].table}`, children: [_jsx("thead", { children: _jsxs("tr", { className: "border-b border-border", children: [selectable && (_jsx("th", { className: `${sizeClasses[size].header} text-left`, children: _jsx(Checkbox, { checked: isAllSelected, onChange: (checked) => handleSelectAll(checked), className: sizeClasses[size].checkbox }) })), columns.map((column) => (_jsx("th", { className: `
                  ${sizeClasses[size].header}
                  text-left font-semibold text-foreground
                  ${column.sortable ? 'cursor-pointer hover:text-foreground/80' : ''}
                `, onClick: () => column.sortable && handleSort(column.key), style: { width: column.width }, children: _jsxs("div", { className: "flex items-center gap-2", children: [column.label, column.sortable && (_jsxs("div", { className: "flex flex-col", children: [_jsx("svg", { className: `w-3 h-3 ${(sortConfig === null || sortConfig === void 0 ? void 0 : sortConfig.key) === column.key && sortConfig.direction === 'asc'
                                                        ? 'text-foreground'
                                                        : 'text-muted-foreground'}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 15l7-7 7 7" }) }), _jsx("svg", { className: `w-3 h-3 -mt-1 ${(sortConfig === null || sortConfig === void 0 ? void 0 : sortConfig.key) === column.key && sortConfig.direction === 'desc'
                                                        ? 'text-foreground'
                                                        : 'text-muted-foreground'}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })] }))] }) }, String(column.key))))] }) }), _jsx("tbody", { children: sortedData.map((row, index) => (_jsxs("tr", { className: `
                border-b border-border/50
                ${onRowClick ? 'cursor-pointer hover:bg-muted/30' : ''}
                ${selectedRows.has(index) ? 'bg-foreground/5' : ''}
                transition-colors duration-150
              `, onClick: () => onRowClick === null || onRowClick === void 0 ? void 0 : onRowClick(row, index), children: [selectable && (_jsx("td", { className: sizeClasses[size].cell, children: _jsx(Checkbox, { checked: selectedRows.has(index), onChange: (checked) => handleSelectRow(index, checked), className: sizeClasses[size].checkbox }) })), columns.map((column) => (_jsx("td", { className: `${sizeClasses[size].cell} text-foreground/80`, children: column.render
                                    ? column.render(row[column.key], row, index)
                                    : String(row[column.key] || '') }, String(column.key))))] }, index))) })] }) }));
}
// Preset configurations
export const DataTablePresets = {
    small: {
        size: 'sm',
        selectable: true
    },
    medium: {
        size: 'md',
        selectable: true
    },
    large: {
        size: 'lg',
        selectable: true
    }
};
