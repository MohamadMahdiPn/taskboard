import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import Headercomponent from './header/Header';
import Footercomponent from './Footer/footer';
import TasksList from './Task/Tasks';


class App extends Component {
  state = {
    AllTasks: [

    ],
    TaskTitle: '',
    TaskDescription: '',
    IsDone: false
  };

  handleAddTask = () => {

    const AllTasks = [...this.state.AllTasks]
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      taskTitle: this.state.TaskTitle,
      taskDescription: this.state.TaskDescription,
      IsDone: this.state.IsDone

    };

    AllTasks.push(newTask);
    this.setState({ AllTasks, TaskTitle: "" ,TaskDescription:"" })
    console.log(this.state.AllTasks)
  }

  setTask = event => {
    this.setState({ TaskTitle: event.target.value });
  }
  setTaskdescription = event => {
    this.setState({ TaskDescription: event.target.value });
  }



  render() {
    return (
      <div className="App">
        <Headercomponent />
        <div className='body-height mb-5 mt-5'>
          <div className='row container-fluid justify-content-center align-items-center'>
            <div className='col-md-3 mb-4'>

              <div className="form-group">
                <label>Task Title</label>
                <input type="text" value={this.state.TaskTitle} onChange={this.setTask} className="form-control" aria-describedby="helpId" placeholder="" />
              </div>
            </div>

            <div className='col-md-12 mb-4'>
              <div className="form-group">
                <label>Task Description</label>
                <textarea type="text" className="form-control" value={this.state.TaskDescription} onChange={this.setTaskdescription} aria-describedby="helpId" placeholder="" />
              </div>
            </div>

            <div className="form-group">
              <button className="btn btn-success col-md-2" onClick={this.handleAddTask} type="submit">Add Task</button>
            </div>
          </div>
          <TasksList GetAllTasks={this.state.AllTasks} />

        </div>
        <hr />

        <Footercomponent />
      </div>

    );

  }
}

export default App;
