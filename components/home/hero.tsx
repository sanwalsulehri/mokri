import React from 'react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'

const Hero = () => {
  return (
    <div className="py-20 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Badge bg={true} variant="secondary" className="px-2 py-1">
              <div className="w-1.5 h-1.5 bg-foreground rounded-full mr-1"></div>
              New Components: Field, Input Group, Item and more 
              <svg className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16m-7-7l7 7-7 7" />
              </svg>
            </Badge>
          </div>

          <h1 className="text-4xl lg:text-[48px] font-semibold text-foreground leading-tight tracking-[0px]">
            The flexible core your design system deserves.
          </h1>

          <p className="text-foreground/80 leading-relaxed">
            Build faster and design smarter — everything you need to create interfaces that feel refined, cohesive, and unmistakably yours.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button size="sm" className="">
              Get Started
            </Button>
            <Button bg={false} size="sm" className="">
              View Components
            </Button>
          </div>
        </div>

        {/* Right Column - Other Content */}
        <div className="flex items-center justify-center">
          <div className="w-full h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="w-16 h-16 bg-foreground/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <p className="text-sm">Component Preview</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero