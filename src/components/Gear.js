import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Gear.css';

export default function Gear(){
    return(
        <div className="gearPosition">
            <div className="gearContainer">
                <FontAwesomeIcon className={"leftGear"} icon={faGear}/>
                <FontAwesomeIcon className={"rightGear"} icon={faGear}/>
            </div>
        </div>
    )
}