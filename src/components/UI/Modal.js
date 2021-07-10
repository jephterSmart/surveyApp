
import classes from './modal.module.css';


const Modal = ({onClose,children,className,...rest}) => {

    return(
        <div className={classes.Backdrop} onClick={onClose}>
            <div className={`${classes.Modal} ${className}` }
            onClick={onClose} {...rest}>{children}</div>
        </div>
    )
}
export default Modal;