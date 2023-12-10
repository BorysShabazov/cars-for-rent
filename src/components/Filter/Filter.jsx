import make from "../../assets/make.json";
import price from "../../assets/price.json";
import svg from "../../assets/images/chevron-down.svg";
import { useState } from "react";

export const Filter = () => {
  const [makeOpen, setMakeOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [makeChange, setMakeChange] = useState(false);
  const [rentPrice, setRentPrice] = useState(false);
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
    console.log(evt);
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
        className="flex mb-[50px] gap-[18px] items-center"
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
            onClick={toggleMakes}
            className="cursor-pointer w-[224px] appearance-none bg-lightgray outline-none px-[18px] py-[14px] text-black text-lg font-medium  leading-tight"
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
            onClick={togglePrice}
            className="cursor-pointer w-[125px] appearance-none bg-lightgray outline-none px-[18px] py-[14px] text-black text-lg font-medium  leading-tight"
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
              className=" w-[125px]  bg-lightgray outline-none px-[18px] py-[14px] text-black text-lg font-medium  leading-tight"
            />
            <input
              type="text"
              name="mileageTo"
              onChange={maxMileageInput}
              value={maxMileage}
              className=" w-[125px] bg-lightgray outline-none px-[18px] py-[14px] text-black text-lg font-medium  leading-tight"
            />
          </div>
        </div>

        <button type="submit">Search</button>
      </form>
    </>
  );
  // <form action="submit">
  //   <div className="flex">
  //     <label
  //       for="model"
  //       className="text-neutral-900 text-lg font-medium  leading-tight"
  //     >
  //       Car brand:
  //     </label>{" "}
  //     <select id="model" name="model">
  //       <option value="">Enter the text</option>
  //       {make.map((el) => (
  //         <option value={el}>{el}</option>
  //       ))}
  //     </select>
  //   </div>

  //   <label>
  //     Price/ 1 hour:
  //     <select name="price">
  //       <option value="">To &#36;</option>
  //       {price.map((el) => (
  //         <option value={el}>To {el}&#36;</option>
  //       ))}
  //     </select>
  //   </label>
  //   <label>
  //     Сar mileage / km:
  //     <input type="text" value="From " />
  //     <input type="text" value="To " />
  //   </label>
  //   <button>Search</button>
  // </form>
};
