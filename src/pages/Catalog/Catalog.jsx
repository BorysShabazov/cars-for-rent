import { useDispatch, useSelector } from "react-redux";
import { CarCard } from "../../components/CarCard/CarCard";
import { useEffect } from "react";
import { fetchCars } from "../../redux/Cars/carsOperations";
import { carsData } from "../../redux/Cars/carsSelectors";
import { Filter } from "../../components/Filter/Filter";

export const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(carsData);

  useEffect(() => {
    dispatch(fetchCars({ page: 1, limit: 12 }));
  }, [dispatch]);

  return (
    <div className="container m-0">
      <Filter />
      <ul className="flex gap-[30px] flex-wrap  justify-center">
        {cars.map((el) => (
          <li key={el.id}>
            <CarCard data={el} />
          </li>
        ))}
      </ul>
    </div>
  );
};
