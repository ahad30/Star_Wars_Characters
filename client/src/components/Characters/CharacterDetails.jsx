import React from 'react'

const CharacterDetails = ({selectedCharacter, setSelectedCharacter }) => {
  return (
    <div className="mt-8 bg-gray-700 p-6 rounded-xl shadow-lg border border-yellow-500">
          <button
            onClick={() => setSelectedCharacter(null)}
            className="mt-6 mb-6 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Back to List
                </button>
                <h2 className="text-3xl font-bold text-yellow-400 mb-4">
                  {selectedCharacter.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-200">
                  <p>
                    <span className="font-semibold text-yellow-300">Height:</span>{" "}
                    {selectedCharacter.height} cm
                  </p>
                  <p>
                    <span className="font-semibold text-yellow-300">Mass:</span>{" "}
                    {selectedCharacter.mass} kg
                  </p>
                  <p>
                    <span className="font-semibold text-yellow-300">Hair Color:</span>{" "}
                    {selectedCharacter.hair_color}
                  </p>
                  <p>
                    <span className="font-semibold text-yellow-300">Skin Color:</span>{" "}
                    {selectedCharacter.skin_color}
                  </p>
                  <p>
                    <span className="font-semibold text-yellow-300">Eye Color:</span>{" "}
                    {selectedCharacter.eye_color}
                  </p>
                  <p>
                    <span className="font-semibold text-yellow-300">Birth Year:</span>{" "}
                    {selectedCharacter.birth_year}
                  </p>
                  <p>
                    <span className="font-semibold text-yellow-300">Gender:</span>{" "}
                    {selectedCharacter.gender}
                  </p>
                  {selectedCharacter.homeworldName && (
                    <p>
                      <span className="font-semibold text-yellow-300">Homeworld:</span>{" "}
                      {selectedCharacter.homeworldName}
                    </p>
                  )}
                  {selectedCharacter.terrain && (
                    <p>
                      <span className="font-semibold text-yellow-300">Terrain:</span>{" "}
                      {selectedCharacter.terrain}
                    </p>
                  )}
                </div>
               
              </div> 
  )
}

export default CharacterDetails