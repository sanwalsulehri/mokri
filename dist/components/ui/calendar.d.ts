interface CalendarProps {
    selectedDate?: Date;
    onDateSelect?: (date: Date) => void;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
    showToday?: boolean;
    disabledDates?: Date[];
}
export declare function Calendar({ selectedDate, onDateSelect, className, size, showToday, disabledDates }: CalendarProps): import("react/jsx-runtime").JSX.Element;
interface CalendarRangeProps {
    startDate?: Date;
    endDate?: Date;
    onDateRangeSelect?: (startDate: Date | null, endDate: Date | null) => void;
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}
export declare function CalendarRange({ startDate, endDate, onDateRangeSelect, className, size }: CalendarRangeProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=calendar.d.ts.map