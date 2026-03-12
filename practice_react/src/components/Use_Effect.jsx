import axios from "axios";
import React, { useState } from "react";

const Use_Effect = () => {
  const [data, setData] = useState([]);

  const imags = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    setData(response.data);
  };

  return (
    <div>
      <button
        onClick={imags}
        className="bg-blue-600 text-white px-4 py-2 m-4 rounded"
      >
        Get Images
      </button>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item, idx) => {
          return (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
            >
              <img
                className="w-full h-48 object-cover"
                src={item.download_url}
                alt={item.author}
              />

              <div className="p-3">
                <h3 className="font-semibold text-gray-700 text-center">
                  {item.author}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Use_Effect;