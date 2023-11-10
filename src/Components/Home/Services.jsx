

import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/data')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
      <div className="mt-4 w-4/5 m-auto">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
          <h2 className="text-5xl">Our Service Area</h2>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br /> words which do not look even slightly
            believable.{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <div className="text-center m-20">
          <button className="btn btn-outline btn-primary">More services</button>
        </div>
      </div>
    );
};

export default Services;



