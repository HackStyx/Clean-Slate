import { Search } from 'lucide-react'

function SearchBar() {
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      window.location.href = `https://www.google.com/search?q=${encodeURIComponent(e.target.value)}`
    }
  }

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      <input
        type="text"
        placeholder="Search"
        className="pl-10 pr-4 py-2 rounded-full bg-gray-800 bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-white"
        onKeyPress={handleSearch}
      />
    </div>
  )
}

export default SearchBar