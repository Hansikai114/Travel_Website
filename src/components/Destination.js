import Mountain1 from "../assets/sigiriya.png";
import Mountain2 from "../assets/sigiriya1.jpg";
import Mountain3 from "../assets/kandy1.jpg";
import Mountain4 from "../assets/kandy2.jpeg";
import DestinationData from "./DestinationData"
import "./DestinationStyles.css"

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame</p>
            
            <DestinationData
            className="first-des"
            heading = "Sigiriya"
            text={
                <>
                  With ornate ponds, royal sleeping chambers and a majestic set of carved lion paws marking the start of its steep steps, 
                  the colossal, ruin-topped outcrop of Sigiriya is Sri Lanka’s most recognizable site, peeking out over the thick jungle canopy 
                  and offering a tantalizing glimpse of the ancient kingdom of Kassapa.<br/><br/>
                  Frescoes featuring women adorned in jewelry with flowers in their hair are the site’s most famous feature, but the views 
                  from the top of the rock are unparalleled.<br/><br/>
                   Planning tip: Try to visit early in the day, at around 7am; the cooler morning air makes it much more pleasant to walk up the 
                  1200 steps to the top. Head back down by noon, before the rock's surface gets too hot, stay hydrated and wear soft shoes 
                  with good tread.<br/><br/>
                </>
              }
            img1 = {Mountain1}
            img2 = {Mountain2}
            />

            <DestinationData
            className="first-des-reverse"
            heading = "Kandy"
            text = {
                <>
                For a culture-filled trip from Colombo, take the train from Fort Railway Station to the heritage town of Kandy. It's a
                 must for any rail enthusiast – the railway lines curve and wind around mountains to connect rural towns, and wide windows
                  frame views of deep ravines and hillsides densely covered in emerald-green forest. <br/><br/>
                The legendary Temple of the Sacred Tooth Relic – containing a tooth said to come from the historical Buddha – and Kandy Lake 
                are must-see attractions for anyone visiting Sri Lanka. Both are easily reached from the station by tuk-tuk.
                </>
            }
            img1 = {Mountain3}
            img2 = {Mountain4}
            />
            
        </div>

    )
}

export default Destination