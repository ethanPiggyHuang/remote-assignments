import MainMessage from './MainMessage.js';
// import Content from './component/Content';

const Header = () => {
  return (
    <header className="header_container">
      <h2>Website Title/logo</h2>
      <div className="menu_icon">
        <i className="fa-solid fa-bars"></i>
      </div>
      <ul className="menu">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
      <button className="menu_close">
        <i className="fa-solid fa-x"></i>
      </button>
    </header>
  );
}


const App = () => {
  return (
    <div>
      <Header />
      {/* <MainMessage /> */}
      {/* <Content /> */}
    </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);