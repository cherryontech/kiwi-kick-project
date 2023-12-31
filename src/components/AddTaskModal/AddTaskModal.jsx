import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react/prop-types
const AddTaskModal = ({ setShowModal, remainingSpoons, handleTaskAdded }) => {
    const [activeButton, setActiveButton] = useState(true);
    const [taskName, setTaskName] = useState('');
    const [spoons, setSpoons] = useState("");
    const [selectedPriority, setSelectedPriority] = useState("Priority");
    const [openDropdown, setOpenDropdown] = useState(false);
    const [openTooltip, setOpenTooltip] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    
    const backgroundColors = {
        High: "primary1",
        Medium: "primary3",
        Low: "primary4",
    }
   
    
    const handleChangeTask = (e) => {
        let newTask = e.target.value;
        newTask = newTask.replaceAll("  ", " ");

        if(newTask !== "" && newTask !== " ") {
            setActiveButton(false)
            setErrorMessage(false)
        } else {
            setActiveButton(true)
        }

        if(newTask === " ") {
            setErrorMessage(true)
        } else {
            setErrorMessage(false)
        }

        setTaskName(newTask);
    }

    const handleChangeSpoons = (e) => {
        if(e.target.value > 99) {
            let shortValue = e.target.value.slice(0,1)
            return shortValue
        }

        if( (remainingSpoons - e.target.value) < 0) {
            toast.error("You don't have enough spoons available.", {toastId: "notEnoughSpoons"})
        }

        if(e.target.value > remainingSpoons) {
            setActiveButton(true)
        } else if (e.target.value <= remainingSpoons && taskName === "" ){
            setActiveButton(true)
        }
        else {
            setActiveButton(false)
        }
        setSpoons(e.target.value)
        // if (e.target.value === "") {
        //     setSpoons(0)
        // } else {
        //     setSpoons(e.target.value);   
        // }
    }

    const newTask = {
        id: Date.now(),
        task: taskName,
        spoons: Number(spoons),
        checked: false,
        priority: selectedPriority,
        background: backgroundColors[selectedPriority],
    }

    const handleClear = (e) => {
        e.preventDefault();
        setTaskName('');
        setActiveButton(true);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' 
            && taskName !== "" 
            && (remainingSpoons - spoons) >= 0 
            && taskName !== " ") {
          handleSubmit(e);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if((newTask.checked === undefined) || (newTask.spoons === undefined) || (newTask.priority === undefined)) {
            return;
        }
        let tasks = localStorage["tasks"];
        tasks = JSON.parse(tasks);
        tasks.push(newTask);
        localStorage["tasks"] = JSON.stringify(tasks);
        handleTaskAdded();
        setShowModal(false);
    }
        
    const handleOpenTooltip = (e) => {
        e.preventDefault();
        if(openTooltip === false){
            setOpenTooltip(true)
        } else {
            setOpenTooltip(false)
        }  
    }

    const handleOpenDropdown = (e) => {
        e.preventDefault();
        if(openDropdown === false) {
            setOpenDropdown(true)
        } else {
            setOpenDropdown(false)
        }
    }

    const handleSelectedPriority = (e) => {
        e.preventDefault();
        setSelectedPriority(e.target.value);
        setOpenDropdown(false);
    }
    
    return (
        <section className="bg-text1 w-[100vw] h-[100vh] flex justify-center items-center fixed top-0 z-[5]" onClick={() => setShowModal(false)}>
            <article className="bg-background w-[328px] md:w-[552px] p-6 md:pb-14 rounded-4xl md:rounded-xl" onClick={e => e.stopPropagation()}>
                <form onSubmit={handleSubmit}>
                    <h4 className="text-header4 md:text-header3 mt-0 mb-2 md:mb-8">Add Task</h4>
                    <div className="w-[100%] flex flex-col relative flex-start mb-4">
                        <label htmlFor="taskName" className="text-subtitle px-3 mb-1"><span className="absolute text-2 top-0 left-0">*</span>Task Name</label>
                        <div className="relative">
                            <input 
                                name="task" 
                                type="text" 
                                id="taskName" 
                                className="border-solid border border-text3 rounded h-12 text-caption md:text-body p-4 pr-10 w-[100%]"
                                placeholder="Type the name of your task"
                                value={taskName}
                                onChange={handleChangeTask}
                                onKeyDown={handleKeyDown}
                                required
                            />
                            <div className={(taskName === "")? "hidden" : "absolute top-3 right-2"}>
                                <button onClick={handleClear}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.5 2C6.97 2 2.5 6.47 2.5 12C2.5 17.53 6.97 22 12.5 22C18.03 22 22.5 17.53 22.5 12C22.5 6.47 18.03 2 12.5 2ZM12.5 20C8.09 20 4.5 16.41 4.5 12C4.5 7.59 8.09 4 12.5 4C16.91 4 20.5 7.59 20.5 12C20.5 16.41 16.91 20 12.5 20ZM12.5 10.59L16.09 7L17.5 8.41L13.91 12L17.5 15.59L16.09 17L12.5 13.41L8.91 17L7.5 15.59L11.09 12L7.5 8.41L8.91 7L12.5 10.59Z" fill="#0F0129"/>
                                    </svg>
                                </button>
                            </div>
                            {errorMessage? 
                                <p className="text-caption text-error px-4">Not a valid entry, enter characters</p>
                                :
                                <p></p>
                            }
                        </div>
                    </div>
                    <div className="pb-4">
                        <div className="flex items-center gap-2 mb-1">
                            <h5 className="text-subtitle">Assign spoons</h5>
                            <div className="relative flex justify-center items-center">
                            {openTooltip? 
                                <div className="bg-text px-2 py-1 rounded w-[168px] absolute z-20 bottom-[36px] left-[0px]" onClick={() => setOpenTooltip(false)}>
                                    <p className="text-caption text-background">You can assign a number of spoons to indicate the energy this task might take. Ideally everyday you try not to go over 12 spoons.</p>
                                </div>
                                :
                                <div className="hidden bg-text px-2 py-1 rounded w-[168px] absolute z-20 bottom-[36px] left-[0px]" onClick={() => setOpenTooltip(false)}>
                                    <p className="text-caption text-background">You can assign a number of spoons to indicate the energy this task might take. Ideally everyday you try not to go over 12 spoons.</p>
                                </div>
                            } 
                            {(window.innerWidth < 768)?
                                <button onClick={handleOpenTooltip}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M11 17H13V11H11V17ZM12 9C12.2833 9 12.521 8.904 12.713 8.712C12.905 8.52 13.0007 8.28267 13 8C13 7.71667 12.904 7.479 12.712 7.287C12.52 7.095 12.2827 6.99933 12 7C11.7167 7 11.479 7.096 11.287 7.288C11.095 7.48 10.9993 7.71733 11 8C11 8.28333 11.096 8.521 11.288 8.713C11.48 8.905 11.7173 9.00067 12 9ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6867 5.825 19.9743 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26333 14.6833 2.00067 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31333 6.88333 4.02567 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26333 10.6167 2.00067 12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31333 18.175 4.02567 19.075 4.925C19.975 5.825 20.6877 6.88333 21.213 8.1C21.7383 9.31667 22.0007 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6867 17.1167 19.9743 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7383 13.3833 22.0007 12 22Z" fill="black"/>
                                    </svg>
                                </button>
                                :
                                <button onClick={handleOpenTooltip} onMouseEnter={() => setOpenTooltip(true)} onMouseLeave={() => setOpenTooltip(false)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M11 17H13V11H11V17ZM12 9C12.2833 9 12.521 8.904 12.713 8.712C12.905 8.52 13.0007 8.28267 13 8C13 7.71667 12.904 7.479 12.712 7.287C12.52 7.095 12.2827 6.99933 12 7C11.7167 7 11.479 7.096 11.287 7.288C11.095 7.48 10.9993 7.71733 11 8C11 8.28333 11.096 8.521 11.288 8.713C11.48 8.905 11.7173 9.00067 12 9ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6867 5.825 19.9743 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26333 14.6833 2.00067 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31333 6.88333 4.02567 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26333 10.6167 2.00067 12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31333 18.175 4.02567 19.075 4.925C19.975 5.825 20.6877 6.88333 21.213 8.1C21.7383 9.31667 22.0007 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6867 17.1167 19.9743 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7383 13.3833 22.0007 12 22Z" fill="black"/>
                                    </svg>
                                </button>
                            }
                            </div>
                        </div>
                        <div className="flex gap-2 justify-between md:justify-start md:gap-8 items-center">
                            <div className="flex gap-2 p-2 justify-between items-center border border-text3 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.0301 13.7391L4.42206 7.70506C4.16367 7.50039 3.9515 7.24338 3.79949 6.9509C3.64747 6.65842 3.55905 6.33709 3.54003 6.00801C3.521 5.67893 3.57181 5.34955 3.68911 5.04151C3.80641 4.73346 3.98754 4.4537 4.22062 4.22062C4.4537 3.98754 4.73346 3.80641 5.04151 3.68911C5.34955 3.57181 5.67893 3.521 6.00801 3.54003C6.33709 3.55905 6.65842 3.64747 6.9509 3.79949C7.24338 3.9515 7.50039 4.16367 7.70506 4.42206L13.7391 12.0301C15.0461 11.4591 17.0391 11.3821 18.7181 13.0601C19.7331 14.0761 20.3651 15.3181 20.5811 16.5001C20.7911 17.6501 20.6301 18.9261 19.7781 19.7781C18.9271 20.6301 17.6501 20.7911 16.5011 20.5811C15.3191 20.3651 14.0761 19.7331 13.0611 18.7171C11.3811 17.0381 11.4591 15.0461 12.0301 13.7391Z" fill="#001111" fillOpacity="0.5"/>
                                </svg>
                                <p className="text-caption">x</p>
                                <input 
                                    name="spoons"
                                    type="number"
                                    id="spoons"
                                    placeholder="0"
                                    className="text-body w-[54px] h-12 bg-primary4 p-4 rounded-lg text-center"
                                    value={spoons}
                                    onChange={handleChangeSpoons}
                                    onKeyDown={handleKeyDown}
                                />
                            </div>
                            <div className="flex justify-between gap-2">
                                <p className="text-body-small">Available Spoons:</p>
                                <p className={
                                    ((remainingSpoons - Number(spoons)) > 0)? 
                                    "text-body-small" 
                                    : 
                                    "text-body-small text-error"
                                }>{
                                    remainingSpoons - Number(spoons) 
                                }</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative pb-4">
                        <h5 className="text-subtitle mb-1">Assign priority</h5>
                        <div>
                            <button className={`bg-${backgroundColors[selectedPriority]} w-[151px] flex justify-between items-center text-body border-[1px] border-text3 px-4 py-[10px] rounded-lg text-text1`} onClick={handleOpenDropdown}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M14 3.00001V10.5C13.9996 10.5712 13.984 10.6415 13.9543 10.7061C13.9245 10.7708 13.8813 10.8284 13.8275 10.875C12.8725 11.7019 11.9594 12 11.0887 12C9.90687 12 8.80312 11.4538 7.77625 10.9469C6.11687 10.125 4.67438 9.41314 3 10.7356V13.5C3 13.6326 2.94732 13.7598 2.85355 13.8536C2.75979 13.9473 2.63261 14 2.5 14C2.36739 14 2.24021 13.9473 2.14645 13.8536C2.05268 13.7598 2 13.6326 2 13.5V3.00001C2.00048 2.92878 2.01617 2.85847 2.04603 2.7938C2.07589 2.72913 2.11922 2.67158 2.17313 2.62501C4.42313 0.676263 6.4425 1.67439 8.2225 2.55501C9.9375 3.40376 11.4244 4.13751 13.1725 2.62501C13.2448 2.56238 13.3335 2.52178 13.4281 2.50802C13.5227 2.49427 13.6193 2.50793 13.7064 2.5474C13.7935 2.58687 13.8674 2.65049 13.9195 2.73071C13.9715 2.81093 13.9995 2.90439 14 3.00001Z" fill="#001111" fillOpacity="0.75"/>
                                </svg>
                                {selectedPriority}
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.625 9L12.625 17L4.625 9L6.625 7L12.625 13L18.625 7L20.625 9Z" fill="#001111" fillOpacity="0.75"/>
                                </svg>
                            </button>
                            <ul className={openDropdown? "absolute top-[75px] w-[151px] rounded-lg bg-background text-body" : "hidden"}>
                                <li>
                                    <button value="High" onClick={handleSelectedPriority} className="w-full text-start bg-primary1 px-2 py-2.5 hover:bg-primary-text focus:bg-primary-text focus:outline-none text-text1">High</button>
                                </li>
                                <li>
                                    <button value="Medium" onClick={handleSelectedPriority} className="w-full text-start bg-primary3 px-2 py-2.5 hover:bg-primary focus:bg-primary focus:outline-none text-text1">Medium</button>
                                </li>
                                <li>
                                    <button value="Low" onClick={handleSelectedPriority} className=" w-full text-start bg-primary4 px-2 py-2.5 hover:bg-primary1 focus:bg-primary1 focus:outline-none text-text1">Low</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-end gap-2">
                        <button type="submit" className="btn-modal" onClick={() => setShowModal(false)}>Cancel</button>
                        <button disabled={activeButton} className="btn-modal text-primary-text">Add</button>
                    </div>
                </form>
            </article>
        </section>
    )
}

export default AddTaskModal;