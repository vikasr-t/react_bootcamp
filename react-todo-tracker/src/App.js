import Header from "./components/Header";
import NewHeader from "./components/NewHeader";

function App() {
  let header;

  if (1 < 2) {
    header = <Header title="Hello" />;
  } else {
    header = <NewHeader />
  }



  return (
    <div className="App">
      {1 < 10 ? <Header title="Hello" /> : null}
    </div>
  );
}

export default App;
