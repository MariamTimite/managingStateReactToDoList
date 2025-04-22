import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Charger les tâches depuis le stockage local
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Sauvegarder les tâches dans le stockage local
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Ajouter une tâche
  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  // Mettre à jour une tâche
  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task)));
  };

  // Supprimer une tâche
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Marquer une tâche comme terminée
  const toggleComplete = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <div className="app">
      <h1>Gestionnaire de tâches</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onUpdateTask={updateTask}
        onDeleteTask={deleteTask}
        onToggleComplete={toggleComplete}
      />
    </div>
  );
};

export default App;
