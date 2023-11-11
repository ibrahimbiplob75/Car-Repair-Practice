import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-4 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-xl text-orange-500">Price: ${price}</p>
        <div className="card-actions">
          <Link to={`/booking/${_id}`}>
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
ServiceCard.propTypes={
    service:PropTypes.object,
}

export default ServiceCard;
