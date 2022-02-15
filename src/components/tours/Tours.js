import travelData from "../../data/db.json"
import Tour from "./tour/Tour"
function Tours() {
    return (
        travelData.map(tour => {
            return (
                <>
                <Tour key={tour.id} tour={tour} />                   
                </>
            )

        })
    );


}
export default Tours;