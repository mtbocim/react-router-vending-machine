import {Link} from "react-router-dom";

function Coffee(){
    return(
        <div className="Coffee">
            Here is some coffee!
            <img src="https://media3.giphy.com/media/7qV3yswT0K8hi/giphy.gif"></img>
            <Link to="/">Get some more food!</Link>
        </div>
    )
}

export default Coffee;