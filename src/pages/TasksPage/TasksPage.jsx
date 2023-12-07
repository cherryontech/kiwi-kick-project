/* eslint-disable react/prop-types */
import heroImg from "../../assets/heroImg.png";
import { useState } from "react";
import { createPortal } from "react-dom";
import AddTaskModal from "../../components/AddTaskModal/AddTaskModal";
import TaskCard from "../../components/TaskCard/TaskCard";
import WelcomePage from "../WelcomePage/WelcomePage";
import TutorialPage from "../../components/TutorialPage/TutorialPage";
import DeleteAllModal from "../../components/DeleteAllModal/DeleteAllModal"
import { ToastContainer, toast } from 'react-toastify';



const TasksPage = ({ 
    remainingSpoons, 
    setRemainingSpoons, 
    taskList, 
    setTaskList, 
    setTaskAdded, 
    taskRemoved, 
    setTaskRemoved, 
    taskEdited, 
    setTaskEdited, 
    highPriorityTasks, 
    mediumPriorityTasks, 
    lowPriorityTasks, 
    noPriorityTasks, 
    showWelcomePage, 
    setShowWelcomePage,
    showTutorialPage,
    setShowTutorialPage }) => {

    const [showModal, setShowModal] = useState(false);
    const [openDeleteAll, setOpenDeleteAll] = useState(false)

    const openModal = (e) => {
        e.preventDefault();
        setShowModal(true)
        setTaskAdded(false)
    };

    const removeTask = (id) => {
        let tasks = JSON.parse(JSON.stringify(taskList));
        tasks = tasks.filter((task) => task.id !== id);
        localStorage["tasks"] = JSON.stringify(tasks);
        setTaskList(tasks);
        if (taskRemoved === false) {
            setTaskRemoved(true)
        } else {
            setTaskRemoved(false)
        }
        toast.success("Your task has been deleted!", { theme: "colored", style: { backgroundColor: "#41993F", textAlign: 'center' }, toastId: "successEdit" });
    };

    const editChecked = (id) => {
        let tasks = JSON.parse(JSON.stringify(taskList));
        let editedTask = tasks.find((task) => task.id == id);

        if (editedTask.checked === false) {
            editedTask.checked = true;
            toast.success(`Great job! 🎉 You've successfully completed the task`, { theme: "colored", style: { backgroundColor: "#41993F", textAlign: 'center' }, toastId: "successChecked" })
        }
        else {
            editedTask.checked = false;
        }

        tasks = tasks.filter((task) => task.id != id);
        tasks.push(editedTask);
        localStorage["tasks"] = JSON.stringify(tasks);
        tasks = tasks.sort((a, b) => a.id - b.id)
        setTaskList(tasks)
    }
    const handleSkipTutorial = () => {
        localStorage.setItem("tutorial", "false");
        setShowWelcomePage(false)
    }

    const handleTaskAdded = () => {
        setTaskAdded(true);
        toast.success("Task created successfully", { theme: "colored", style: { backgroundColor: "#41993F", textAlign: 'center' }, toastId: "successAdd" });
    }

    const handleTaskEdited = () => {
        if (taskEdited === true) {
            setTaskEdited(false)
        } else {
            setTaskEdited(true)
        }
        toast.success("Your task has been edited successfully!", { theme: "colored", style: { backgroundColor: "#41993F", textAlign: 'center' }, toastId: "successEdit" });
    }

    const handleClearAllTasks = () => {
        localStorage["tasks"] = "[]";
        setTaskList([]);
        setOpenDeleteAll(false);

    }


    return (
        <section className="bg-background w-[100vw] h-[100vh] p-4 md:py-4 md:p-6 xl:px-24">
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                limit={1}
                role="alert"
            />
            <div className="w-[100%] flex justify-between items-center border-b border-text3 pb-2">
                <h4 className="text-header4">Tasks</h4>
                {taskList[0] && <button onClick={() => setOpenDeleteAll(true)} className="btn-modal text-primary-text">Clear All</button>}
            </div>
            {
                (!taskList[0] || !taskList[0].task) ?
                    <div className="h-[70%] flex flex-col justify-center items-center gap-4">
                        <img src={heroImg} alt="a graphic with a girl standing next to big phone, managing tasks" className="w-[200px]" />
                        <h5 className="text-subtitle">Start adding your tasks!</h5>
                        <p className="text-caption text-text1 text-center w-[200px]">Plan your day by adding tasks and allocating your energy among them.</p>
                    </div>
                    :
                    <div className="pt-2 pb-[100px] grid grid-cols-1 md:grid-cols-2 md:gap-x-6 xl:grid-cols-3 xl:gap-y-8">
                        <div className={`${(highPriorityTasks[0])? "" : "hidden"}`}>
                            <p className={`${(highPriorityTasks[0])? "text-small-body md:text-subtitle text-text1 py-2 md:py-4" : "hidden"}`}>High Priority</p>
                            <ul>
                                {highPriorityTasks.map((task) => {
                                    return (
                                        <li key={task.id}> <TaskCard task={task} onRemoveTask={removeTask} editChecked={editChecked} remainingSpoons={remainingSpoons} handleTaskEdited={handleTaskEdited} /></li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className={`${(mediumPriorityTasks[0])? "" : "hidden"}`}>
                            <p className={`${(mediumPriorityTasks[0])? "text-small-body md:text-subtitle text-text1 py-2 md:py-4" : "hidden"}`}>Medium Priority</p>
                            <ul>
                                {mediumPriorityTasks.map((task) => {
                                    return (
                                        <li key={task.id}> <TaskCard task={task} onRemoveTask={removeTask} editChecked={editChecked} remainingSpoons={remainingSpoons} handleTaskEdited={handleTaskEdited} /></li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className={`${(lowPriorityTasks[0])? "" : "hidden"}`}>
                            <p className={`${(lowPriorityTasks[0])? "text-small-body md:text-subtitle text-text1 py-2 md:py-4" : "hidden"}`}>Low Priority</p>
                            <ul>
                                {lowPriorityTasks.map((task) => {
                                    return (
                                        <li key={task.id}> <TaskCard task={task} onRemoveTask={removeTask} editChecked={editChecked} remainingSpoons={remainingSpoons} handleTaskEdited={handleTaskEdited} /></li>
                                    )
                                })}
                            </ul>
                        </div>
                       <div className={`${(noPriorityTasks[0])? "" : "hidden"}`}>
                        <p className={`${(noPriorityTasks[0])? "text-small-body md:text-subtitle text-text1 py-2 md:py-4" : "hidden"}`}>Other Tasks</p>
                        <ul>
                            {noPriorityTasks.map((task) => {
                                return (
                                    <li key={task.id}> <TaskCard task={task} onRemoveTask={removeTask} editChecked={editChecked} remainingSpoons={remainingSpoons} handleTaskEdited={handleTaskEdited} /></li>
                                )
                            })}
                        </ul>
                       </div>
                    </div>

            }
            <button className="flex gap-3 fixed bottom-6 right-4 p-4 md:mb-8 md:mx-6 xl:mx-24 shadow-box-shadow rounded-2xl bg-accent z-[3]" onClick={openModal}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#0F0129" />
                </svg>
                <p className="text-button-text">Add Task</p>
            </button>
            {showModal && createPortal(
                <AddTaskModal
                    setShowModal={setShowModal}
                    remainingSpoons={remainingSpoons}
                    setRemainingSpoons={setRemainingSpoons}
                    handleTaskAdded={handleTaskAdded} />,
                document.body
            )}
            {showWelcomePage && createPortal(
                <WelcomePage
                    handleSkipTutorial={handleSkipTutorial}
                    setShowTutorialPage={setShowTutorialPage}
                    setShowWelcomePage={setShowWelcomePage}
                />,
                document.body
            )}
            {showTutorialPage && createPortal(
                <TutorialPage
                    handleSkipTutorial={handleSkipTutorial}
                    setShowTutorialPage={setShowTutorialPage}
                />,
                document.body
            )}
            {openDeleteAll && createPortal(
                <DeleteAllModal
                    handleClearAllTasks={handleClearAllTasks}
                    setOpenDeleteAll={setOpenDeleteAll}
                />,
                document.body
            )}
        </section>
    )
}


export default TasksPage;