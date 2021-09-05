import './App.css';
import Timer from './myComponents/Timer'

let curDate = new Date();
curDate = curDate.getHours();

//console.log(curDate);
let greeting = '';

const cssStyle = {};

if(curDate >= 1 && curDate < 12){
  greeting = 'Good Morning have a good day';
  cssStyle.color = '#0D3B66';

}else if(curDate >=12 && curDate < 19){
  greeting = "Good Afternoon";
  cssStyle.color = '#6A00F4';

}else{
  greeting = "Good Night Sleep well";
  cssStyle.color = '#580AFF';
}


function App() {
  return (
    <>   
          <div style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL + '/image.jpg'})` 
          }}></div>
      <h1 className="heading"> Digital Clock with Simple Greeting</h1>   
      <h1 className="greeting">Hello, <span style={cssStyle}>{ greeting }</span></h1> 
      <div> <Timer className="greeting"/>
      </div>
    </>
  );
}

export default App;
