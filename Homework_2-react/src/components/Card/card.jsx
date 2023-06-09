const Card  = (props)=>{

        return(

            <div className = 'cardContainer'>
                <h2>{props.title}</h2>
                <p>{props.content}</p>
                <img src={props.imgUrl} alt={props.title}/>


            </div>
        )
}

export default Card;