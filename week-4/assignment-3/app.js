
/* -----------------
  Component Header
------------------ */

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

/* ---------------------
  Component MainMessage
---------------------- */

const MainMessage = () => {
  // const [ message, setMessage ] = useState('Welcom');
  
  // useEffect(() => {
  //   console.log('useEffect called!');   
  // },[ score ]);

  return (
    <section className="h1_container">
      <h1 id="message">
        Welcome Message
      </h1>
    </section>
  )
}

/* ------------------
  Component Content
------------------- */
const boxArray = (start, num) => {
  let boxes = [];
  for(let i=0; i<num; i++){
    boxes.push({title:`Content Box ${ start+i }`, text:'kkk',id:`${ start+i }`});
  }
  return boxes;
}

const Content = () => {
  const boxes_initial = boxArray(1,4);
  const boxes_extend = boxArray(5,4);

  return (
    <section>
      <h3>Section Title</h3>
      <div className="box_container">
        {boxes_initial.map( (box,index) =>
          <ContentBox 
            title={box.title}
            text={box.text}
            id={box.id}
            key={box.id}
          />  
        )}
      </div>
      <div className="button_container">
        <button className="click_button">Call to Action</button>
      </div>
      <div className="box_container extend">
        {boxes_extend.map( (box,index) =>
          <ContentBox 
            title={box.title}
            text={box.text}
            id={box.id}
            key={box.id}
          />  
        )}
      </div>
    </section>
  )
}

const ContentBox = ( props ) => {
  return (
    <div className="box">
      <p className="box_title">{ props.title }</p>
      <p>{ props.text }</p>
    </div>
  )
}

/* ------------
   Main App
------------ */

const App = () => {
  return (
    <div>
      <Header />
      <MainMessage />
      <Content />
    </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);