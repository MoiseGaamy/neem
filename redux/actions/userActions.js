import { fireDB } from "../../firebase/config.js";
//action to create new Goal
export const addGoal = (newGoal) => {
    return (dispatch) =>
    {
            fireDB
            .collection("goals")
            .add(newGoal)
            .then((goal) => {console.log('this is it', goal)})
            .catch((error)=>{
                console.log(error.message)
            });
    }
};

export const getAllGoals = () => {
	return (dispatch,state) => {
		    fireDB
			.collection("goals")
			.onSnapshot(
				(snapshot) => {
					let allGoals = [];
                    snapshot.forEach((doc) =>
                    {
                        console.log(doc.data());
						allGoals.push(doc.data());
					});
                    console.log(allGoals); 
                     dispatch({ type: "ALL_GOALS", payload: allGoals }); 
				},
            )
	};
};

