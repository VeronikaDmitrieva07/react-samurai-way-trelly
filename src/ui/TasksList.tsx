import '../App.css'
import {TaskItem} from "./TaskItem.tsx";
import {useTasks} from "../bll/useTasks.ts";

type Props = {
    onTaskSelect: (taskId: string | null, boardId: string | null) => void;
    selectedTaskId: string | null
}


export const TasksList = ({onTaskSelect, selectedTaskId}: Props) => {
    const { tasks } = useTasks()

    if (tasks === null) {
        return <span>Загрузка...</span>
    }

    if (tasks.length === 0) {
        return <span>Задачи отсутствуют</span>
    }

    const handleResetClick = () => {
        onTaskSelect?.(null, null)
    }

    const handleClick = (taskId: string, boardId: string) => {
        onTaskSelect?.(taskId, boardId)
    }

    return (
        <div>
            <button onClick={handleResetClick}>reset</button>
            <ul>
                {
                    tasks.map(task => {
                            return (
                                <TaskItem key={task.id}
                                          task={task}
                                          onClickTaskSelect={handleClick}
                                          isSelected={task.id === selectedTaskId}
                                />
                            )
                        }
                    )
                }
            </ul>
        </div>

    );
};


