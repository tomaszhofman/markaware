"use client";

import { useState } from "react";

export const ClientTest = ({ children }: { children: React.ReactNode }) => {
	const [state, setState] = useState(0);

	return (
		<div>
			<button onClick={() => setState((prev) => prev + 1)}> +++</button>
			<p>{state}</p>
			{state % 2 === 0 && children}
		</div>
	);
};
