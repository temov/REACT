const Todos  = (props)=>{

    return (

        <section>

            <h3>{props.message}</h3>
            <p>{props.name}</p>
            <p>{props.color}</p>
        </section>
    )


}

export default Todos;