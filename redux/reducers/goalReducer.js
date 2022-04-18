const initialState = {
	goals: []
};
const goalReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_GOAL":
			return { ...state.goals, goals: [...state.goals, action.payload] };		
		case "ALL_GOALS":
			return { goals: action.payload };

		default:
			return state;
	}
};

export default goalReducer;