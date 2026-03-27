import React from 'react'

const Selected = ({ selected_data = [] }) => {

  if (selected_data.length === 0) {
    return (
      <div className="col-span-full flex justify-center items-center h-40">
        <p className="text-gray-500 text-lg font-medium">
          No player selected yet 🏏
        </p>
      </div>
    )
  }

  return (
    <div className="col-span-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {selected_data.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden"
        >
          <div className="h-48 overflow-hidden">
            <img
              src={item.img}
              alt={item.playername}
              className="w-full h-full object-cover hover:scale-110 transition duration-500"
            />
          </div>
    
          <div className="p-4">

            <h1 className="text-lg font-bold text-gray-800">
              {item.playername}
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              {item.playercountry}
            </p>

            <div className="mt-2">
              <span className="inline-block bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                {item.playertype}
              </span>
            </div>

            <div className="mt-3 text-sm text-gray-600 space-y-1">
              <p>Rating: {item.rating}</p>
              <p>Batting: {item.battingstyle}</p>
              <p>Bowling: {item.bowlingstyle}</p>
            </div>


            <div className="mt-4 flex justify-between items-center">
              <p className="text-green-600 font-bold text-lg">
                ${item.price}
              </p>
            </div>

          </div>

        </div>
      ))}

    </div>
  )
}

export default Selected