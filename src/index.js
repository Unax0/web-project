import React from "react";
import { createRoot } from "react-dom/client"; // Убираем лишний импорт

const TodoList = () => {
    const items = ['Install React', 'Study React', 'Use React', 'Build React App'];
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

const AppHeader = () => {
    return <h1>My Todo List</h1>;
};

const SearchPanel = () => {
    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '20px'
    };

    return <input style={searchStyle} placeholder={searchText} disabled={true} />;
};

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
