import { useParams } from "react-router"
import PictureGrid from "../components/PictureGrid";
import { useFetchSearchResults } from "../api/api";


const SearchResult = () => {
  const id = useParams()

  const { searchResults: data, isSearching } = useFetchSearchResults({
    pageNumber: 1,
    query: id.query ?? "",
  });


  // console.log(isSearching);



  const arr = data?.results?.map((imgCard:any) => ({
    firstName: imgCard.user.first_name,
    lastName: imgCard.user.last_name,
    location: imgCard.user.location,
    imageLink: imgCard.urls.small_s3,
    height:imgCard.height,
    width:imgCard.width
  })) || [];
  

   return (
    <div className="min-h-[100vh]">
     <div className="bg-[#DDE3EA] items-center flex justify-center h-[40vh]  w-full">
        <p className="text-4xl text-[#283A4F] w-[70%]  font-bold">Searching for <span className="text-[#727B94]">{id.query}</span></p>
    </div>
       <PictureGrid
            isLoading={isSearching}
            images ={arr}
        />
       
    </div>
  )
}

export default SearchResult