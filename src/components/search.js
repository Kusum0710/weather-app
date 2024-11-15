import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

const Search = ({onSearchChange}) =>{

   const [search, setSearch] = useState(null);

    const handleonChange = (searchData) => {     
        setSearch(searchData);
        onSearchChange(searchData);
     }         
    return (
        <AsyncPaginate 
        placeholder="Search for city"
       debounceTimeout={600}
       value={search}
       onChange={handleonChange}
        />
    )
}

export default Search;