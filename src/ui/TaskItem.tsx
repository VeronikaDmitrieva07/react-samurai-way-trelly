import type {TasksItemOutput} from "../dal/api.ts";
import styles from "./TaskItem.module.css"
import clsx from "clsx";

type Props = {
    task: TasksItemOutput
    isSelected: boolean
    onClickTaskSelect: (taskId: string, boardId: string) => void
}

export function TaskItem({task, isSelected, onClickTaskSelect}: Props) {
    const handleClick = () => onClickTaskSelect?.(task.id, task.attributes.boardId)

    const taskClassName = clsx({
        [styles.task]: true,
        [styles.default]: !isSelected,
        [styles.highPriority]: task.attributes.status === 2,
        [styles.selected]: isSelected,
    })

    const titleClassName = clsx({
[styles.title]: task.attributes.status === 2,
    })

    return (
        <div key={task.id} className={taskClassName} onClick={() => handleClick()}>
            <div>
                <p>
                    <b>Заголовок</b>: <span className={titleClassName}>{task.attributes.title}</span>
                </p>
                <b>Статус</b>: <input type="checkbox" checked={task.attributes.status === 2} />
                <p>
                    <b>Дата создания задачи</b>: {new Date(task.attributes.addedAt).toLocaleDateString()}
                </p>
            </div>
        </div>
    )
}