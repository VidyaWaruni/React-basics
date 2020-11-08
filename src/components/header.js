import React from 'react';
import classes from '../css/styles.css';
import '../css/styles.css';

const Header = (props) =>{
// class Header extends Component {

//     state = {
//         keywords:''
//     }

//     inputChangeHandler = (event) => {
//         this.setState({
//             keywords: event.target.value
//         })
// }
    
    // render(){
        return (
            <header>
                <div className={classes.logo}>Logo</div>
                <input type="text" onChange={props.keywords}/>
            </header>
        )
    // }
}


export default Header;
