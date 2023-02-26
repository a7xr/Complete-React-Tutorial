import "./App.css";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const link = "http://www.google.com/"
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes}</p>

        <p>{10}</p>
        <p>{"This is a String"}</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>Google</a>
      </div>
    </div>
  );
}

export default App;

// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <div className="content">
//         <h1>App Component</h1>
//       </div>
//     </div>
//   );
// }

// export default App;
