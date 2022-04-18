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
					snapshot.forEach((doc) => {
						allGoals.push(doc.data());
					});
                    console.log(allGoals); 
                     dispatch({ type: "ALL_GOALS", payload: allGoals }); 
				},
            ).then((goal) =>
            {
                console.log('it is working',goal)
            }).catch((error) =>
            {
                console.log('something went wrong',error.message)
            });
	};
};

