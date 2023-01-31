import { plantList } from '../datas/plantList'

function ListExternalData() {
  return (
    <ul>
        {plantList.map((plant) => (
            <li key={plant.id}>{plant.name}</li>
        ))}
    </ul>
  )
}

export default ListExternalData