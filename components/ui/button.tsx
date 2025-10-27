import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

/**
 * Reusable Button component with consistent styling
 *
 * @example
 * <Button variant="primary" size="md">Click me</Button>
 * <Button variant="outline" onClick={handleClick}>Cancel</Button>
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles =
      'font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const variantStyles = {
      primary: 'bg-primary text-white hover:bg-opacity-90 dark:hover:bg-opacity-90 shadow-lg hover:shadow-xl hover:scale-105',
      secondary: 'bg-secondary text-foreground hover:bg-muted',
      outline: 'border-2 border-foreground/20 text-foreground hover:border-primary hover:text-primary hover:bg-primary/5',
    }

    const sizeStyles = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-8 py-3 text-base',
      lg: 'px-10 py-4 text-lg',
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
