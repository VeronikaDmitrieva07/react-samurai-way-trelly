import {useTaskDetails} from "../bll/useTaskDetails.ts";
import styles from "./TaskDetails.module.css";

type Props = {
    taskId: string | null
    boardId: string | null
}

export const TaskDetails = ({taskId, boardId}: Props) => {
   const { taskDetails } = useTaskDetails(taskId, boardId);

   return (
        <div className={styles.task}>
            <h2>Task details</h2>
            {!taskDetails && !taskId && "Task is not selected"}
            {!taskDetails && taskId && "Loading..."}
            {taskDetails && taskId && taskDetails.id !== taskId && "Loading..."}
            {taskDetails && <ul>
                <li>title - {taskDetails.attributes.title}</li>
                <li>boardTitle - {taskDetails.attributes.boardTitle}</li>
                <li>description - {taskDetails.attributes.description ?? "no description"}</li>
            </ul>

            }
        </div>
    );
};