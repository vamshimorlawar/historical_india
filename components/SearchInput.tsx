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
    <div className='flex flex-col max-w-[300px] md:max-w-[500px]'>
      <Input type="text" className='p-4' value={query} onChange={handleChange} placeholder='Enter your query here...'/>
    </div>
  );
};

export default SearchInput;
