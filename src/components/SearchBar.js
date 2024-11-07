import { forwardRef } from 'react';
import { Search } from 'lucide-react';

const SearchBar = forwardRef(({ size }, ref) => {
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(e.target.value)}`;
    }
  };

  return (
    <div className={`relative ${size === 'small' ? 'w-60' : size === 'large' ? 'w-96' : 'w-80'}`}>
      <Search className="search-icon absolute left-3 top-1/2 transform -translate-y-1/2 text-white pointer-events-none transition-transform duration-300" />
      <input
        type="text"
        placeholder="⌘ + K to search"
        className="pl-12 pr-4 py-2 rounded-full bg-gray-800 bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-white w-full transition duration-300 ease-in-out transform focus:scale-105"
        onKeyPress={handleSearch}
        ref={ref}
        onFocus={(e) => e.target.previousSibling.classList.add('animate-icon')}
        onBlur={(e) => e.target.previousSibling.classList.remove('animate-icon')}
      />
    </div>
  );
});

export default SearchBar;