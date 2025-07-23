import React from "react";

const Characters = (
    { characters, 
      searchTerm, 
      setDetailLoading, 
       setError ,
      setSelectedCharacter }
) => {
  const handleCharacterSelect = async (characterUrl) => {
    setDetailLoading(true);
    setError(null);
    try {
      const characterId = characterUrl.split("/").pop();
      const characterResponse = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/characters/${characterId}`
      );
      const characterData = await characterResponse.json();
      const character = characterData.result.properties;

      if (character.homeworld) {
        const homeworldId = character.homeworld.split("/").pop();
        const homeworldResponse = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/planets/${homeworldId}`
        );
        if (homeworldResponse.ok) {
          const homeworldData = await homeworldResponse.json();
          character.homeworldName = homeworldData.result.properties.name;
          character.terrain = homeworldData.result.properties.terrain;
        }
      }
      setSelectedCharacter(character);
    } catch (e) {
      console.error("Failed to fetch character details:", e);
      setError("Failed to load character details. Please try again.");
    } finally {
      setDetailLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
      {characters?.length > 0 ? (
        characters?.map((char) => (
          <div
            key={char.uid}
            className="bg-gray-700 p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-600 transition duration-200 ease-in-out transform hover:scale-105"
            onClick={() =>
              handleCharacterSelect(
                searchTerm ? char?.properties?.url : char?.url
              )
            }
          >
            <h3 className="text-xl font-bold text-yellow-300 text-center">
              {searchTerm ? char?.properties?.name : char?.name}
            </h3>
            {/* <p className="text-gray-300 text-sm">ID: {char.uid}</p> */}
          </div>
        ))
      ) : (
        <p className="text-gray-400 col-span-full text-center">
          No characters found.
        </p>
      )}
    </div>
  );
};

export default Characters;
