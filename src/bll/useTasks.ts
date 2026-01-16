import {getTasks, type TasksItemOutput} from "../dal/api.ts";
import {useEffect, useState} from "react";

export function useTasks() {
    const [tasks, setTasks] = useState<Array<TasksItemOutput> | null>(null);

    useEffect(() => {

        getTasks()
            .then(json => setTasks(json.data))
    }, [])
    return {tasks}
}