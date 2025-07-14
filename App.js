import React, { useState } from "react";
import Header from "./src/components/Header";
import IngredientSearch from "./src/components/IngredientSearch";
import FilterPanel from "./src/components/FilterPanel";
import RecipeList from "./src/components/RecipeList";
import Footer from "./src/components/Footer";
import "./src/App.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [filters, setFilters] = useState(null);

  const handleSearch = (searchData) => {
    // In a real app, this would call an API
    console.log('Search data:', searchData);
    
    // For now, we'll just set some mock search results
    if (searchData.ingredients.length > 0 || searchData.searchTerm) {
      // Mock search results - in real app, this would come from API
      const mockResults = [
        {
          id: 7,
          title: "Pasta with " + (searchData.ingredients[0] || searchData.searchTerm),
          cuisine: "Italian",
          cookingTime: 20,
          difficulty: "Easy",
          image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400",
          ingredients: searchData.ingredients.length > 0 ? searchData.ingredients : [searchData.searchTerm],
          tags: ["Quick"]
        }
      ];
      setSearchResults(mockResults);
    } else {
      setSearchResults([]);
    }
  };

  const handleFilterChange = (filterData) => {
    console.log('Filter data:', filterData);
    setFilters(filterData);
  };

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <IngredientSearch onSearch={handleSearch} />
        <FilterPanel onFilterChange={handleFilterChange} />
        <RecipeList searchResults={searchResults} filters={filters} />
      </main>
      <Footer />
    </div>
  );
}

export default App; 