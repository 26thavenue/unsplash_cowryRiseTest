import SearchIcon from "./SearchIcon"
import React from "react"
import { useNavigate } from "react-router-dom";



const SearchBar = () => {

  const [searchValue, setSearchValue] = React.useState("")
  const navigate = useNavigate();



  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && searchValue.trim()) {
      navigate(`/search/${searchValue}`); 
    }
  };

  console.log(searchValue)


  return (
    <div className=" rounded-md gap-3 flex px-6 py-3 items-center  bg-white shadow-sm hover:shadow-md duration-200 ease-in-out   w-[70%] ">
        <SearchIcon/>
        <input 
        value={searchValue}
        className="text-slate-400 outline-0 w-full" 
        placeholder="Search for a photo"
        type = "text"
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        />
    </div>
  )
}

export default SearchBar