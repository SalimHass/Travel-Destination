import { useParams } from 'react-router-dom';
import travelData from "../../data/db.json";
import React, {useState} from "react";
import "./TourDetails.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    
}from "react-router-dom"

const TourDetails = (props) => {

    let { id } = useParams();
    const getTourData = () =>{
        const dataOfTour = travelData.filter((data)=> data.id===id)
        return dataOfTour
    };
    const dataOfTour = getTourData();
    const [readMore, setReadMore] = useState(false);
    
    let tour = travelData.filter(tour => tour.id===id)
    return (
        <>
        <div className='tour-details'>
            <article>
                <h2>{dataOfTour[0].name }  </h2>

                <p>
                  {readMore
                  ?dataOfTour[0].info 
                : `${dataOfTour[0].info.substring (0,200)}...`} 
                <button onClick={()=> setReadMore(!readMore)} >
                    {readMore ? "show less" : "read more"}
                    </button>
                </p>
                <div className='tour-image'>
                    <img src={dataOfTour[0].image}/>
                </div>
                <div>Price: {dataOfTour[0].price} $</div>
            </article>
        </div>
           
        </>

    );

}

export default TourDetails;