import React from 'react'

const Available = ({ item, selected_data, setSelected_Data }) => {

  const isSelected = selected_data.some(
    (p) => p.playername === item.playername
  )

  const handleSelect = () => {
    if (!isSelected) {
      setSelected_Data([...selected_data, item])
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-2xl transition duration-300">

      <img
        src={item.img}
        alt={item.playername}
        className="w-full h-48 object-cover rounded-xl"
      />

      <h1 className="text-xl font-bold mt-3 text-gray-800">
        {item.playername}
      </h1>

      <div className="flex justify-between items-center mt-2">
        <span className="text-gray-600 text-sm">
          {item.playercountry}
        </span>

        <button className="bg-blue-500 text-white px-2 py-1 text-xs rounded-full">
          {item.playertype}
        </button>
      </div>

      <div className="mt-3 text-sm text-gray-700 space-y-1">
        <p>Rating: {item.rating}</p>
        <p>Batting: {item.battingstyle}</p>
        <p>Bowling: {item.bowlingstyle}</p>
      </div>

      <div className="flex justify-between items-center mt-4">
        <p className="font-semibold text-green-600">
          ${item.price}
        </p>

        <button
          onClick={handleSelect}
          disabled={isSelected}
          className={`px-3 py-1 rounded-lg text-sm text-white ${
            isSelected ? "bg-gray-500" : "bg-black hover:bg-gray-800"
          }`}
        >
          {isSelected ? "Selected" : "Choose player"}
        </button>
      </div>

    </div>
  )
}

export default Available