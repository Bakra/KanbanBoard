import React, { Component } from 'react';

class Controls extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { selectedTask, handleStage, forward, backward } = this.props
    return (
      <div style={{ padding: '1rem', background: '#D6F3FF' }}>
        <h1>Controls</h1>
        <div style={{ display: 'flex', marginTop: '1rem' }}>
          <input
            readOnly
            value={selectedTask.name}
            placeholder="Selected task name"
            style={{ fontSize: '1rem' }}
            data-testid="selected-task-field"
          />
          <button
            onClick={ ()=> handleStage('backward')}
            style={{ marginLeft: '1rem' }}
            disabled = {backward}
            data-testid="move-back-btn"
          >
            Move back
          </button>
          <button
            onClick={() => handleStage('forward')}
            style={{ marginLeft: '1rem' }}
            disabled = {forward}
            data-testid="move-forward-btn"
          >
            Move forward
          </button>
        </div>
      </div>
    )
  }
}

export default Controls;
