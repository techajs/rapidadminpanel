
import Add from "./add";
import SearchInput from "./search-input";
import SortBy from "./sortby";

function FilterHeading() {
  return (
    <div className="flex p-4 items-center justify-between">
      <SearchInput />
      <div className="flex items-center w-1/2 justify-end space-x-5">
        <SortBy />
        <Add title={"Add"}/>
      </div>
    </div>
  );
}

export default FilterHeading;
