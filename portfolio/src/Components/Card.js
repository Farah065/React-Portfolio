function Card(props) {
    return(
        <div className='card-container'>
            <div className={"card-outline " + props.col}>
                <div className='card'>
                    <div>
                        <img src={props.img} className='card-img'/>
                    </div>
                    <div className='card-text'>
                        <h1>{props.title}</h1>
                        <p>{props.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;