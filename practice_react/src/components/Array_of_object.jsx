

const Array_of_object = () => {
  const companies = [
    { id: 1, name: "Google", country: "USA", employees: 150000 },
    { id: 2, name: "Microsoft", country: "USA", employees: 221000 },
    { id: 3, name: "Apple", country: "USA", employees: 164000 },
    { id: 4, name: "Amazon", country: "USA", employees: 1500000 },
    { id: 5, name: "Meta", country: "USA", employees: 67000 },
    { id: 6, name: "Tesla", country: "USA", employees: 127000 },
    { id: 7, name: "Samsung", country: "South Korea", employees: 266000 },
    { id: 8, name: "Toyota", country: "Japan", employees: 375000 },
    { id: 9, name: "Alibaba", country: "China", employees: 235000 },
    { id: 10, name: "Netflix", country: "USA", employees: 13000 }
  ];

  return (
    <div className="grid-container">
      {companies.map((item) => (
        <div key={item.id} className="objectsetup">
          <h1>{item.name}</h1>
          <h2>{item.country}</h2>
          <h3>{item.employees}</h3>
        </div>
      ))}
    </div>
  )
}

export default Array_of_object;