import React, { useState } from 'react';

const TaskItem = ({ task, onUpdateTask, onDeleteTask, onToggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const handleEdit = () => {
    onUpdateTask(task.id, { name: editedName, description: editedDescription });
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          ></textarea>
          <button onClick={handleEdit}>Enregistrer</button>
        </div>
      ) : (
        <div>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <button onClick={() => onToggleComplete(task.id)}>
            {task.completed ? 'Réactiver' : 'Terminer'}
          </button>
          <button onClick={() => setIsEditing(true)}>Modifier</button>
          <button onClick={() => onDeleteTask(task.id)}>Supprimer</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
