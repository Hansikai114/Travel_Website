import "./ServiceTrip.css";
import TripData from "./TripData";
import Trip1 from "../assets/pidurangala.jpg";
import Trip2 from "../assets/hikkaduwa.jpg";
import Trip3 from "../assets/bentota.jpg";
import Trip4 from "../assets/galle.jpeg";  
import Trip5 from "../assets/anuradhapura.jpg";  
import Trip6 from "../assets/end.jpg"; 

function ServiceTrip() {
    return (
        <div className="trip1">
            <div className="tripcard1">
                <TripData
                    imgs={Trip1}
                    heading="Pidurangala Rock"
                    text={
                        <>Pidurangala is a massive rock formation located a few kilometers north of Sigiriya in Sri Lanka. It has an 
                        interesting history closely related to that of the Sigiriya Rock Fortress. Climbing to the top of Pidurangala
                         Rock is more strenuous than climbing Sigiriya. If you are fit and adventurous it is a climb worth making.
                          It will take you about two hours. </>
                    }
                />
                <TripData
                    imgs={Trip2}
                    heading="Hikkaduwa"
                    text={
                        <>Hikkaduwa finds itself nuzzled in the Galle district of South Western Sri Lanka, 2 hours away from Colombo. 
                        The beaches of Hikkaduwa have been visited since the 1970s for their vibrant nightlife and cuisine. The beaches are 
                        a surfer's delight and have a large coral reef, the Hikkaduwa Coral Sanctuary, which is favourable for scuba diving
                         and snorkelling. </>
                    }
                />
                <TripData
                    imgs={Trip3}
                    heading="Bentota"
                    text={
                        <>Bentota is a picturesque coastal town on the southwestern coast of Sri Lanka, around 62 kms from the capital city, 
                        Colombo. Blessed with natural beauty and a laid-back ambiance, Bentota is known for its pristine beaches, lush
                         greenery, and tranquil waterways. It is a popular destination for beach lovers, water sports enthusiasts, and
                          families and couples seeking relaxation amidst tropical surroundings.</>
                    }
                />
                {/* New row of trips */}
                <TripData
                    imgs={Trip4}
                    heading="Galle Fort"
                    text={
                        <>Galle is located in the south of Sri Lanka. A journey to the past sees the remnants of a Dutch past at a World 
                        Heritage Site. Galle has been the emporium of foreign trade since the dawn of commerce. The Dutch Fort, which has 
                        been declared a World Heritage Site, surrounds the older part of the town and is situated on a headland of which three 
                        sides overlook the sea. T                        
                         </>
                    }
                />
                <TripData
                    imgs={Trip5}
                    heading="Anuradhapura"
                    text={
                        <>Anuradhapura, an ancient city nestled in the heart of Sri Lanka's North Central Province, stands as a living testament 
                        to the island's rich cultural and historical legacy. Revered as one of the oldest continuously inhabited cities in 
                        the world, Anuradhapura served as the capital of Sri Lanka for over a millennium, bearing witness to the rise and fall
                         of several ancient kingdoms.  </>
                    }
                />
                <TripData
                    imgs={Trip6}
                    heading="World’s End (Horton Plains)"
                    text={
                        <>With a drop of more than 800 metres, World’s End is an escarpment within the Horton Plains National Park. A popular 
                        vantage point among locals and tourists alike, the vistas of the surrounding misty hills, tea plantations and the 
                        buildings at World’s End are nothing short of jaw-dropping.</>
                    }
                />
            </div>
        </div>
    );
}

export default ServiceTrip;
