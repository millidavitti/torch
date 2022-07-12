import React, { forwardRef } from "react";

export default forwardRef(function Author(props, ref) {
	const { cssWrap, cssAvatar, cssName, name, src, show } = props;
	return (
		<div className={cssWrap} style={show} ref={ref}>
			<img src={src} alt={name} className={cssAvatar} />
			<h3 className={cssName} style={show}>
				{name}
			</h3>
		</div>
	);
});
