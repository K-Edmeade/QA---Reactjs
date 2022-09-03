import './App.css';
import HeaderComponent from './headerComponent.jsx';
import Footer from './footer.jsx';



function App() {
  return (
    <>
      

      

        <HeaderComponent />
      <h3>Roster</h3>
      <h5>Guards</h5>
        <ul>
        <li>Marcus Smart</li>
        <li>Malcolm Brogdon</li>
        <li>Payton Pritchard</li>
        <li>Jaylen Brown</li>
        <li>JD Davidson</li>
        <li>Derrick White</li>
        </ul>
      <h5>Forwards</h5>
        <ul>
        <li>Jayson Tatum</li>
        <li>Danilo Gallinari</li>
        <li>Sam Hauser</li>
        <li>Noah Vonleh</li>
        <li>Grant Williams</li>
        <li>Bruno Caboclo</li>
        </ul>
      <h5>Center</h5>
        <ul>
        <li>Al Horford</li>
        <li>Mfiondu Kabengele</li>
        <li>Robert Williams III</li>
        </ul>
        <Footer colour="green" />
      
    </>
  );
}


export default App;
