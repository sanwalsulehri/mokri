'use client';

import React, { useState } from 'react';
import { Input } from './input';
import { TextArea } from './textarea';
import { DropDown } from './dropdown';
import { Checkbox } from './checkbox';
import { Button } from './button';

interface PaymentFormProps {
  onSubmit?: (data: any) => void;
  className?: string;
}

export function PaymentForm({ 
  onSubmit, 
  className = ""
}: PaymentFormProps) {
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    cvv: '',
    month: '',
    year: '',
    sameAsShipping: true,
    comments: ''
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i);

  return (
    <div className={`max-w-md mx-auto ${className}`}>
      <div className="bg-background rounded-xl border border-border p-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">Payment Method</h2>
          <p className="text-sm text-foreground/70 mb-6">All transactions are secure and encrypted</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name on Card */}
            <Input
              label="Name on Card"
              isLabel={true}
              placeholder="John Doe"
              value={formData.cardName}
              onChange={(e) => handleInputChange('cardName', e.target.value)}
            />

            {/* Card Number and CVV */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input
                  label="Card Number"
                  isLabel={true}
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                />
                <p className="text-xs text-foreground/60 mt-1">Enter your 16-digit number.</p>
              </div>
              
              <Input
                label="CVV"
                isLabel={true}
                placeholder="123"
                value={formData.cvv}
                onChange={(e) => handleInputChange('cvv', e.target.value)}
              />
            </div>

            {/* Month and Year */}
            <div className="grid grid-cols-2 gap-4">
              <DropDown
                label="Month"
                placeholder="MM"
                value={formData.month}
                onChange={(value) => handleInputChange('month', value)}
                options={months.map(month => ({
                  value: month.toString().padStart(2, '0'),
                  label: month.toString().padStart(2, '0')
                }))}
              />
              
              <DropDown
                label="Year"
                placeholder="YYYY"
                value={formData.year}
                onChange={(value) => handleInputChange('year', value)}
                options={years.map(year => ({
                  value: year.toString(),
                  label: year.toString()
                }))}
              />
            </div>

            {/* Billing Address Section */}
            <div className="border-t border-border w-full pt-5 mt-5">
              <h3 className="text-lg font-semibold text-foreground mb-2">Billing Address</h3>
              <p className="text-sm text-foreground/70 mb-4">
                The billing address associated with your payment method
              </p>
              
              <Checkbox
                checked={formData.sameAsShipping}
                onChange={(checked) => handleInputChange('sameAsShipping', checked)}
                label="Same as shipping address"
                size="md"
              />
            </div>

            {/* Comments Section */}
            <div className="border-t border-border pt-5 mt-5">
              <h3 className="text-lg font-semibold text-foreground mb-2">Comments</h3>
              <TextArea
                placeholder="Add any additional comments"
                value={formData.comments}
                onChange={(e) => handleInputChange('comments', e.target.value)}
                rows={3}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-6">
              <Button
                type="button"
                bg={false}
              >
                Cancel
              </Button>
              <Button type="submit">
                Submit
              </Button>
            </div>
          </form>
      </div>
    </div>
  );
}

