function Tour(props) {
    return (
        <>
            <h1>Name:{props.tour.name} </h1>
            <br />
            <img src={props.tour.image} />

        </>

    );

}

export default Tour;