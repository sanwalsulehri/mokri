'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { DropdownMenu } from './dropdown-menu';
export function Calendar({ selectedDate, onDateSelect, className = '', size = 'md', showToday = true, disabledDates = [] }) {
    const [currentDate, setCurrentDate] = useState(selectedDate || new Date());
    const sizeClasses = {
        sm: {
            container: 'w-full max-w-64 sm:max-w-72',
            header: 'text-xs sm:text-sm',
            dayLabel: 'text-[10px] sm:text-xs',
            day: 'w-6 h-6 sm:w-7 sm:h-7 text-[10px] sm:text-xs',
            navButton: 'w-5 h-5 sm:w-6 sm:h-6'
        },
        md: {
            container: 'w-full max-w-80 sm:max-w-96 md:max-w-80 lg:max-w-96',
            header: 'text-sm sm:text-base',
            dayLabel: 'text-xs sm:text-sm',
            day: 'w-8 h-8 sm:w-9 sm:h-9 text-xs sm:text-sm',
            navButton: 'w-6 h-6 sm:w-8 sm:h-8'
        },
        lg: {
            container: 'w-full max-w-96 sm:max-w-full md:max-w-96 lg:max-w-full',
            header: 'text-base sm:text-lg',
            dayLabel: 'text-sm sm:text-base',
            day: 'w-9 h-9 sm:w-10 sm:h-10 text-sm sm:text-base',
            navButton: 'w-8 h-8 sm:w-10 sm:h-10'
        }
    };
    const today = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const getDaysInMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };
    const getFirstDayOfMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };
    const navigateMonth = (direction) => {
        const newDate = new Date(currentDate);
        if (direction === 'prev') {
            newDate.setMonth(currentMonth - 1);
        }
        else {
            newDate.setMonth(currentMonth + 1);
        }
        setCurrentDate(newDate);
    };
    const isToday = (date) => {
        return date.toDateString() === today.toDateString();
    };
    const isSelected = (date) => {
        return selectedDate && date.toDateString() === selectedDate.toDateString();
    };
    const isDisabled = (date) => {
        return disabledDates.some(disabledDate => date.toDateString() === disabledDate.toDateString());
    };
    const handleDateClick = (day) => {
        const clickedDate = new Date(currentYear, currentMonth, day);
        if (!isDisabled(clickedDate)) {
            onDateSelect === null || onDateSelect === void 0 ? void 0 : onDateSelect(clickedDate);
        }
    };
    const renderCalendarDays = () => {
        const daysInMonth = getDaysInMonth(currentDate);
        const firstDay = getFirstDayOfMonth(currentDate);
        const days = [];
        // Previous month's trailing days
        const prevMonth = new Date(currentYear, currentMonth - 1);
        const daysInPrevMonth = getDaysInMonth(prevMonth);
        for (let i = firstDay - 1; i >= 0; i--) {
            const day = daysInPrevMonth - i;
            const date = new Date(currentYear, currentMonth - 1, day);
            days.push(_jsx("div", { className: `${sizeClasses[size].day} flex items-center justify-center text-foreground/30`, children: day }, `prev-${day}`));
        }
        // Current month's days
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(currentYear, currentMonth, day);
            const isCurrentDay = isToday(date);
            const isSelectedDay = isSelected(date);
            const isDisabledDay = isDisabled(date);
            days.push(_jsx("div", { className: `
            ${sizeClasses[size].day}
            flex items-center justify-center
            rounded-lg cursor-pointer transition-all duration-200
            font-medium relative
            ${isSelectedDay
                    ? 'bg-foreground text-background outline outline-border outline-offset-2 focus:outline-2 focus:outline-foreground/80'
                    : isCurrentDay && showToday
                        ? 'bg-secondary/50 text-secondary-foreground'
                        : 'text-foreground hover:bg-muted focus:outline focus:outline-2 focus:outline-foreground/60'}
            ${isDisabledDay
                    ? 'opacity-30 cursor-not-allowed pointer-events-none'
                    : ''}
          `, onClick: () => handleDateClick(day), children: day }, day));
        }
        // Next month's leading days
        const totalCells = 42; // 6 weeks * 7 days
        const remainingCells = totalCells - days.length;
        for (let day = 1; day <= remainingCells; day++) {
            days.push(_jsx("div", { className: `${sizeClasses[size].day} flex items-center justify-center text-foreground/30`, children: day }, `next-${day}`));
        }
        return days;
    };
    return (_jsxs("div", { className: `${sizeClasses[size].container} bg-background border border-border rounded-xl p-4 shadow-lg ${className}`, children: [_jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsx("button", { onClick: () => navigateMonth('prev'), className: `
            ${sizeClasses[size].navButton}
            flex items-center justify-center
            rounded-lg bg-transparent text-foreground
            hover:bg-muted transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-foreground/20
          `, children: _jsx("svg", { className: "w-3 h-3 sm:w-4 sm:h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) }) }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(DropdownMenu, { trigger: _jsxs("button", { className: "flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm  text-foreground bg-background border border-border hover:bg-muted rounded-lg transition-colors duration-200", children: [_jsx("span", { className: "hidden sm:inline", children: monthNames[currentMonth] }), _jsx("span", { className: "sm:hidden text-[10px]", children: monthNames[currentMonth].substring(0, 3) }), _jsx("svg", { className: "w-3 h-3 sm:w-4 sm:h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })] }), options: monthNames.map((month, index) => ({
                                    label: month,
                                    value: index.toString(),
                                    onClick: () => {
                                        const newDate = new Date(currentDate);
                                        newDate.setMonth(index);
                                        setCurrentDate(newDate);
                                    }
                                })), align: "center" }), _jsx(DropdownMenu, { trigger: _jsxs("button", { className: "flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm  text-foreground bg-background border border-border hover:bg-muted rounded-lg transition-colors duration-200", children: [currentYear, _jsx("svg", { className: "w-3 h-3 sm:w-4 sm:h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })] }), options: Array.from({ length: 30 }, (_, i) => {
                                    const year = 2000 + i;
                                    return {
                                        label: year.toString(),
                                        value: year.toString(),
                                        onClick: () => {
                                            const newDate = new Date(currentDate);
                                            newDate.setFullYear(year);
                                            setCurrentDate(newDate);
                                        }
                                    };
                                }), align: "center" })] }), _jsx("button", { onClick: () => navigateMonth('next'), className: `
            ${sizeClasses[size].navButton}
            flex items-center justify-center
            rounded-lg bg-transparent text-foreground
            hover:bg-muted transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-foreground/20
          `, children: _jsx("svg", { className: "w-3 h-3 sm:w-4 sm:h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) }) })] }), _jsx("div", { className: "grid grid-cols-7 gap-1 mb-2", children: dayNames.map((day) => (_jsx("div", { className: `${sizeClasses[size].dayLabel} text-center font-medium text-foreground/60`, children: day }, day))) }), _jsx("div", { className: "grid grid-cols-7 gap-1", children: renderCalendarDays() }), showToday && (_jsx("div", { className: "mt-4 pt-3 border-t border-border", children: _jsx("button", { onClick: () => {
                        const todayDate = new Date();
                        setCurrentDate(todayDate);
                        onDateSelect === null || onDateSelect === void 0 ? void 0 : onDateSelect(todayDate);
                    }, className: "w-full py-2 px-3 text-xs sm:text-sm font-medium text-foreground/70 hover:text-foreground bg-transparent hover:bg-muted rounded-lg transition-colors duration-200", children: "Go to Today" }) }))] }));
}
export function CalendarRange({ startDate, endDate, onDateRangeSelect, className = '', size = 'md' }) {
    const [currentDate, setCurrentDate] = useState(startDate || new Date());
    const [selectedStart, setSelectedStart] = useState(startDate || null);
    const [selectedEnd, setSelectedEnd] = useState(endDate || null);
    const [isSelecting, setIsSelecting] = useState(false);
    const handleDateClick = (date) => {
        if (!selectedStart || (selectedStart && selectedEnd)) {
            // Start new selection
            setSelectedStart(date);
            setSelectedEnd(null);
            setIsSelecting(true);
            onDateRangeSelect === null || onDateRangeSelect === void 0 ? void 0 : onDateRangeSelect(date, null);
        }
        else {
            // Complete selection
            if (date < selectedStart) {
                setSelectedEnd(selectedStart);
                setSelectedStart(date);
            }
            else {
                setSelectedEnd(date);
            }
            setIsSelecting(false);
            onDateRangeSelect === null || onDateRangeSelect === void 0 ? void 0 : onDateRangeSelect(selectedStart, date);
        }
    };
    const isInRange = (date) => {
        if (!selectedStart)
            return false;
        if (!selectedEnd)
            return date >= selectedStart;
        return date >= selectedStart && date <= selectedEnd;
    };
    const isRangeStart = (date) => {
        return selectedStart && date.toDateString() === selectedStart.toDateString();
    };
    const isRangeEnd = (date) => {
        return selectedEnd && date.toDateString() === selectedEnd.toDateString();
    };
    return (_jsx(Calendar, { selectedDate: selectedStart || undefined, onDateSelect: handleDateClick, className: className, size: size, showToday: true }));
}
