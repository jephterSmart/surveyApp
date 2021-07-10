import Check from "./Check";
import { setAnswer} from '../../store/reducers'

import classes from './card.module.css';
import { useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";

const shuffle = (array) =>{
   
        var currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;

}
const Card = ({data}) => {
    const dispatch = useDispatch();
    const answers = [data.correct_answer].concat(data.incorrect_answers);
   useEffect(()=> {
    
    shuffle(answers);
   },[])

   const checkHandler = useCallback( target => {
       
       dispatch(setAnswer({
        type: "ANSWER",
        group: target.name,
        answer:target.value,
        checked: target.checked,
        correct_answer: data.correct_answer
    }))
   },[data.correct_answer])
    return(
        <div className={classes.Card}>
            
                
                <h3>{data.question}</h3>
                  <>
                      {answers.map(answer =><Check  question={data.question}
                      Label={answer} key={answer} callback={checkHandler} /> )}
                         
                 </>  
                   
             
        </div>
    )
}

export default Card;