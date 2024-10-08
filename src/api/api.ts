import { useQuery } from '@tanstack/react-query';
import Axios from './axios';
import { SearchParams } from "../types";


const defaultSearchParams: SearchParams = {
  pageNumber: 1,
  query: '',
  
};

export const useFetchSearchResults =  ({
    pageNumber,
    query
}:SearchParams = defaultSearchParams) => {
    const {data:searchResults, isLoading:isSearching} = useQuery({
        queryKey : ["SearchResult", pageNumber,query],
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




