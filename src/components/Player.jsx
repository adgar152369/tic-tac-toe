import { useState } from "react";

function Player(props) {
  const [playerName, setPlayerName] = useState(props.name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // passing a callback ensures we have the most updated state variable
    setIsEditing((wasEditing) => !wasEditing);
    if (isEditing) {
      props.onChangeName(props.symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  const editablePlayerName = isEditing ?
    <input type="text" value={playerName} onChange={handleChange} required /> :
    <span className="player-name">{playerName}</span>;

  return (
    <li className={props.isActive ? 'active' : undefined}>
      <span className="player">
        <>{editablePlayerName}</>
        <span className="player-symbol">{props.symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}

export default Player;