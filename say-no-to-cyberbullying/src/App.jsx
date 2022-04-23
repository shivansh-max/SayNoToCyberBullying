import { useState } from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Games from "./Components/Games/Games";

function App() {
    const [home_games, setHome_Games] = useState(true);

    return (
        <div className="App">
            <Header hg = {home_games} sHG = {setHome_Games}/>

            {home_games ? <Home /> : <Games />}
        </div>
    );
}

export default App;
