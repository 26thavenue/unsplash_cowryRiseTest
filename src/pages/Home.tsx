import Hero from "../components/Hero";
import PictureGrid from "../components/PictureGrid";
import { useFetchSearchResults } from "../api/api";

const Home = () => {
  

  const { searchResults: data, isSearching } = useFetchSearchResults({
    pageNumber: 1,
    query: "african",
  });

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
      <Hero />
          <PictureGrid
            isLoading={isSearching}
            images ={arr}
          />
    </div>
  );
};

export default Home;
