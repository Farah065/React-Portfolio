import {ReactComponent as SuccessSVG} from './SVGs/Success.svg';
import {ReactComponent as FailureSVG} from './SVGs/Failure.svg';
import {ReactComponent as CloseSVG} from './SVGs/Close.svg';

function Alert(props) {
    const close = (e) => {
        // e.preventDefault();
        props.setStatus("");
    }

    return (
        <div className='background-panel'>
            <div className='alert-container'>
                <button className='close-btn' onClick={close}>
                    <CloseSVG className='close' />
                </button>
                <div className='alert-contents'>
                    {props.status === "Success" ? <SuccessSVG className='status' /> : <FailureSVG className='status' />}
                    {props.status === "Success" ? <h1>All good!</h1> : <h1>Oops!</h1>}
                    {props.status === "Success" ?
                        <p>Thanks for your submission {props.name}, we will get back to you shortly!</p> :
                        <p>Something went wrong, please try again later.</p>}
                </div>
            </div>
        </div>
    );
}

export default Alert;