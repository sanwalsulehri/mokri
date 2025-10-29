import React from 'react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import ComponentSet from "../component-set"

const Hero = () => {
  return (
    <div className="py-20 min-h-screen">
      <div className="max-w-5xl w-full mx-auto text-center mb-16">
        <div className="">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Badge bg={true} variant="secondary" className="px-2 py-1">
              <div className="w-1.5 h-1.5 bg-foreground rounded-full mr-1"></div>
              New Components: Field, Input Group, Item and more 
              <svg className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16m-7-7l7 7-7 7" />
              </svg>
            </Badge>
          </div>

          <h1 className="text-4xl pt-5 lg:text-[48px] xl:text-[56px] font-medium text-foreground leading-tight tracking-[0px]">
          Designed for clarity, performance, and total customization.
          </h1>

          <p className="text-foreground/80 pt-4 leading-relaxed max-w-xl  mx-auto">
            Build faster and design smarter — everything you need to create interfaces that feel refined, cohesive, and unmistakably yours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center mt-8 gap-2">
            <Button size="md" className="">
              Get Started
            </Button>
            <Button bg={false} size="md" className="">
              View Components
            </Button>
          </div>
        </div>
      </div>
      <ComponentSet />
    </div>
  )
}

export default Hero