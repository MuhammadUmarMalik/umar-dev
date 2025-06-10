/**
 * Responsive breakpoints and utilities for consistent design across all components
 * Based on Tailwind CSS v4 breakpoint system
 */

// Breakpoint definitions
export const breakpoints = {
  xs: '475px',    // Extra small devices (small phones)
  sm: '640px',    // Small devices (phones)
  md: '768px',    // Medium devices (tablets)
  lg: '1024px',   // Large devices (laptops)
  xl: '1280px',   // Extra large devices (desktops)
  '2xl': '1536px' // 2X Extra large devices (large desktops)
} as const;

// Common responsive spacing patterns
export const responsiveSpacing = {
  section: {
    padding: 'py-12 sm:py-16 md:py-20',
    margin: 'my-8 sm:my-12 md:my-16',
    gap: 'gap-4 sm:gap-6 md:gap-8'
  },
  container: {
    padding: 'px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12',
    maxWidth: 'max-w-7xl'
  },
  grid: {
    cols1: 'grid-cols-1',
    cols2: 'grid-cols-1 sm:grid-cols-2',
    cols3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    cols4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    gap: 'gap-4 sm:gap-6 md:gap-8'
  }
} as const;

// Typography responsive patterns
export const responsiveTypography = {
  hero: {
    title: 'text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl',
    subtitle: 'text-base sm:text-lg md:text-xl lg:text-2xl',
    description: 'text-sm sm:text-base md:text-lg lg:text-xl'
  },
  section: {
    title: 'text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
    subtitle: 'text-lg sm:text-xl md:text-2xl',
    description: 'text-sm sm:text-base md:text-lg'
  },
  card: {
    title: 'text-lg sm:text-xl md:text-2xl',
    subtitle: 'text-base sm:text-lg',
    description: 'text-sm sm:text-base'
  },
  button: {
    text: 'text-xs sm:text-sm md:text-base',
    padding: 'px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3'
  }
} as const;

// Component size patterns
export const responsiveSizes = {
  icon: {
    small: 'w-4 h-4 sm:w-5 sm:h-5',
    medium: 'w-5 h-5 sm:w-6 sm:h-6',
    large: 'w-6 h-6 sm:w-8 sm:h-8',
    xl: 'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12'
  },
  avatar: {
    small: 'w-8 h-8 sm:w-10 sm:h-10',
    medium: 'w-10 h-10 sm:w-12 sm:h-12',
    large: 'w-12 h-12 sm:w-16 sm:h-16'
  },
  button: {
    small: 'h-8 sm:h-9',
    medium: 'h-9 sm:h-10 md:h-11',
    large: 'h-10 sm:h-11 md:h-12'
  }
} as const;

// Badge and status responsive patterns
export const responsiveBadge = {
  padding: 'px-2 sm:px-3 py-1 sm:py-1.5',
  text: 'text-xs sm:text-sm',
  gap: 'gap-1 sm:gap-1.5',
  iconSize: 'w-1.5 h-1.5 sm:w-2 sm:h-2'
} as const;

// Responsive border radius patterns
export const responsiveBorderRadius = {
  small: 'rounded-lg sm:rounded-xl',
  medium: 'rounded-xl sm:rounded-2xl',
  large: 'rounded-2xl sm:rounded-3xl'
} as const;

// Responsive shadow patterns
export const responsiveShadows = {
  small: 'shadow-sm sm:shadow-md',
  medium: 'shadow-md sm:shadow-lg',
  large: 'shadow-lg sm:shadow-xl'
} as const;

// Mobile-first utilities
export const mobileFirst = {
  hidden: {
    mobile: 'hidden sm:block',
    tablet: 'hidden md:block',
    desktop: 'hidden lg:block'
  },
  visible: {
    mobileOnly: 'block sm:hidden',
    tabletOnly: 'hidden sm:block lg:hidden',
    desktopOnly: 'hidden lg:block'
  }
} as const;

// Device-specific content utilities
export const deviceContent = {
  mobile: {
    maxLength: 50,
    truncate: 'truncate max-w-[150px] sm:max-w-none'
  },
  tablet: {
    maxLength: 100,
    truncate: 'truncate max-w-[250px] lg:max-w-none'
  }
} as const;

// Responsive layout utilities
export const responsiveLayout = {
  flex: {
    mobileColumn: 'flex flex-col sm:flex-row',
    center: 'flex items-center justify-center',
    between: 'flex items-center justify-between',
    responsive: 'flex flex-col md:flex-row items-center md:items-start text-center md:text-left'
  },
  stack: {
    mobile: 'space-y-3 sm:space-y-4',
    tablet: 'space-y-4 md:space-y-6',
    desktop: 'space-y-6 lg:space-y-8'
  }
} as const;

// Helper function to get responsive classes
export const getResponsiveClasses = (category: keyof typeof responsiveSpacing, type: string) => {
  const categoryObj = responsiveSpacing[category] as Record<string, string>;
  return categoryObj[type] || '';
};

// Helper function for conditional responsive content
export const getResponsiveContent = (mobileContent: string, desktopContent: string) => ({
  mobile: mobileContent,
  desktop: desktopContent
});

// Responsive animation delays
export const responsiveAnimations = {
  stagger: {
    mobile: 0.1,
    desktop: 0.05
  },
  duration: {
    mobile: 0.3,
    desktop: 0.6
  }
} as const;

const responsiveUtils = {
  breakpoints,
  responsiveSpacing,
  responsiveTypography,
  responsiveSizes,
  responsiveBadge,
  responsiveBorderRadius,
  responsiveShadows,
  mobileFirst,
  deviceContent,
  responsiveLayout,
  responsiveAnimations,
  getResponsiveClasses,
  getResponsiveContent
};

export default responsiveUtils; 