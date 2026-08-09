// src/composables/useButtonStyles.js
export function useButtonStyles() {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none group'

  const variantClasses = {
    primary:
      'bg-[var(--primary-button)] hover:bg-[var(--primary-hover)] text-white shadow-xs rounded-2xl',
    outline:
      'bg-[var(--bg-color)] hover:bg-[var(--text-color)]/5 text-[var(--text-color)] border border-[var(--border-subtle)] rounded-2xl',
    ghost:
      'bg-transparent hover:bg-[var(--text-color)]/5 text-[var(--text-color)] rounded-xl'
  }

  const sizeClasses = {
    sm: 'text-xs px-4 py-2.5',
    md: 'text-sm sm:text-base px-6 py-3.5',
    lg: 'text-base sm:text-lg px-8 py-4'
  }

  const getButtonClass = (variant = 'primary', size = 'md') => {
    const variantStyle = variantClasses[variant] || variantClasses.primary
    const sizeStyle = sizeClasses[size] || sizeClasses.md
    return `${baseClasses} ${variantStyle} ${sizeStyle}`
  }

  return { getButtonClass }
}