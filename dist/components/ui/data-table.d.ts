import React from 'react';
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
export declare function DataTable<T extends Record<string, any>>({ data, columns, className, size, selectable, onSelectionChange, onRowClick, emptyMessage }: DataTableProps<T>): import("react/jsx-runtime").JSX.Element;
export declare const DataTablePresets: {
    small: {
        size: "sm";
        selectable: boolean;
    };
    medium: {
        size: "md";
        selectable: boolean;
    };
    large: {
        size: "lg";
        selectable: boolean;
    };
};
export {};
//# sourceMappingURL=data-table.d.ts.map