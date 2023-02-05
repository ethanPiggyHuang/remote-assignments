const url = 'https://api.github.com/orgs/facebook/repos?per_page=5&amp;page=';

function ajax(url) {
  return(
    fetch(url)
      .then( (response) => response.text())
      .then( data  => JSON.parse(data) )
  );    
}

function render(data) {
  
  class App extends React.Component{
    state = {
      display: data,
      pageNum: 1
    }
    
    fetchData = (pageNum) => {
      pageNum += 1;
      const newUrl = url + pageNum;

      ajax(newUrl).then((data) => {
        this.setState( prevState => {
          prevState.display.push(...data);
          return { 
            display: prevState.display
          };
        });
      });

      this.setState( prevState => {
        return { 
          pageNum: prevState.pageNum + 1
        };
      });
    }    

    render () {
      return(
        <div className="outer-container">
          <div className="flex-container">
            {this.state.display.map( product =>
              <div className="flex-item">
                <div className="inner-row">
                  <p className="name">{ product.name }</p>
                  <p className="visibility">{ product.visibility }</p>
                </div>
                <p className="description">{ product.description }</p>
                <div className="inner-row">
                  {product.topics.map( topic => <p className="topic">{ topic }</p>)}
                </div>
              </div>
            )}
          </div>
          <button onClick = {() => this.fetchData(this.state.pageNum)}>more</button>
        </div>
      );
    }
  }

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
}
  
const initUrl = url + 1;

ajax(initUrl).then((data) => {
  render(data);
});