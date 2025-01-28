import { GET_API_DATA, saveApiData } from "../../actions/api"

export const flow_getApiData = ({ api }) => ({ dispatch }) => next => async action => {
    if (action.type === GET_API_DATA) {
        try {
            const data = await api.getData(action.payload);
            dispatch(saveApiData(data))
        }
        catch(err) {
            console.log(err);
            
        }
    }
    next(action);
}