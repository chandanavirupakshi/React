import './css/HeaderComponent.css';
function HeaderComponent(props){
    return (
        <div className="header">
        {
            props.navList.map((menurow)=>
            <ul className="nav_list">
                <li>{menurow.menu1}</li>
                <li>{menurow.menu2}</li>
                <li>{menurow.menu3}</li>
                <li>{menurow.menu4}</li>
            </ul>
            )
        }
            
        </div>
        
    );
}

export default HeaderComponent;