
export const GET_QUESTIONS ='GET_QUESTIONS';
export const FETCH_FAIL ='FETCH_FAIL';
const initialState = {data:null, error:null}

const Reducer = (state=initialState,action) => {
    const oldState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case GET_QUESTIONS:
            oldState.data = action.data;
            break;
        case FETCH_FAIL:
            oldState.error = true;
            break;
        default: return state;
    }
    return oldState;
}
const setQuestions = (questions) => {
    return{
        type:GET_QUESTIONS,
        data:questions
    }
}
const getQuestionsFailed = () => {
    return {
        type: FETCH_FAIL
    }
}
export const getQuestions = () => {
    return dispatch => {
        if(localStorage.getItem('data')){
            dispatch(setQuestions(JSON.parse(localStorage.getItem('data'))));
        }
        else{
            fetch('https://opentdb.com/api.php?amount=10&category=28&type=multiple')
        .then(response =>{
            
            return response.json()
         })
         .then(data => {
             localStorage.setItem('data',JSON.stringify(data.results));
             dispatch(setQuestions(data.results))
         }).catch(error => {
             dispatch(getQuestionsFailed())
         })
        }
        
    }
}
export const changeState = (state={},action) => {
    const oldState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case "ANSWER":
            oldState[action.group] = {
                ...oldState[action.group],
                [action.answer]: action.checked,
                correct_answer:action.correct_answer
            }
           
            break;
        default: return state;
    }
    return oldState;
}
export const setAnswer = (action) => {
    return dispatch => {
        localStorage?.setItem('ANSWERS',JSON.stringify({
            [action.group]: {
               [action.answer]: action.checked,
               correct_answer: action.correct_answer
            }
        }));
        dispatch(action)
    }
}
export const responseState = (state={done: false,
    total: 10,
    passed: 0},action) =>{
        const oldState = JSON.parse(JSON.stringify(state))
        switch(action.type){ 
            case "PASSES":
                oldState.done = action.done;
                oldState.total = action.total;
                oldState.passed = action.passed;
                console.log(oldState);
                break;
            default: return state;
        }
        return oldState;
    }
export const finishSurvey = (action) => {
    return dispatch => {
        if(action.done){
            localStorage.removeItem('data');
            localStorage.removeItem('ANSWERS');

        }
        dispatch(action)
    }
}
export default Reducer;