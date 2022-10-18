import logo from './logo.svg';
import './App.css';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ContentComponent from './components/ContentComponent';
import SideBarComponent from './components/SideBarComponent';

function App() {
  const employeesArr = [
    {
      id:101,
      name:"John",
      dept:"IT",
      desg:"Manager"
    },
    {
      id:102,
      name:"Foo",
      dept:"Admin",
      desg:"Manager"
    },
    {
      id:103,
      name:"BAR",
      dept:"HR",
      desg:"ASST Manager"
    },
    {
      id:104,
      name:"Elle",
      dept:"IT",
      desg:"Developer"
    }
  ];
  const menurow =[{menu1:"Home",menu2:"aboutus",menu3:"contact",menu4:"training"}];
  const asiderow =[{menu1:"list1",menu2:"list2",menu3:"list3",menu4:"list4"}];
  return (
    <div className="App">
      <HeaderComponent navList={menurow}></HeaderComponent>
      <ContentComponent name="content Header"></ContentComponent>
      <SideBarComponent asidelist={asiderow}></SideBarComponent>
     <FooterComponent copyright="chandana.virupakshi@gmail.com" company="mycompany.com"></FooterComponent>
    </div>
  );
}

export default App;
