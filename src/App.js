import React, { Component } from 'react';
import './App.css';

import Controls from './components/Controls';
import Board from './components/Board';

const NUM_STAGES = 4;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
          { name: 'task 0', stage: 0 },
          { name: 'task 1', stage: 0 },
          { name: 'task 2', stage: 0 },
          { name: 'task 3', stage: 0 },
          { name: 'task 4', stage: 1 },
          { name: 'task 5', stage: 1 },
          { name: 'task 6', stage: 1 },
          { name: 'task 7', stage: 2 },
          { name: 'task 8', stage: 2 },
          { name: 'task 9', stage: 3 },
      ],
      selectedTask: {},
      forward: true,
      backward: true
    };
    this.stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done'];
  }

  handlerTaskClick = (value) => {
    if(value) {
      
      const {tasks} = this.state
      var taskobj = tasks.findIndex(obj => obj.name === value)
      debugger
      this.setState({ 
        selectedTask: tasks[taskobj], 
        forward: tasks[taskobj].stage === 3 ? true : false,
        backward: tasks[taskobj].stage === 0 ? true : false
      })
    }
    
  }

  handleStage = (arg) => {
    
    const { selectedTask, tasks } = this.state
      var taskobj = tasks.find(obj => obj.name === selectedTask.name)
      var index = tasks.findIndex(obj => obj.name === selectedTask.name)

      if(arg === 'forward'){
        var newStage = taskobj.stage + 1;
        this.setState({
          forward: newStage === 3 ? true : false,
          backward: false
        })
      }
      else{
        var newStage = taskobj.stage - 1;
          this.setState({
            forward: false,
            backward: newStage === 0 ? true : false
          })
      }

      var newTasks = tasks
      newTasks[index] = {...taskobj, stage:newStage}

      var taskobj = tasks.find(obj => obj.name === selectedTask.name)

      this.setState({
        tasks: newTasks,
        selectedTask: tasks[index]
      })
  }

  render() {

    const { tasks, selectedTask, forward, backward } = this.state;
    let stagesTasks = [];
    for (let i = 0; i < NUM_STAGES; ++i) {
      stagesTasks.push([]);
    }
    for (let task of tasks) {
      const stageId = task.stage;
      stagesTasks[stageId].push(task);
    }

    return (
      <div className="App">
        <Controls selectedTask={selectedTask} handleStage={this.handleStage} forward={forward} backward={backward}/>
        <Board
          handlerClick={this.handlerTaskClick}
          stagesTasks={stagesTasks}
          stagesNames={this.stagesNames}
        />
      </div>
    );
  }
}

export default App;
