function ajax(url) {
  // your code here
  return(
    fetch(url)
      .then( (response) => response.text())
  );    
  console.log('pause');
}

function render(data) {
  // your code here
  data = JSON.parse(data);
  console.log(data);

  const Text = () => {
    return(
      <div className="flex-container">
        {data.map( product =>
          <div className="flex-item">
            <h2>{ product.name }</h2>
            <p>價錢：{ product.price }元</p>
            <p>特色：{ product.description }</p>
          </div>
        )}
      </div>
    );
  };

  ReactDOM.render(
    <Text />,
    document.getElementById('root')
  )
}
  
const url = "https://appworks-school.github.io/Remote-Assignment-Data/products";
  
ajax(url).then((data) => {
  render(data);
});