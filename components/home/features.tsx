'use client';

import React from 'react';
import { MagicCard } from '../ui/magic-card';
import { Badge } from '../ui/badge';
import Container from '../ui/container';

export function Features() {
  const features = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      title: "Form Components",
      description: "All the form stuff you need - inputs, buttons, checkboxes, radio buttons, switches. Everything looks consistent and works great.",
      isPro: false
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Layout Components",
      description: "Cards, containers, modals, drawers - basically everything to structure your app and make it look organized.",
      isPro: false
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
        </svg>
      ),
      title: "Navigation Components",
      description: "Breadcrumbs, pagination, tabs, dropdowns - all the navigation stuff to help users move around your app easily.",
      isPro: false
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Data Display",
      description: "Avatars, badges, tables, calendars, progress bars - perfect for showing user info and data in a clean way.",
      isPro: false
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      title: "Interactive Elements",
      description: "Tooltips, accordions, collapsibles, carousels, sliders - all the fun interactive stuff to keep users engaged.",
      isPro: false
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Feedback Components",
      description: "Toasts, alerts, banners, loaders, skeleton screens - everything to give users feedback and show loading states.",
      isPro: false
    }
  ];

  return (
    <section className="py-16 bg-background">
      <Container size="2xl" padding="lg">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Badge variant="secondary">Features</Badge>
          </div>
          
          <h2 className="text-4xl font-bold text-foreground mb-4">
          What Makes It Awesome
          </h2>
          
          <p className="text-lg text-foreground/70 max-w-md mx-auto">
          Modern, responsive, and customizable — because great design should be effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <MagicCard 
            isMagic
              key={index} 
              className="transition-shadow duration-200"
            //   shadow={false}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-border bg-muted flex items-center justify-center text-foreground">
                  {feature.icon}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    {feature.isPro && (
                      <Badge variant="secondary" className="text-xs">
                        <svg className="w-2 h-2 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        Pro
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </MagicCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
