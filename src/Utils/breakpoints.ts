import { useMediaQuery } from 'react-responsive'

const breakpoints = {
	small: 576,
	large: 992,
}

export interface ResponsiveProps {
	isMedium?: boolean
	isSmall?: boolean
	isLarge?: boolean
}

type screenSize = 'small' | 'medium' | 'large'

export const useBreakPoints = (): screenSize => {
	const isLarge = useMediaQuery({ minWidth: breakpoints.large })
	const isSmall = useMediaQuery({ maxWidth: breakpoints.small })
	return isLarge ? 'large' : isSmall ? 'small' : 'medium'
}

export const useIsSmall = () => useBreakPoints() === 'small'
export const useIsMedium = () => useBreakPoints() === 'medium'
export const useIsLarge = () => useBreakPoints() === 'large'
