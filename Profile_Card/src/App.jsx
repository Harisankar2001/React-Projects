
import LearnComponent from "./components/LearnComponent";
import Header from "./components/Header";
import Student from "./components/Student";
import ChildComponent from './components/ChildComponent';
import MultiTypeComponent from './components/MultiTypeComponent';


import ArraySample from './components/ArraySample';
import OneOfSample from './components/OneOfSample';
import './css/App.css'
import SampleFunction from "./components/SampleFunction";

function App() {
  const handleClick = () =>[
    alert("Button Clicked")
  ]
  const items = [
    {id:1, name:"Item 1"},
    {id:2, name:"Item 2"},
    {id:3, name:"Item 3"}
  ]

  return (
    <>
      <div>Hari Sankar React Tutorial</div>
      <LearnComponent/>
      <Header />
      <Student name="Hari" age={35} isMarried={true}/>
      <Student name="Ram" age={34} isMarried={false}/>
      <Student />

      <ChildComponent>
        <p>This is a Sample Para1</p>
        <p>This is a Sample Para2</p>
      </ChildComponent> 
      <ArraySample items={items}/>
      <OneOfSample color="green"/>
      <MultiTypeComponent value="Hello"/>
      <MultiTypeComponent value={48} />
      <MultiTypeComponent value={true?"Yes":"No"} />
      <div>
        <h2>Parent Component</h2>
        <SampleFunction handleClick={handleClick}/>
      </div>

    </>
  );
}

export default App
