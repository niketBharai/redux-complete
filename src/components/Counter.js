import React from "react";
import { connect } from "react-redux";
import * as counterAction from "../redux/counter/action";

const Counter = ({ countVal, increment, decrement, reset }) => {
	return (
		<div>
			<h1>Counter</h1>
			<h2>{countVal}</h2>
			<button onClick={() => increment()}>Increment</button>
			<button onClick={() => decrement()}>Decrement</button>
			<button onClick={() => reset()}>Reset</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		countVal: state.counters.count,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => dispatch(counterAction.increaseValue()),
		decrement: () => dispatch(counterAction.decreaseValue()),
		reset: () => dispatch(counterAction.resetValue()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
