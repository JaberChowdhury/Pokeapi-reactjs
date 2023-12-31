import { Link } from "react-router-dom";

type propsType = {
  id: number;
};

const Pagination = ({ id }: propsType) => {
  const totalPages = (): number[] => {
    let numbers = [];
    for (let i = Number(id) + 1; i < Number(id) + 10; i++) {
      numbers.push(i);
    }
    return numbers;
  };

  const validation = (value: string): string => {
    if (value.length === 1) {
      return `00${value}`;
    } else if (value.length === 2) {
      return `0${value}`;
    } else {
      return `${value}`;
    }
  };

  const Boxes = () => {
    const links = totalPages().map((d, id) => {
      return (
        <Link
          className="p-2 z-30 m-2 border-2 border-slate-700"
          key={id}
          to={`/pokemons/${d}`}
        >
          {validation(d.toString())}
        </Link>
      );
    });

    return links;
  };

  return (
    <div className="w-full my-6 flex justify-center items-center relative p-5">
      <div className="w-4/5 flex justify-center items-center flex-wrap ">
        {<Boxes />}
      </div>
    </div>
  );
};

export default Pagination;
