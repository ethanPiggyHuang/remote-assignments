const Content = () => {
  const boxes = [1,2,3,4];
  const boxes_hidden = [5,6,7,8];

  return (
    <section>
      <h3>Section Title</h3>
      <div className="box_container">
        {boxes.map( (box,index) =>
          <ContentBox 
            id={index+1}
            key={index+1}
          />  
        )}
      </div>
      <div className="button_container">
        <button className="click_button">Call to Action</button>
      </div>
      <div className="box_container ">aaa
        {/* {boxes_hidden.map( (box,index) =>
          <ContentBox 
            id={box}
            key={box}
          />  
        )} */}
      </div>
    </section>
  )
}

const ContentBox = ( props ) => {
  return (
    <p className="box">Content Box { props.id }</p>
  )
}

export default Content;