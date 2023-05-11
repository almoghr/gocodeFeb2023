import "./Nav.css"
import { SortOrFilter } from "../SortOrFilter/SortOrFilter";
import { sortArrOptions, filterArrOptions } from "../../dummy-data/data";
import { useContext } from "react";
import { MyContext } from "../../MyContext";
// import { useClock } from "../../customHooks/useClock";
export const Nav = () => {
  const {categories, handleFilterProducts} = useContext(MyContext)
  // const clock = useClock()
  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      {/* {clock} */}
      <div className="sort">
      <SortOrFilter onChange={(event) => handleFilterProducts(event.target.value)} label={"filter"} optionsArray={categories}/>
      <SortOrFilter onChange={(event) => {console.log(event.target.value)}} label={"sort"} optionsArray={sortArrOptions}/>
      </div>
    </nav>
  );
};
