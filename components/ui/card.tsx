import { HTMLAttributes, forwardRef } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'bordered'
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', variant = 'default', children, ...props }, ref) => {
    const baseStyles = 'rounded-xl transition-all duration-300 bg-card shadow-lg'

    const variantStyles = {
      default: '',
      elevated: 'shadow-xl hover:shadow-2xl',
      bordered: 'border border-foreground/10',
    }

    return (
      <div ref={ref} className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card
