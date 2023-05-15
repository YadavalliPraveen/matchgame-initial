import './index.css'

const FruitItem = props => {
  const {fruitDetails} = props
  const {thumbnailUrl} = fruitDetails

  return (
    <li className="list-container">
      <img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />
    </li>
  )
}
export default FruitItem
