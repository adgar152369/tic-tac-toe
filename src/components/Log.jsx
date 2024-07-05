function Log(props) {

  const logItems = props.logList.map((log) => (
    <li key={`${log.square.row}-${log.square.col}`}>
      {log.player} selected {log.square.row + 1},{log.square.col + 1}
    </li>
  ));

  return (
    <ol id="log">
      <>{logItems}</>
    </ol>
  )
}

export default Log;