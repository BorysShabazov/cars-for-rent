import make from "../../assets/make.json";
import price from "../../assets/price.json";
import svg from "../../assets/images/chevron-down.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCars } from "../../redux/Cars/carsOperations";

export const Filter = () => {
  const dispatch = useDispatch();
  const [makeOpen, setMakeOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [makeChange, setMakeChange] = useState("Enter the text");
  const [rentPrice, setRentPrice] = useState("To &#36;");
  const [minMileage, setMinMileage] = useState("From ");
  const [maxMileage, setMaxMileage] = useState("To ");

  const minMileageInput = (evt) => {
    const takeMileage = evt.target.value.split(" ").splice(1, 2).join();
    setMinMileage("From " + takeMileage);
  };

  const maxMileageInput = (evt) => {
    const takeMileage = evt.target.value.split(" ").splice(1, 2).join();
    setMaxMileage("To " + takeMileage);
  };

  const submitForm = (evt) => {
    evt.preventDefault();
    const form = {
      make: makeChange,
      price: rentPrice,
      minMil: minMileage.split(" ").splice(1, 2).join(),
      maxMil: maxMileage.split(" ").splice(1, 2).join(),
    };

    // if (form.make) {
    //   dispatch(fetchCars({ serch: form.make, page: 1, limit: 12 }));
    // }
  };

  const changeMake = (evt) => {
    setMakeChange(evt.target.value);
    console.log(evt.target.value);
  };

  const changePrice = (evt) => {
    setRentPrice(evt.target.value);
    console.log(evt.target.value);
  };

  const toggleMakes = () => {
    setMakeOpen(!makeOpen);
  };
  const togglePrice = () => {
    setPriceOpen(!priceOpen);
  };

  return (
    <>
      <form
        onSubmit={submitForm}
        className="flex mb-[50px] gap-[18px] items-end justify-center"
      >
        <div className="flex flex-col gap-[8px] relative ">
          <label
            htmlFor="model"
            className="text-gray text-sm font-medium  leading-[18px]"
          >
            Car brand
          </label>
          <select
            id="model"
            name="model"
            onChange={changeMake}
            onClick={toggleMakes}
            value={makeChange}
            className="rounded-[14px] cursor-pointer w-[224px] appearance-none bg-lightgray outline-none px-[18px] py-[14px] text-black text-lg font-medium  leading-tight"
          >
            <option value="">Enter the text</option>
            {make.map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>
          <svg className=" cursor-pointer w-[20px] h-[20px] stroke-blue fill-none absolute bottom-[14px] right-[18px]">
            {!makeOpen ? (
              <use width="100%" height="100%" href={`${svg}#chevron-down`} />
            ) : (
              <use width="100%" height="100%" href={`${svg}#chevron-up`} />
            )}
          </svg>
        </div>

        <div className="flex flex-col gap-[8px] relative">
          <label
            htmlFor="price"
            className="text-gray text-sm font-medium  leading-[18px]"
          >
            Price/ 1 hour:
          </label>
          <select
            id="price"
            name="price"
            value={rentPrice}
            onChange={changePrice}
            onClick={togglePrice}
            className="rounded-[14px] cursor-pointer w-[125px] appearance-none bg-lightgray outline-none px-[18px] py-[14px] text-black text-lg font-medium  leading-tight"
          >
            <option value="">To &#36;</option>
            {price.map((el) => (
              <option key={el} value={el}>
                To {el}&#36;
              </option>
            ))}
          </select>
          <svg className="cursor-pointer w-[20px] h-[20px] stroke-blue fill-none absolute bottom-[14px] right-[18px]">
            {!priceOpen ? (
              <use width="100%" height="100%" href={`${svg}#chevron-down`} />
            ) : (
              <use width="100%" height="100%" href={`${svg}#chevron-up`} />
            )}
          </svg>
        </div>

        <div className="flex flex-col gap-[8px]">
          <label
            htmlFor="mileage"
            className="text-gray text-sm font-medium  leading-[18px]"
          >
            Car mileage / km:
          </label>
          <div className="flex">
            <input
              type="text"
              name="mileageFrom"
              onChange={minMileageInput}
              value={minMileage}
              className=" border-r border-zinc-500 border-opacity-20 rounded-tl-[14px] rounded-bl-[14px] w-[125px]  bg-lightgray outline-none px-[18px] py-[14px] text-black text-lg font-medium leading-tight"
            />
            <input
              type="text"
              name="mileageTo"
              onChange={maxMileageInput}
              value={maxMileage}
              className="rounded-tr-[14px] rounded-br-[14px] w-[125px] bg-lightgray outline-none px-[18px] py-[14px] text-black text-lg font-medium  leading-tight"
            />
          </div>
        </div>

        <button
          type="submit"
          className="text-white text-lg font-semibold  leading-tight rounded-xl bg-blue px-[44px] py-[14px]"
        >
          Search
        </button>
      </form>
    </>
  );
};
