import travelData from "../../data/db.json"

function Tours() {
    return (
        travelData.map(tour => {
            return (
                <>

                    <h1>Name:{tour.name} </h1>
                    <br />
                    <img src={tour.image} />

                </>
            )

        })
    );


}
export default Tours;