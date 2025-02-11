import React from "react";
import ReactDOM from "react-dom/client";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () => {
    const todoData = [
        { label: "Drink Coffee", important: false, id: 1 },
        { label: "Implement React Application", important: true, id: 2 },
        { label: "Make notes from your stud", important: false, id: 3 },
        { label: "Do not drink alcohol", important: false, id: 4 },
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData} />
        </div>
    );
};

// Новый способ рендера в React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
