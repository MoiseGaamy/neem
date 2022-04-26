import { fireDB } from "../../firebase/config.js";
import axios from 'axios'
//action to create new Goal
export const addGoal = (newGoal) => {
    return async (dispatch, state) =>
    {
        try
    {
        const {data} = await axios.post("https://secure-lake-72191.herokuapp.com/plan", newGoal)
        dispatch(getAllGoals());
    } catch (e)
    {
        console.log(e);
   }
   }
};

export const getAllGoals = () => {
    return async (dispatch, state) =>
    {
        const { data } = await axios.get("https://secure-lake-72191.herokuapp.com/plan")
        dispatch({ type: "ALL_GOALS", payload: data });
    }
		    // fireDB
			// .collection("goals")
			// .onSnapshot(
			// 	(snapshot) => {
			// 		let allGoals = [];
            //         snapshot.forEach((doc) =>
            //         {
            //             console.log(doc.data());
			// 			allGoals.push(doc.data());
			// 		});
            //         console.log(allGoals); 
            //          dispatch({ type: "ALL_GOALS", payload: allGoals }); 
			// 	},
            // )
};

