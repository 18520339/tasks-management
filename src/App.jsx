/* jshint esversion: 9 */
/* eslint-disable */

import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { SearchCtrl, SortCtrl } from "./components/TaskControls";

function App() {
    const [tasks, setTasks] = useState([]);
    const [isDisplayForm, setIsDisplayForm] = useState(false);
    const [keyword, setKeyword] = useState('');
    const [sortCondition, setSortCondition] = useState({ by: 'name', value: 1 });
    const [taskEdited, setTaskEdited] = useState(null);

    const saveTasks = newTasksList => {
        setTasks(newTasksList);
        localStorage.setItem("tasks", JSON.stringify(newTasksList));
    };

    /* ------------------------- Task Form -----------------------*/

    const onShowForm = () => setIsDisplayForm(true);
    const onCloseForm = () => setIsDisplayForm(false);

    const onToggleForm = () => {
        if (isDisplayForm && taskEdited) setIsDisplayForm(true);
        else setIsDisplayForm(!isDisplayForm);
        setTaskEdited(null);
    };

    const onSubmitForm = newTask => {
        var newTasksList = [...tasks];
        if (newTask.id == "") {
            newTask.id = generateId();
            newTasksList.push(newTask);
        } else {
            var index = newTasksList.findIndex(task => task.id == newTask.id);
            newTasksList[index] = newTask;
        }
        saveTasks(newTasksList);
    };
    /* ---------------------------------------------------------- */

    /* ------------------------- Task List -----------------------*/

    const randomId = () => Math.floor(Math.random() * 0x10000).toString(16);
    const generateId = () => [randomId(), randomId(), randomId()].join("-");

    const onGenerateTasks = () => {
        var randomTasks = [
            { id: generateId(), name: "1 vợ", status: true },
            { id: generateId(), name: "2 con", status: false },
            { id: generateId(), name: "3 lầu", status: false },
            { id: generateId(), name: "4 bánh", status: true },
            { id: generateId(), name: "5 sao", status: false },
            { id: generateId(), name: "6 số", status: true }
        ];
        saveTasks([...tasks, ...randomTasks]);
    };
    const onDeleteAllTasks = () => saveTasks([]);

    const onSearch = keyword => setKeyword(keyword);
    const onSort = sort => setSortCondition({...sortCondition, by: sort.by, value: sort.value});

    const onUpdateStatus = id => {
        var index = tasks.findIndex(task => task.id == id);
        if (index != -1) {
            tasks[index].status = !tasks[index].status;
            saveTasks([...tasks]);
        }
    };

    const onEditTask = id => {
        var index = tasks.findIndex(task => task.id == id);
        setTaskEdited(tasks[index]);
        onShowForm();
    };
    const onDeleteTask = id => {
        var index = tasks.findIndex(task => task.id == id);
        if (index != -1) {
            tasks.splice(index, 1);
            setTaskEdited(null);
            saveTasks([...tasks]);
        }
    };

    useEffect(() => {
        var tasksInCookies = localStorage.getItem("tasks");
        if (localStorage && tasksInCookies) {
            tasksInCookies = JSON.parse(tasksInCookies);
            setTasks([...tasks, ...tasksInCookies]);
        }
    }, []);
    /* ---------------------------------------------------------- */

    return (
        <div className="container">
            <div className="text-center">
                <h1>Tasks Management</h1>
                <hr />
            </div>
            <div className="row">
                {isDisplayForm && (
                    <div className="col-sm-4 col-md-4 col-lg-4 visible-sm-block visible-md-block visible-lg-block">
                        <TaskForm
                            taskEdited={taskEdited}
                            onSubmitForm={onSubmitForm}
                            onShow={onShowForm}
                            onClose={onCloseForm}
                        />
                    </div>
                )}
                <div
                    className={
                        isDisplayForm
                            ? "col-sm-8 col-md-8 col-lg-8 "
                            : "col-sm-12 col-md-12 col-lg-12 col-xs-12"
                    }
                >
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={onToggleForm}
                    >
                        <i className="fas fa-plus"></i>
                        &nbsp; Add task
                    </button>
                    &nbsp;
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={onGenerateTasks}
                    >
                        <i className="fas fa-random"></i>
                        &nbsp; Generate tasks
                    </button>
                    &nbsp;
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={onDeleteAllTasks}
                    >
                        <i className="far fa-calendar-times"></i>
                        &nbsp; Delete all tasks
                    </button>
                    <div className="row">
                        <br />
                        {isDisplayForm && (
                            <div className="col-xs-12 visible-xs-block">
                                <TaskForm
                                    taskEdited={taskEdited}
                                    onSubmitForm={onSubmitForm}
                                    onShow={onShowForm}
                                    onClose={onCloseForm}
                                />
                            </div>
                        )}
                    </div>
                    <div className="row">
                        <div className="col-xs-7 col-sm-8 col-md-8 col-lg-8">
                            <SearchCtrl onSearch={onSearch} />
                        </div>
                        <div className="col-xs-5 col-sm-4 col-md-4 col-lg-4">
                            <SortCtrl onSort={onSort} />
                        </div>
                    </div>
                    <div className="row">
                        <br />
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <TaskList
                                tasks={tasks}
                                keyword={keyword}
                                sort={sortCondition}
                                onUpdateStatus={onUpdateStatus}
                                onEditTask={onEditTask}
                                onDeleteTask={onDeleteTask}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
/* eslint-enable */
