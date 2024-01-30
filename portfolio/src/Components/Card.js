function Card(props) {
    return(
        <div className='card-container'>
            <div className={"card-outline " + props.col}>
                <div className='card'>
                    <div className='image'>

                    </div>
                    <div className='card-text'>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;