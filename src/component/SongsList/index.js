import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const SongsList = props => {
  const {initialTracksList, deleteList} = props
  const {id, imageUrl, name, genre, duration} = initialTracksList

  const onChangeDelete = () => {
    deleteList(id)
  }

  return (
    <li>
      <div className="list-container">
        <div className="list-row">
          <img src={imageUrl} alt="track" />
          <div>
            <p className="name">{name}</p>
            <p className="genre">{genre}</p>
          </div>
        </div>
        <div className="list-row">
          <p className="duration">{duration}</p>
          <button type="button" data-testid="delete" onClick={onChangeDelete}>
            <AiOutlineDelete className="deleteBtn" />
          </button>
        </div>
      </div>
    </li>
  )
}
export default SongsList
