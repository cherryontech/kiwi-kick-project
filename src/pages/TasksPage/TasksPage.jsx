import heroImg from "../../assets/heroImg.png";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import AddTaskModal from "../../components/AddTaskModal/AddTaskModal";
import TaskCard from "../../components/TaskCard/TaskCard";


const TasksPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    const openModal = (e) => {
        e.preventDefault();
        setShowModal(true)
    }

    useEffect(() => {
        if (!localStorage["tasks"]) {
            localStorage["tasks"] = "[]";
        }

        let tasks = localStorage["tasks"];
        tasks = JSON.parse(tasks);
        setTaskList(tasks)
    }, []);

    return (
        <section className="bg-background w-[100vw] h-[100vh] p-4">
            <div className="w-[100%] flex justify-between items-center border-b border-divider pb-2">
                <h4 className="text-header4">Tasks</h4>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" fill="#0F0129" />
                </svg>
            </div>
            {
                (!taskList[0] || !taskList[0].task) ?
                    <div className="h-[650px] flex flex-col justify-center items-center gap-4">
                        <img src={heroImg} alt="a graphic with a girl standing next to big phone, managing tasks" className="w-[200px]" />
                        <h5 className="text-subtitle">Start adding your tasks!</h5>
                        <p className="text-caption text-light-text text-center w-[200px]">Plan your day by adding tasks and allocating your energy among them.</p>
                    </div>
                    :
                    <div>
                        <ul>
                            {taskList.map((task) => {
                                return (
                                    <li key={task.id}> <TaskCard task={task} /></li>
                                )
                            })}
                        </ul>
                    </div>
            }
            <button className="flex gap-3 fixed bottom-px right-px p-4 m-4 shadow-box-shadow rounded-2xl bg-primary" onClick={openModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#0F0129" />
                </svg>
                <p className="text-button-text">Add Task</p>
            </button>
            {showModal && createPortal(
                <AddTaskModal setShowModal={setShowModal} />,
                document.body
            )}

        </section>
    )
}


export default TasksPage;