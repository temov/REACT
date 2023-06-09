
import './academies.css';
import Academy from '../Academy/academy.jsx';
const Academies = (props)=>{

    
        return(
            <div className="academyContainer">
                <h2>{props.name}</h2>
                <div className="academyList">
                    {
                        props.academies.map((academy) => {
                            return(
                              <  Academy key = {academy.id} academy = {academy}/>
                            )
                            
                        })
                    }
                </div>

            </div>
        )

}

export default Academies;