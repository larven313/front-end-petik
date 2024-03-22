import { Component } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello World</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
        assumenda dignissimos incidunt. Aut sit quia sint. Eum molestias
        similique veniam quia necessitatibus a fuga incidunt doloribus et
        recusandae? Repellendus, commodi?
      </p>
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

class Footer extends Component {
  render() {
    return (
      <footer>
        <h3>Copyright &copy;2024 Developed by Sukma Hidayatullah</h3>
        <span>Make with &#10084</span>
      </footer>
    );
  }
}

export default App;
