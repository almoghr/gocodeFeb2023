const OddRow = ({isCircleInside, circleColor}) => {
  return (
    <div className="row">
      <Square color={"black"} isCircleInside={isCircleInside} circleColor={circleColor} />
      <Square color={"white"} />
      <Square color={"black"} isCircleInside={isCircleInside} circleColor={circleColor} />
      <Square color={"white"} />
      <Square color={"black"} isCircleInside={isCircleInside} circleColor={circleColor} />
      <Square color={"white"}/>
      <Square color={"black"} isCircleInside={isCircleInside} circleColor={circleColor} />
      <Square color={"white"}  />
    </div>
  );
};
const EvenRow = ({isCircleInside, circleColor}) => {
  return (
    <div className="row">
      <Square color={"white"} />
      <Square color={"black"} isCircleInside={isCircleInside} circleColor={circleColor} />
      <Square color={"white"} />
      <Square color={"black"} isCircleInside={isCircleInside} circleColor={circleColor} />
      <Square color={"white"} />
      <Square color={"black"} isCircleInside={isCircleInside} circleColor={circleColor} />
      <Square color={"white"}/>
      <Square color={"black"} isCircleInside={isCircleInside} circleColor={circleColor} />
    </div>
  );
};

const Square = ({ color, isCircleInside, circleColor }) => {
  return (
    <div className={`square ${color} row`}>
      {isCircleInside && <div className={`circle ${circleColor}`}></div>}
    </div>
  );
};

const  MyDate = () => {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
  
    if (hours < 12) {
      timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
    } else {
      timeOfDay = "night"
    }
  
    return (
      <h1>Good {timeOfDay}!</h1>
    )
  }
  

const Main = () => {
  return (
    <div className="container">
      <EvenRow isCircleInside circleColor={"blue"}/>
      <OddRow isCircleInside  circleColor={"blue"}/>
      <EvenRow isCircleInside  circleColor={"blue"}/>
      <OddRow />
      <EvenRow />
      <OddRow isCircleInside circleColor={"red"}/>
      <EvenRow isCircleInside circleColor={"red"}/>
      <OddRow isCircleInside circleColor={"red"}/>
      <MyDate/>
    </div>
  );
};
ReactDOM.render(<Main />, document.getElementById("app"));
