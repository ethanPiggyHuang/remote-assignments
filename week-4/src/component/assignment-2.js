function ajax(url) {
  // your code here
  return(
    fetch(url)
      .then( (response) => response.text())
  );    
}

function render(data) {
  // your code here
  data = JSON.parse(data);
  
  console.log(data);
  document.getElementById('root').textContent = data.join('+');
}
  
const url = "https://appworks-school.github.io/Remote-Assignment-Data/products";
  
ajax(url).then((data) => {
  render(data);
});