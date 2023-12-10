export const CarCard = ({ data }) => {
  const descriptoinList = [
    data.address.split(",").slice(1, 2),
    data.address.split(",").slice(2, 3),
    data.rentalCompany,
    data.type,
    data.model,
    data.functionalities[1],
  ];

  return (
    <div className="w-[274px] ">
      <div className="mb-[14px] w-[274px] h-[268px] rounded-[14px] bg-[url('https://media.istockphoto.com/id/1273534607/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D1%96%D0%BB%D1%8C%D0%BD%D0%B0-%D0%BF%D1%96%D0%BA%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B0-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D1%96%D0%BB%D1%8C-%D1%96%D0%B7%D0%BE%D0%BB%D1%8C%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B9-%D1%82%D1%80%D0%B0%D0%BD%D1%81%D0%BF%D0%BE%D1%80%D1%82%D0%BD%D1%96-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B8-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D1%96%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9.jpg?s=612x612&w=0&k=20&c=PsVdmzwjsZqbwV84KfO-lkwwvxFMTBHOWD_rw6UR9rY=')] bg-cover bg-center">
        <img
          src={data.img}
          alt={data.make}
          className="w-[100%] h-[100%] object-cover rounded-[14px]"
        />
      </div>
      <h3 className="mb-[8px] text-neutral-900 text-base font-medium leading-normal flex justify-between">
        <span>
          {data.make} <span className="text-blue">{data.model}</span>,
          {data.year}
        </span>
        <span>{data.rentalPrice}</span>
      </h3>
      <ul className="flex flex-wrap gap-[6px] mb-[28px]">
        {descriptoinList.map((el, i, arr) => (
          <li
            key={i}
            className="text-neutral-900 text-opacity-50 text-xs font-normal leading-[18px] relative flex pr-[6px]"
          >
            {el}
            {i !== 3 && i !== 5 && (
              <span className=" absolute top-0 right-0 after:content-[''] after:ml-[1px]  after:h-[100%] bg-black bg-opacity-10 "></span>
            )}
          </li>
        ))}
      </ul>
      <button className="w-[100%] bg-blue pt-[12px] pb-[12px] rounded-[12px] text-white text-sm font-semibold  leading-tight">
        Learn more
      </button>
    </div>
  );
};
