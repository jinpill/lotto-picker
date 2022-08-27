import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Contents from "./components/Contents";
import Footer from "./components/Footer";

import Game from "./components/Game";

import "./common.css";

const App = () => {
    const [picks, setPicks] = useState<PickedNumbers[]>([]);

    const pickNumbers = (): PickedNumbers => {
        const results: number[] = [];
        const targets = Array.from(
            { length: 45 },
            (_v, i) => i + 1
        );

        for (let i = 0; i < 6; i++) {
            const index = Math.floor(Math.random() * targets.length);
            const number = targets.splice(index, 1)[0];
            results.push(number);
        }

        results.sort((a, b) => a - b);
        return results as PickedNumbers;
    }

    useEffect(() => {
        const GAMES = 5;
        const nextPicks: PickedNumbers[] = [];

        for (let i = 0; i < GAMES; i++) {
            nextPicks.push(pickNumbers());
        }

        setPicks(nextPicks);
    }, []);

    return (
        <React.Fragment>
            <Header />
            <Contents>
                {picks.map((pickedNumbers, i) => (
                    <Game key={i} index={i} numbers={pickedNumbers} />
                ))}
            </Contents>
            <Footer />
        </React.Fragment>
    );
}

export default App;