import {Link} from "react-router-dom";

function Chocolate(){
    return(
        <div className="Chocolate">
            Here is some chocolate!
            <img src="https://media3.giphy.com/media/Wrscj8qsDogR4QHx2j/200w.gif?cid=6c09b952x290urd87g373x18vv67irry9tpvd7yv0a1lkban&rid=200w.gif&ct=g"></img>
            <Link to="/">Get some more food!</Link>
        </div>
    )
}

export default Chocolate;