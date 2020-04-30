import React from 'react';

import Stage from './Stage';

const Board = ({ stagesNames, stagesTasks, handlerClick }) => {
  return (
    <div>
      <h1>Kanban board</h1>
      <div style={{
        display: 'flex',
      }}>
        {stagesTasks.map((tasks, idx) => (
          <Stage
            handlerClick={handlerClick}
            stageId={idx}
            key={stagesNames[idx]}
            name={stagesNames[idx]}
            tasks={tasks}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
