import React, { useState } from "react";

import Header from "./components/Header";
import Contents from "./components/Contents";
import Footer from "./components/Footer";

import Games from "./components/Games";
import Game from "./components/Game";
import Panel from "./components/Panel";
import Field from "./components/Field";
import Button from "./components/Button";

import iconAdd from "./assets/icon-add.svg";
import iconReset from "./assets/icon-reset.svg";

import "./common.css";

let lastId = 0;

const App = () => {
    interface IGame {
        id: number,
        timestamp: Date,
        numbers: PickedNumbers
    }

    const [count, setCount] = useState<number>(5);
    const [picks, setPicks] = useState<IGame[]>([]);

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
            id: lastId++,
            timestamp: new Date(),
            numbers: results as PickedNumbers
        }]);
    }

    const handleGetNumbers = () => {
        for (let i = 0; i < (count ?? 1); i++) {
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

    const handleChangeCount = (value: string) => {
        const nextCount = Number(value);
        setCount(nextCount);
    }

    const handleReset = () => {
        const message = "번호들을 전부 지우실건가요?";

        if (picks.length > 0 && window.confirm(message)) {
            setPicks([]);
        }
    }

    return (
        <React.Fragment>
            <Header />
            <Contents>
                <Games>
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
                </Games>
                <Panel>
                    <Field
                        value={String(count ?? "")}
                        placeholder="추가 할 개수"
                        onChange={handleChangeCount}
                    />
                    <Button
                        icon={iconAdd}
                        onClick={handleGetNumbers}
                    >추가하기</Button>
                    <Button
                        icon={iconReset}
                        onClick={handleReset}
                    >초기화</Button>
                </Panel>
            </Contents>
            <Footer />
        </React.Fragment>
    );
}

export default App;