// components/SearchInput.js
import { useState } from 'react';
import { Input } from './ui/input';

type SearchInputProps = {
    onSearch: any
}
const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: any) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

 

  return (
    <div className='flex flex-col'>
      <Input type="text" className='p-10 text-xl font-bold' value={query} onChange={handleChange} placeholder='Search here'/>
      <div className='mt-2 opacity-40 italic'>Try searching "India calls ..."</div>
    </div>
  );
};

export default SearchInput;
