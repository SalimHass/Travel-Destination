import { Link } from 'react-router-dom';
function Tour(props) {
    return (
        <>
<Link to={`/city/${props.tour.id}`}><h1>Name:{props.tour.name} </h1></Link>

            
            <br />
            <img src={props.tour.image} />

        </>

    );

}

export default Tour;