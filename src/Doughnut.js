import {Link} from "react-router-dom";

function Doughnut(){
    return(
        <div className="Doughnut">
            Here are some doughnuts!
            <img src="https://media2.giphy.com/media/AE9edpiQCuwU0/giphy.gif"></img>
            <Link to="/">Get some more food!</Link>
        </div>
    )
}

export default Doughnut;