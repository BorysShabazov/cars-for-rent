import cars from "../../assets/images/cars.webp";
import carKey from "../../assets/images/car-keys.jpg";
import carChange from "../../assets/images/serch-car.jpeg";
import happy from "../../assets/images/happy.png";

export const Home = () => {
  return (
    <div className="container m-0 pb-[100px] flex flex-col items-center pt-[40px] flex-wrap">
      <div className="flex flex-col gap-[40px] items-center">
        <h1 className="text-6xl font-bold">Welcome to Exclusive Car Rentals</h1>
        <div className="w-[100%]">
          <img src={cars} alt="cars" className="rounded-lg" />
        </div>

        <div className="flex items-center gap-[40px]">
          <div className="w-[50%]">
            <h2 className="text-2xl font-bold mb-[20px]">About Us:</h2>
            <p className="text-m font-medium">
              We are more than just a car rental company; we are a team of
              professionals committed to providing you with the finest selection
              of vehicles and unparalleled service. Our mission is to set the
              standard for excellence in the world of luxury car rentals.
            </p>
          </div>
          <div className="w-[50%]">
            <img src={carKey} alt="car-keys" className="rounded-lg" />
          </div>
        </div>

        <div className="flex items-center gap-[40px]">
          <div className="w-[50%]">
            <img
              src={carChange}
              alt="carChange"
              className="rounded-lg mb-[20px]"
            />
            <img src={happy} alt="happy" className="rounded-lg" />
          </div>
          <ul className="w-[50%] text-2xl font-bold flex flex-col gap-[10px]">
            Our Services:
            <li className="text-xl font-bold">
              <h4>Premium Car Rentals:</h4>
              <p className="text-base font-medium">
                Explore our fleet of exquisite vehicles, from sleek sports
                coupes to elegant sedans and versatile minivans. Our collection
                is curated to meet the highest standards of performance and
                style.
              </p>
            </li>
            <li className="text-xl font-bold">
              <h4>24/7 Customer Support:</h4>
              <p className="text-base font-medium">
                Our dedicated customer support team is available around the
                clock to assist you with professionalism and promptness. Your
                satisfaction is our priority.
              </p>
            </li>
            <li className="text-xl font-bold">
              <h4>Flexible Reservation System:</h4>
              <p className="text-base font-medium">
                With our user-friendly online platform, you can effortlessly
                choose your desired car, select the rental period, and make a
                reservation in just a few clicks. Convenience at your
                fingertips.
              </p>
            </li>
            <li className="text-xl font-bold">
              <h4>Additional Services:</h4>
              <p className="text-base font-medium">
                From doorstep delivery to chauffeur services, we go the extra
                mile to ensure your comfort. Our comprehensive range of
                additional services complements your car rental experience.
              </p>
            </li>
            <li className="text-xl font-bold">
              <h4>Customer Programs and Discounts:</h4>
              <p className="text-base font-medium">
                We value your loyalty. Enjoy regular promotions, discounts, and
                customer loyalty programs designed to express our gratitude for
                choosing Exclusive Car Rentals.
              </p>
            </li>
          </ul>
        </div>
        <p className="text-2xl font-medium text-center">
          Embark on a journey of refined experiences with Exclusive Car Rentals.
          Each ride is crafted to exceed expectations, offering not just
          transportation but a lifestyle. Choose us and experience the epitome
          of automotive luxury and service excellence.
        </p>
      </div>
    </div>
  );
};
