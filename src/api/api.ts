import { useQuery } from '@tanstack/react-query';
import Axios from './axios';
import { SearchParams } from "../types";


const defaultSearchParams: SearchParams = {
  pageNumber: 1,
  query: '',
  
};

// export const getSearchResults = async (items: SearchParams = defaultSearchParams) => {
//   const { pageNumber, query } = items;

//   const result = await Axios.get(`/search/photos`, {
//     params: {
//       page: pageNumber,
//       query: query,
//     }
//   });

//   if (!result || result.status === 404 || !result.data) {
//     console.log(result);
//     throw new Error('Network response was not ok');
//   }

//   return result.data;
// };


export const useFetchSearchResults =  ({
    pageNumber,
    query
}:SearchParams = defaultSearchParams) => {
    const {data:searchResults, isLoading:isSearching} = useQuery({
        queryKey : ["SearchResult"],
        queryFn: async () => {
             const result = await Axios.get(`/search/photos`, {
                                    params: {
                                        page: pageNumber,
                                        query: query,
                                    }
                                });

            return result.data;
        },

    })

    return{
        searchResults,
        isSearching
    }
};




