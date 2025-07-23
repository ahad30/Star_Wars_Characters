import { useState, useEffect, useCallback } from "react";
import { Paginator } from 'primereact/paginator';
import SkeletonCard from "../../components/Skeleton";
import CharacterDetails from "../../components/Characters/CharacterDetails";
import Characters from "../../components/Characters/Characters";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [detailLoading, setDetailLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [characterCount, setCharacterCount] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  const fetchCharacters = useCallback(async (page, search = "") => {
    setLoading(true);
    setError(null);
    try {
      let url = `${import.meta.env.VITE_BACKEND_URL}/characters?page=${page}&search=${search}`;
      if (search) {
        setIsSearching(true);
      } else {
        setIsSearching(false);
      }

      const response = await fetch(url);
      const data = await response.json();

      if (search) {
        setCharacters(data?.results);
        setTotalPages(1);
        setCharacterCount(data?.results?.length);
      } else {
        setCharacters(data?.results);
        setTotalPages(data?.total_pages);
        setCharacterCount(data?.total_records);
      }
    } catch (e) {
      console.error("Failed to fetch characters:", e);
      setError("Failed to load characters. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 100)

    return () => clearTimeout(handler);
  }, [searchTerm]);

  useEffect(() => {
    fetchCharacters(currentPage, debouncedSearchTerm);
  }, [currentPage, debouncedSearchTerm, fetchCharacters]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setCurrentPage(1);
    setSelectedCharacter(null);
  };

  const onPageChange = (event) => {
    setCurrentPage(event.page + 1);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter p-4 sm:p-8 flex flex-col items-center">
      {/* Header Section */}
      <header className="w-full max-w-4xl text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-4">
          Star Wars Character Explorer
        </h1>
        
      </header>

      {/* Search Bar */}
      {!selectedCharacter && <div className="w-full max-w-2xl mb-8 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <input
          type="text"
          placeholder="Search characters by name..."
          value={searchTerm.toLocaleLowerCase()}
          onChange={handleSearchChange}
          className="flex-grow p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        {searchTerm && (
          <button
            onClick={handleClearSearch}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Clear Search
          </button>
        )}
      </div>
      }

      {/* Main Content Area */}
      <main className="w-full min-h-screen max-w-6xl rounded-xl shadow-lg p-6">
        {loading && !detailLoading && (
          <div className="">
            <SkeletonCard />
          </div>
        )}

        {error && (
          <div className="bg-red-900 text-red-300 p-4 rounded-lg text-center">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            {/* Character List */}
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
              {
                !selectedCharacter &&
                (
                  isSearching
                    ? `Search Results (${characterCount})`
                    : `All Characters (${characterCount})`
                )
              }
            </h2>

            {detailLoading ? (
              <SkeletonCard detailsSkeleton={"Details"} />
            ) : selectedCharacter ? (
              <CharacterDetails
                searchTerm={searchTerm}
                selectedCharacter={selectedCharacter}
                setSelectedCharacter={setSelectedCharacter}
              />
            ) : (
              <Characters searchTerm={searchTerm} characters={characters}
                setSelectedCharacter={setSelectedCharacter}
                setDetailLoading={setDetailLoading}
                setError={setError}
              />
            )}
          </>
        )}

        {/* PrimeReact Pagination */}
        {!isSearching && !selectedCharacter && totalPages > 1 && (
          <div className="flex justify-center mt-6">
           <Paginator
  first={(currentPage - 1) * 10}
  rows={10}
  totalRecords={characterCount}
  onPageChange={onPageChange}
  template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
  className="bg-gray-800 text-white"
  disabled={loading}
  pt={{
    root: {
      className: "bg-gray-800 border border-gray-700 rounded-lg p-2"
    },
    firstPageButton: {
      className: `text-gray-300 px-3 py-2 rounded transition-colors ${loading ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'hover:text-yellow-400 hover:bg-gray-700'}`
    },
    prevPageButton: {
      className: `text-gray-300 px-3 py-2 rounded transition-colors ${loading ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'hover:text-yellow-400 hover:bg-gray-700'}`
    },
    nextPageButton: {
      className: `text-gray-300 px-3 py-2 rounded transition-colors ${loading ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'hover:text-yellow-400 hover:bg-gray-700'}`
    },
    lastPageButton: {
      className: `text-gray-300 px-3 py-2 rounded transition-colors ${loading ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'hover:text-yellow-400 hover:bg-gray-700'}`
    },
    pageButton: {
      className: `text-gray-300 px-3 py-2 mx-1 rounded transition-colors ${loading ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'hover:text-yellow-400 hover:bg-gray-700'}`
    },
    pages: { className: "flex space-x-1" }
  }}
  pagelinkclassname="text-gray-300 hover:text-yellow-400 hover:bg-gray-700 px-3 py-2 mx-1 rounded transition-colors"
  currentPageReportTemplate=""
/>

          </div>
        )}
      </main>
    </div>
  );
};

export default Home;