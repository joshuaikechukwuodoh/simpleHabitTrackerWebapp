import React, { useState } from "react";
import "./index.css";

function HabitTracker() {
  const [habits, setHabits] = useState([]);
  const [habit, setHabit] = useState("");

  const addHabit = () => {
    if (habit.trim() !== "") {
      setHabits([...habits, { name: habit, completed: false }]);
      setHabit("");
    }
  };

  const toggleCompletion = (index) => {
    setHabits(
      habits.map((h, i) =>
        i === index ? { ...h, completed: !h.completed } : h
      )
    );
  };

  return (
    <div className="habit-container">
      <h1 className="habit-title">Habit Tracker</h1>
      <div className="habit-input-container">
        <input
          type="text"
          value={habit}
          onChange={(e) => setHabit(e.target.value)}
          className="habit-input"
          placeholder="Enter a new habit"
        />
        <button onClick={addHabit} className="habit-add-button">Add</button>
      </div>
      <ul className="habit-list">
        {habits.map((h, index) => (
          <li key={index} className={`habit-item ${h.completed ? "completed" : ""}`}>
            {h.name}
            <button onClick={() => toggleCompletion(index)} className="habit-toggle-button">
              {h.completed ? "Undo" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HabitTracker;
