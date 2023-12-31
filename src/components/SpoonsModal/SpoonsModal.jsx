import SpoonChart from "../SpoonChart/SpoonChart";


// eslint-disable-next-line react/prop-types
const SpoonsModal = ({setShowSpoonsModal, remainingSpoons, usedSpoons, plannedSpoons}) => {
    
    const handleKeyDown = (e) => {
        if (e.keyCode === 27) {
        setShowSpoonsModal(false);
        }
        }

    return (
        <section className="flex flex-col items-center bg-background h-full w-full fixed top-0 px-4 z-10 overflow-scroll">
            <button autoFocus className="p-2.5 md:pl-10 xl:px-[65px] my-6 mt-16 self-end" onClick={() => setShowSpoonsModal(false)} onKeyDown={handleKeyDown}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="md:hidden">
                    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="black"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" className="hidden md:block">
                    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="black"/>
                </svg>
            </button>
            <div className="w-[100%] flex justify-between items-center border-b md:border-none border-text3 px-2 md:px-[92px] xl:px-0 pb-2 xl:w-[750px]">
                <h4 className="text-header4 xl:text-start md:text-header3">Spoons</h4>
            </div>
            <p className="text-body md:text-[24px] text-center xl:text-start pt-6 pb-8 md:pb-[56px] px-2 md:w-[390px] xl:px-0 xl:w-[750px]">Each day, you can use up to 12 spoons, but using them all is not necessary.</p>
            <div className="center-column xl:flex-row xl:justify-between xl:gap-4 xl:max-w-[750px] xl:w-full">
                <SpoonChart 
                    data-testid="spoonChart"
                    remainingSpoons={remainingSpoons} 
                    usedSpoons={usedSpoons}
                    plannedSpoons={plannedSpoons}
                /> 
                <div className="center-column">
                    <div className="flex flex-col gap-2 my-4 w-[200px] md:w-full">
                        <div className="flex justify-between w-full rounded-lg bg-primary3 py-1 md:py-2">
                            <div className="flex items-center gap-1 px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.02254 8.30429L1.31654 3.77879C1.12275 3.62529 0.963628 3.43253 0.849617 3.21317C0.735606 2.99381 0.669289 2.75281 0.655021 2.50601C0.640753 2.2592 0.678857 2.01217 0.766831 1.78113C0.854805 1.55009 0.990658 1.34028 1.16547 1.16547C1.34028 0.990658 1.55009 0.854805 1.78113 0.766831C2.01217 0.678857 2.2592 0.640753 2.50601 0.655021C2.75281 0.669289 2.99381 0.735606 3.21317 0.849617C3.43253 0.963628 3.62529 1.12275 3.77879 1.31654L8.30429 7.02254C9.28454 6.59429 10.7793 6.53654 12.0385 7.79504C12.7998 8.55704 13.2738 9.48854 13.4358 10.375C13.5933 11.2375 13.4725 12.1945 12.8335 12.8335C12.1953 13.4725 11.2375 13.5933 10.3758 13.4358C9.48929 13.2738 8.55704 12.7998 7.79579 12.0378C6.53579 10.7785 6.59429 9.28454 7.02254 8.30429Z" fill="#0F0129"/>
                                </svg>
                                <p className="text-caption md:text-body">x</p>
                                <p className="text-caption md:text-body">{usedSpoons}</p>
                            </div>
                            <p className="text-caption md:text-body text-end px-4">Used</p>
                        </div>
                        <div className="flex justify-between w-full rounded-lg bg-primary2 py-1 md:py-2">
                            <div className="flex items-center gap-1 px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.02254 8.30429L1.31654 3.77879C1.12275 3.62529 0.963628 3.43253 0.849617 3.21317C0.735606 2.99381 0.669289 2.75281 0.655021 2.50601C0.640753 2.2592 0.678857 2.01217 0.766831 1.78113C0.854805 1.55009 0.990658 1.34028 1.16547 1.16547C1.34028 0.990658 1.55009 0.854805 1.78113 0.766831C2.01217 0.678857 2.2592 0.640753 2.50601 0.655021C2.75281 0.669289 2.99381 0.735606 3.21317 0.849617C3.43253 0.963628 3.62529 1.12275 3.77879 1.31654L8.30429 7.02254C9.28454 6.59429 10.7793 6.53654 12.0385 7.79504C12.7998 8.55704 13.2738 9.48854 13.4358 10.375C13.5933 11.2375 13.4725 12.1945 12.8335 12.8335C12.1953 13.4725 11.2375 13.5933 10.3758 13.4358C9.48929 13.2738 8.55704 12.7998 7.79579 12.0378C6.53579 10.7785 6.59429 9.28454 7.02254 8.30429Z" fill="#0F0129"/>
                                </svg>
                                <p className="text-caption md:text-body">x</p>
                                <p className="text-caption md:text-body">{plannedSpoons}</p>
                            </div>
                            <p className="text-caption md:text-body text-end px-4">Planned</p>
                        </div>
                        <div className="flex justify-between w-full rounded-lg bg-primary py-1 md:py-2">
                            <div className="flex items-center gap-1 px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7.02254 8.30429L1.31654 3.77879C1.12275 3.62529 0.963628 3.43253 0.849617 3.21317C0.735606 2.99381 0.669289 2.75281 0.655021 2.50601C0.640753 2.2592 0.678857 2.01217 0.766831 1.78113C0.854805 1.55009 0.990658 1.34028 1.16547 1.16547C1.34028 0.990658 1.55009 0.854805 1.78113 0.766831C2.01217 0.678857 2.2592 0.640753 2.50601 0.655021C2.75281 0.669289 2.99381 0.735606 3.21317 0.849617C3.43253 0.963628 3.62529 1.12275 3.77879 1.31654L8.30429 7.02254C9.28454 6.59429 10.7793 6.53654 12.0385 7.79504C12.7998 8.55704 13.2738 9.48854 13.4358 10.375C13.5933 11.2375 13.4725 12.1945 12.8335 12.8335C12.1953 13.4725 11.2375 13.5933 10.3758 13.4358C9.48929 13.2738 8.55704 12.7998 7.79579 12.0378C6.53579 10.7785 6.59429 9.28454 7.02254 8.30429Z" fill="#0F0129"/>
                                </svg>
                                <p className="text-caption md:text-body">x</p>
                                <p className="text-caption md:text-body">{remainingSpoons}</p>
                            </div>
                            <p className="text-caption md:text-body text-end px-4">Available</p>
                        </div>
                    </div>
                    <div className="px-2 mt-8 md:w-[308px]">
                    {(remainingSpoons === 12)? 
                        <p className="text-body text-center"></p>
                        : 
                    (remainingSpoons < 12 && remainingSpoons > 8)? 
                        <p className="text-body text-center md:text-[24px]">{`You're excelling!  You have ${remainingSpoons} spoons available to use today!`}</p>
                        : 
                    (remainingSpoons < 9 && remainingSpoons > 2)?
                        <p className="text-body text-center md:text-[24px]">{`You're currently at a good spoon level. Remembering that you have just ${remainingSpoons} more spoons remaining. Please take care and consider your choices wisely.`}</p>
                        :
                    (remainingSpoons === 2)?
                        <p className="text-body text-center md:text-[24px]">{`Please remember that your objective is to manage your energy level effectively. At the moment, you have a total of only ${remainingSpoons} spoons at your disposal.`}</p>
                        :
                    (remainingSpoons === 1)?
                        <p className="text-body text-center md:text-[24px]">{`Please remember that your objective is to manage your energy level effectively. At the moment, you have a total of only ${remainingSpoons} spoon at your disposal.`}</p>
                        :
                        <p className="text-body text-center md:text-[24px]">{`At this moment, it appears that there are no spoons available. We kindly suggest taking a break today to recharge your energy levels.`}</p>
                    }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SpoonsModal;