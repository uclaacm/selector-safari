import React from "react"
import { Link } from "react-router-dom"
import "./LevelMenu.css"
import { maxLevel } from '../../constants/constants';

class LevelMenu extends React.Component {
    render(){
        let drawerClasses = 'side-drawer'

        if(this.props.show) {
            drawerClasses = 'side-drawer open'
        }

        return (
            <div className={drawerClasses}>
                {
                    [...Array(maxLevel)].map((_, level) => 
                        <p>
                            <Link to={`/level/${level+1}`}> {`Level ${level+1}`} </Link>
                        </p>
                    )
                }
            </div>
        )
    }
}

export default LevelMenu;

