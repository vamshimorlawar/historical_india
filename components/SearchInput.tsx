// components/SearchInput.js
import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

type SearchInputProps = {
    onSearch: any
}
const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className='flex'>
      <Input type="text" className='p-10 text-xl font-bold' value={query} onChange={handleChange} placeholder='Search here'/>
      <Button onClick={handleSearch} className='p-10 '>Search</Button>
    </div>
  );
};

export default SearchInput;
