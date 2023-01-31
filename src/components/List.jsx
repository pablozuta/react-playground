const plantList = [
    'Monstera',
    'Ficus Lyrata',
    'Silver Pothos',
    'Yucca',
    'Palm'
]

function List() {
  return (
    <div>
        {plantList.map((plant, index) => (
            <h3 key={`${plant} - ${index}`}>{plant}</h3>
        ))}
    </div>
  )
}

export default List