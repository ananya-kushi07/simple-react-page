import Header from "./components/Header";
import Content from "./components/Content";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header title="Simple React Web Page" />
      <Content />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
