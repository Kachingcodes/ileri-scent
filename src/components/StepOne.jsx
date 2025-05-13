import React from "react";

const StepOne = ({
  scent,
  setScent,
  onNext,
  searchQuery,
  setSearchQuery,
  selectedCategory,
}) => {
  const scentOptions = {
    MEN: [
      "Always Needed",
      "Apple Note",
      "Aqua Gem",
      "Black Plum",
      "Blue Path",
      "Caramel Lait",
      "Cold Cube",
      "Convinced",
      "Ember Incense",
      "Heavy Shadow",
      "Honey Sage",
      "Ileri's Aqua",
      "Jade Mist",
      "Juicy Flame",
      "Leather Spice",
      "Light Jasmine",
      "Liquid Desire",
      "Oud Wood",
      "Precious Notes",
      "Red Mist",
      "Shadow Spice",
      "Silky Touch",
      "Sir",
      "Spicy Earth",
      "Sport Vortex",
      "Sweet Powder",
      "Velvet Zest",
    ],
    WOMEN: [
      "Adornment",
      "Amber Seduction",
      "Bright Road",
      "Cherry Mirage",
      "Cold Cube",
      "Dark & Juicy",
      "Dudu Elixir",
      "Enchanting Seduction ",
      "Eternal Sunset",
      "Floral Currant",
      "Floral Depth",
      "Golden Laurel",
      "Guilty Sin",
      "Second Turn",
      "Sensual Sweetness",
      "Sweet Invitation",
      "Yes Ileri",
    ],
    UNISEX: [
      "Caramel Lait", 
      "Cold Cube",
      "Honey Sage", 
      "Spicy Earth"
    ],
  };
  

  const filteredScents = scentOptions[selectedCategory]?.filter((scent) =>
    scent.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-2xl font-bold font-playfair">Choose Your Scent</h2>

      <input
        type="text"
        placeholder="Search for a scent..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border border-gray-300 p-2 rounded-md w-72"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-64 overflow-y-auto p-2">
        {filteredScents.map((option, idx) => (
          <button
            key={idx}
            onClick={() => setScent(option)}
            className={`p-2 rounded-md text-sm transition-all border ${
              scent === option
                ? "bg-amber-600 text-white border-black"
                : "bg-white text-gray-800 border-gray-300 hover:border-amber-600"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <button
        onClick={onNext}
        className="mt-4 px-6 py-2 bg-blue-800 text-white rounded-md hover:bg-gray-900 transition"
      >
        Next
      </button>
    </div>
  );
};

export default StepOne;