import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyPosts from "./screens/MyPosts/MyPosts";
import LoginPage from "./screens/LoginPage/LoginPage";
import RegisterPage from "./screens/RegisterPage/RegisterPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route path="/myposts" component={() => <MyPosts />} />
        {/* <LandingPage /> */}
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
