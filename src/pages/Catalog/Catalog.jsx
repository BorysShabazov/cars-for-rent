import { useDispatch, useSelector } from "react-redux";
import { CarCard } from "../../components/CarCard/CarCard";
import { useEffect } from "react";
import { fetchCars } from "../../redux/Cars/carsOperations";
import { carsData } from "../../redux/Cars/carsSelectors";

export const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(carsData);

  useEffect(() => {
    dispatch(fetchCars({ page: 1, limit: 3 }));
  }, [dispatch]);

  return (
    <div>
      <ul>
        {cars.map((el) => (
          <li key={el.id}>
            <CarCard data={el} />
          </li>
        ))}
        <p>test</p>
      </ul>
    </div>
  );
};
