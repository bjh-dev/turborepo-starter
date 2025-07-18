import { cn } from '@repo/ui/utils'
import type { PeopleComponentProps } from './people.types'

export function PeopleComponent({ 
  heading, 
  text,
  className 
}: PeopleComponentProps) {
  return (
    <section className={cn('py-16', className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">{heading}</h2>
        {text && (
          <p className="text-lg text-muted-foreground">{text}</p>
        )}




      </div>
    </section>
  )
} 