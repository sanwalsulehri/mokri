'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Input } from './input';
import { TextArea } from './textarea';
import { DropDown } from './dropdown';
import { Checkbox } from './checkbox';
import { Button } from './button';
export function PaymentForm({ onSubmit, className = "" }) {
    const [formData, setFormData] = useState({
        cardName: '',
        cardNumber: '',
        cvv: '',
        month: '',
        year: '',
        sameAsShipping: true,
        comments: ''
    });
    const handleInputChange = (field, value) => {
        setFormData(prev => (Object.assign(Object.assign({}, prev), { [field]: value })));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit === null || onSubmit === void 0 ? void 0 : onSubmit(formData);
    };
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 10 }, (_, i) => currentYear + i);
    return (_jsx("div", { className: `max-w-md mx-auto ${className}`, children: _jsxs("div", { className: "bg-background rounded-xl border border-border p-6", children: [_jsx("h2", { className: "text-2xl font-bold text-foreground mb-2", children: "Payment Method" }), _jsx("p", { className: "text-sm text-foreground/70 mb-6", children: "All transactions are secure and encrypted" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [_jsx(Input, { label: "Name on Card", isLabel: true, placeholder: "John Doe", value: formData.cardName, onChange: (e) => handleInputChange('cardName', e.target.value) }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx(Input, { label: "Card Number", isLabel: true, placeholder: "1234", value: formData.cardNumber, onChange: (e) => handleInputChange('cardNumber', e.target.value) }), _jsx("p", { className: "text-xs text-foreground/60 mt-1", children: "Enter your 16-digit number." })] }), _jsx(Input, { label: "CVV", isLabel: true, placeholder: "123", value: formData.cvv, onChange: (e) => handleInputChange('cvv', e.target.value) })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsx(DropDown, { label: "Month", placeholder: "MM", value: formData.month, onChange: (value) => handleInputChange('month', value), options: months.map(month => ({
                                        value: month.toString().padStart(2, '0'),
                                        label: month.toString().padStart(2, '0')
                                    })) }), _jsx(DropDown, { label: "Year", placeholder: "YYYY", value: formData.year, onChange: (value) => handleInputChange('year', value), options: years.map(year => ({
                                        value: year.toString(),
                                        label: year.toString()
                                    })) })] }), _jsxs("div", { className: "border-t border-border w-full pt-5 mt-5", children: [_jsx("h3", { className: "text-lg font-semibold text-foreground mb-2", children: "Billing Address" }), _jsx("p", { className: "text-sm text-foreground/70 mb-4", children: "The billing address associated with your payment method" }), _jsx(Checkbox, { checked: formData.sameAsShipping, onChange: (checked) => handleInputChange('sameAsShipping', checked), label: "Same as shipping address", size: "md" })] }), _jsxs("div", { className: "border-t border-border pt-5 mt-5", children: [_jsx("h3", { className: "text-lg font-semibold text-foreground mb-2", children: "Comments" }), _jsx(TextArea, { placeholder: "Add any additional comments", value: formData.comments, onChange: (e) => handleInputChange('comments', e.target.value), rows: 3 })] }), _jsxs("div", { className: "flex justify-end gap-3 pt-6", children: [_jsx(Button, { outline: true, children: "Cancel" }), _jsx(Button, { type: "submit", children: "Submit" })] })] })] }) }));
}
