import { useParams } from "react-router"

const SearchResult = () => {
  const id = useParams()


  // console.log(id.query)

   return (
    <div className="bg-gray-100 items-center flex justify-center h-[30vh] w-full">
      <div className="w-[70%] ">
         <h1 className="text-4xl text-blue-900 font-bold"> Searching for <span className="text-blue-700"> "{id.query}"</span></h1>
      </div>
       
    </div>
  )
}

export default SearchResult