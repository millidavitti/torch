import { useRouter } from "next/router";
import React from "react";

export default function CardRoute({ children, id }) {
	const router = useRouter();
	return <a onClick={() => router.push(`/post/${id}`)}>{children}</a>;
}
