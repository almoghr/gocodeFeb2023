import "./Nav.css"
import { SortOrFilter } from "../SortOrFilter/SortOrFilter";
import { sortArrOptions, filterArrOptions } from "../../dummy-data/data";
export const Nav = () => {
  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      <div className="sort">
      <SortOrFilter onChange={(event) => {console.log(event.target.value)}} label={"filter"} optionsArray={filterArrOptions}/>
      <SortOrFilter onChange={(event) => {console.log(event.target.value)}} label={"sort"} optionsArray={sortArrOptions}/>
      </div>
    </nav>
  );
};
