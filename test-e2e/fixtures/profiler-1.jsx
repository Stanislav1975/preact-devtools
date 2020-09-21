import { h, render } from "preact";
import { useState } from "preact/hooks";
import "preact/devtools";

function Display(props) {
	return <div data-testid="result">Counter: {props.value}</div>;
}

function Counter() {
	const [v, set] = useState(0);

	return (
		<div style="padding: 2rem;">
			<Display value={v} />
			<button onClick={() => set(v + 1)}>Increment</button>
		</div>
	);
}

function Foo() {
	return <div>foo</div>;
}

function App() {
	return (
		<>
			<Counter />
			<Foo />
		</>
	);
}

render(<App />, document.getElementById("app"));