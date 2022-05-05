import "./App.css";
import Weather from "./Weather"

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather/>
        <footer>
          This project was coded by Elnaz Amia and is{" "}
          <a
            href="https://github.com/ElnazAmia/weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://fanciful-mochi-71d178.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
