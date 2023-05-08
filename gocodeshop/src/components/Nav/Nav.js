import "./Nav.css"
import { SortOrFilter } from "../SortOrFilter/SortOrFilter";
import { sortArrOptions, filterArrOptions } from "../../dummy-data/data";
import { useClock } from "../../customHooks/useClock";
export const Nav = () => {
  const clock = useClock()
  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      {clock}
      <div className="sort">
      <SortOrFilter onChange={(event) => {console.log(event.target.value)}} label={"filter"} optionsArray={filterArrOptions}/>
      <SortOrFilter onChange={(event) => {console.log(event.target.value)}} label={"sort"} optionsArray={sortArrOptions}/>
      </div>
    </nav>
  );
};
