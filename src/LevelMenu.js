import React from "react"
import { Link } from "react-router-dom"
import "./LevelMenu.css"

class LevelMenu extends React.Component {
    render(){
        let drawerClasses = 'side-drawer'

        if(this.props.show) {
            drawerClasses = 'side-drawer open'
        }

        return (
            <div className={drawerClasses}>
                <p>
                    <Link to="/level/1"> Level 1 </Link>
                </p>
                <p>
                    <Link to="/level/2"> Level 2 </Link>
                </p>
                <p>
                    <Link to="/level/3"> Level 3 </Link>
                </p>
                <p>
                    <Link to="/level/4"> Level 4 </Link>
                </p>
            </div>
        )
    }
}

export default LevelMenu;

