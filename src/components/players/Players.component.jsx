import {useState} from "react";


function Players({initialName,symbol,isActive}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    let editablePlayer = <span className='player-name'>{playerName}</span>;
    //let btnCaption = 'Edit';

    if (isEditing){
        editablePlayer = <input  type ='text' required value={playerName} onChange={handleChange}  />
       // btnCaption = 'Save';
    }
    return (
        <li className={isActive?'active':undefined}>
              <span className='player'>
                {editablePlayer}
                <span className='player-symbol'>{symbol}</span>
              </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' :'Edit'}</button>
        </li>

    );
}

export default Players;