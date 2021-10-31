import { INCREASE_VALUE, DECREASE_VALUE, RESET } from "./types";

const defaultCounterReducer = {
	count: 0,
};

const counterReducer = (state = defaultCounterReducer, action) => {
	const { type } = action;
	switch (type) {
		case INCREASE_VALUE: {
			return {
				count: state.count + 1,
			};
		}

		case DECREASE_VALUE: {
			return {
				count: state.count - 1,
			};
		}

		case RESET: {
			return {
				count: (state.count = 0),
			};
		}

		default: {
			return state;
		}
	}
};

export default counterReducer;
