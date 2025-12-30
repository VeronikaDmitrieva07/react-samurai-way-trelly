import {getTask, type GetTaskDetailsOutputData} from "../dal/api.ts";
import {useEffect, useState} from "react";

export function useTaskDetails(selectedTaskId: string | null, boardId: string | null) {
    const [taskDetails, setTaskDetails] = useState<GetTaskDetailsOutputData | null>(null)

    useEffect(() => {
        if (!selectedTaskId) {
            setTaskDetails(null)
            return;
        }

        getTask(selectedTaskId, boardId)
            .then(json => {
                setTaskDetails(json.data)
            })
    }, [boardId, selectedTaskId]);

    return { taskDetails }
}