import { memo } from 'react';

function SplashScreen() {
	return (
		<div id="splash-screen">
			<div className="logo">
				<img
					width="128"
					src="logo.png"
					alt="logo"
				/>
			</div>
			<div
				id="spinner"
			>
				<div className="bounce1" />
				<div className="bounce2" />
				<div className="bounce3" />
			</div>
		</div>
	);
}

export default memo(SplashScreen);
