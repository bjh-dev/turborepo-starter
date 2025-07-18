import { render, screen } from '@testing-library/react'
import { PeopleComponent } from './people.component'

describe('PeopleComponent', () => {
  it('renders heading and text', () => {
    const props = {
      heading: 'Test Heading',
      text: 'Test text content',
    }
    
    render(<PeopleComponent {...props} />)
    
    expect(screen.getByText('Test Heading')).toBeInTheDocument()
    expect(screen.getByText('Test text content')).toBeInTheDocument()
  })

  it('renders without text', () => {
    const props = {
      heading: 'Test Heading',
    }
    
    render(<PeopleComponent {...props} />)
    
    expect(screen.getByText('Test Heading')).toBeInTheDocument()
  })





  it('applies custom className', () => {
    const props = {
      heading: 'Test Heading',
      className: 'custom-class',
    }
    
    const { container } = render(<PeopleComponent {...props} />)
    
    expect(container.firstChild).toHaveClass('custom-class')
  })
}) 