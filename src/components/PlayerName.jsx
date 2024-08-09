import { useState } from "react";

export default function PlayerName({
  initialName,
  symbol,
  isActive,
  onChangePlayerName,
}) {
  // using useState for updating ui values.
  const [saveInfo, setSaveInfo] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleInfo() {
    setIsEditing((isEditing) => !isEditing);
    if (isEditing) {
      onChangePlayerName(symbol, saveInfo);
    }
  }

  function savePlayerInfo(event) {
    setSaveInfo(event.target.value);
  }

  let playerInfo = <span className="player-name">{saveInfo}</span>;
  if (isEditing) {
    playerInfo = (
      <input type="text" required value={saveInfo} onChange={savePlayerInfo} />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerInfo}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleInfo}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
