import './css/ContentComponent.css';

function ContentComponent(props){
return (
    // <div className="content">
    //     <table className="tbl">
    //         <tr><th>ID</th><th>Name</th><th>Dept</th><th>Desg</th></tr>
    //     {
    //         props.employees.map((employee)=>
    //         <tr><td>{employee.id}</td><td>{employee.name}</td>
    //         <td>{employee.dept}</td><td>{employee.desg}</td>
    //         </tr>
    //         )
    //     }
    //     </table>
       
    // </div>
    <div className="contentHeader">
        <h1>{props.name}</h1>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
    </div>
    
);
}

export default ContentComponent;