import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description) {
      alert('Veuillez remplir tous les champs.');
      return;
    }
    onAddTask({ name, description });
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Nom de la tâche"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Ajouter une tâche</button>
    </form>
  );
};

export default TaskForm;
