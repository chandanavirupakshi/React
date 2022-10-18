import "./css/SideBarComponent.css";

function SideBarComponent(props){
return (

    <div className="sidebar">
        <h4>list data</h4>
        {
            props.asidelist.map((asiderow)=>
<ul className="aside-list">
    <li>{asiderow.menu1}</li>
    <li>{asiderow.menu2}</li>
    <li>{asiderow.menu3}</li>
    <li>{asiderow.menu4}</li>
</ul>
            ) 
        }
    </div>
    
);
}

export default SideBarComponent;