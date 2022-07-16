import React from "react";

export default function Query({ loading, error, children }) {
	if (error) {
		return (
			<p style={{ margin: "0 auto" }}>ERROR: Failed to get menu data!!</p>
		);
	}
	if (loading) {
		return <p style={{ margin: "0 auto" }}>Loading...</p>;
	}
	return children;
}
