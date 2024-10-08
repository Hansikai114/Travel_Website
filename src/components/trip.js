import "./TripStyles.css"
import TripData from "./TripData";
import Trip1 from "../assets/mirissa.jpg";
import Trip2 from "../assets/Ella.jpg";
import Trip3 from "../assets/adms.jpg";

function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using google Maps.</p>
            <div className="tripcard">
                <TripData
                imgs = {Trip1}
                heading = "Mirissa Beach"
                text = {
                    <>Mirissa is a tiny village on Sri Lanka's south shore, situated in the Southern Province of Matara District. It is 
                    the south coast's largest fishing port and is popular for its tuna, mullet, snapper, and butterfish. If you'd like 
                    to experience a mesmerizing sunset dinner with beautiful scenic views, then Mirissa beach is the place to be at.                     
                    </>
                }
                />

                <TripData
                imgs = {Trip2}
                heading = "Ella"
                text = {
                    <>The area has a rich bio-diversity, dense with numerous varieties of flora and fauna. Ella is surrounded by hills 
                    covered with cloud forests and tea plantations. The town has a cooler climate than surrounding lowlands, due to its 
                    elevation. The Ella Gap allows views across the southern plains of Sri Lanka.                   
                    </>
                }
                />

                <TripData
                imgs = {Trip3}
                heading = "Adam’s Peak"
                text = {
                    <>Adam's Peak, one of the must-visit spots in Sri Lanka, is a huge conical mountain towering over with 2,243 meters 
                    height in the central highlands of the country, carrying on its top a sacred footprint equally revered by all religions. 
                    Besides being a holy tourist destination, Adam's Peak is extremely popular with tourists for its alluring beauty and unmatched
                     trekking.                 
                    </>
                }
                />
                
            </div>
        </div>
        
    )
}

export default Trip;