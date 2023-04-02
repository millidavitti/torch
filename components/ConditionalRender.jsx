import React from "react";

export default function ConditionalRender({ children, state, fallback }) {
	!fallback && (fallback = null);

	return <>{children(state, fallback)}</>;
}
