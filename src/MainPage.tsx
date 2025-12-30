import {TasksList} from "./ui/TasksList.tsx";
import {TaskDetails} from "./ui/TaskDetails.tsx";
import {useTaskSelection} from "./bll/useTaskSelection.ts";
import styles from "./MainPage.module.css"

export function MainPage() {
   const {taskId, setTaskId, boardId, setBoardId} = useTaskSelection()

    const handleSelectTask = (taskId: string | null, boardId: string | null) => {
        setTaskId(taskId);
        setBoardId(boardId);
    }
    return (
        <div className={styles.container}>
            <TasksList onTaskSelect={handleSelectTask} selectedTaskId={taskId}/>
            <TaskDetails taskId={taskId} boardId={boardId}/>
        </div>
    )
}