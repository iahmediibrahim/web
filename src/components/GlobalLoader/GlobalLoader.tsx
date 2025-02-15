import ICONS from '@/Helpers/icons'

export function GlobalLoader() {
	return (
		<div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-white z-50">
			<div className="w-full flex items-center justify-center min-h-[20vh] relative  ">
				<img
					src={ICONS.mainLayoutFaceLogo}
					alt="Bin Icon"
					className="h-[60px] w-[60px] absolute"
				/>
				<img
					src={ICONS.spinner}
					alt="Spinner"
					className="animate-spin--customized duration-500 h-[200px] w-[200px] absolute"
					style={{ animationFillMode: 'forwards' }}
				/>
			</div>
		</div>
	)
}
