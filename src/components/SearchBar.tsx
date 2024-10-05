import SearchIcon from "./SearchIcon"
// import React from "react"


// const handleOnChange = () => {

// }

const SearchBar = () => {
  return (
    <div className=" rounded-md gap-3 flex px-6 py-3 items-center  bg-white shadow-sm hover:shadow-md duration-200 ease-in-out   w-[70%] ">
        <SearchIcon/>
        <input 
        className="text-slate-400 outline-0 w-full" 
        placeholder="Search for a photo"
        type = "text"
        />
    </div>
  )
}

export default SearchBar