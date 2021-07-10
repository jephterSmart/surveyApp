import classes from './check.module.css';

const Check = ({Label,checked,callback,question,danger}) => {
    const clickHandler = e => {
        callback(e.target);
    }
    return(
        <label className={`${classes.container} ${danger && classes.danger}`}><span className={classes.label}>{Label}</span>
                    <input type="checkbox" checked={checked} onClick={clickHandler} value={Label} name={question} />
                    <span className={classes.checkmark}></span>
        </label>
    )
}

export default Check; 