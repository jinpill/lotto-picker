import React, { useState } from "react";

import Header from "./components/Header";
import Contents from "./components/Contents";
import Footer from "./components/Footer";

import Game from "./components/Game";

import "./common.css";

const App = () => {
    interface IGame {
        id: number,
        timestamp: Date,
        numbers: PickedNumbers
    }

    const [picks, setPicks] = useState<IGame[]>([]);
    const [lastId, setLastId] = useState<number>(0);

    const pickNumbers = () => {
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
        setPicks(prev => [...prev, {
            id: lastId,
            timestamp: new Date(),
            numbers: results as PickedNumbers
        }]);
        setLastId(prev => prev + 1);
    }

    const handleGetNumbers = () => {
        const GAMES = 1;
        for (let i = 0; i < GAMES; i++) {
            pickNumbers()
        }
    }

    const handleDeleteClick = (id: number) => {
        setPicks(prev => {
            const targetId = prev.findIndex(obj => obj.id === id);
            const nextPicks = [...prev];
            nextPicks.splice(targetId, 1);
            return nextPicks;
        });
    }

    return (
        <React.Fragment>
            <Header />
            <Contents>
                <button onClick={handleGetNumbers}>추가하기</button>
                {picks.map(({ id, timestamp, numbers }, i) => (
                    <Game
                        key={id}
                        index={i}
                        id={id}
                        timestamp={timestamp}
                        numbers={numbers}
                        onDelete={handleDeleteClick}
                    />
                ))}
            </Contents>
            <Footer />
        </React.Fragment>
    );
}

export default App;