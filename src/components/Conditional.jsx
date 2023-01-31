import { plantList } from '../datas/plantList'

function Conditional() {
    return (
        <div  >{plantList.map((plant) => (
            <div className='card_dos'>
                <h3 key={plant.id}>
                    <h2 >{plant.name}</h2>
                    <p>Category: {plant.category.toUpperCase()}</p>
                    {plant.isBestSale ? <span>Best Sale 🔥</span> : null}
                    {plant.isBestSale && <p>🔥🔥🔥</p>}
                    {plant.isBestSale && plant.category === 'classic' ? <span> 🙈</span> : null}
                </h3>
            </div>

        ))}</div>
    )
}

export default Conditional