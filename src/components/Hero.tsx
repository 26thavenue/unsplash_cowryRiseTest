import SearchBar from "./SearchBar"
import { useFetchSearchResults } from "../api/api"

const Hero = () => {

  // const {searchResults:data, isSearching} =  useFetchSearchResults({
  //       pageNumber: 1,
  //       query: 'nature',
  //   });

  // console.log(data.results)
  
 
  return (
    <div className="bg-gray-100 items-center flex justify-center h-[30vh] w-full">
        <SearchBar/>
        
        
    </div>
  )
}

export default Hero