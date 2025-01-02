import React, { useState, useEffect } from "react";
import travelPlansData from "../assets/travel-plans.json";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState([]);

  useEffect(() => {
    setTravelPlans(travelPlansData);
  }, []);

  return (
    <div>
      <h2>Travel Plans</h2>
      <ul>
        {travelPlans.map((plan) => (
          <li key={plan.id}>
            <h3>{plan.destination}</h3>
            <img src={plan.image} alt={plan.destination} style={{ width: "200px" }} />
            <p>{plan.description}</p>
            <p>Days: {plan.days}</p>
            <p>All-Inclusive: {plan.allInclusive ? "Yes" : "No"}</p>
            <p>Total Cost: ${plan.totalCost}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TravelList;
