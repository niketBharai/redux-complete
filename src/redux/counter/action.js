import { INCREASE_VALUE, DECREASE_VALUE, RESET } from "./types";

export const increaseValue = () => {
	return {
		type: INCREASE_VALUE,
	};
};

export const decreaseValue = () => {
	return {
		type: DECREASE_VALUE,
	};
};

export const resetValue = () => {
	return {
		type: RESET,
	};
};
