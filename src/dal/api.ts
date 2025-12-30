export type GetTaskDetailsOutputData = {
    id: string
    attributes: {
        title: string
        boardTitle: string
        description: string | null
        boardId: string | null
    }
}

type GetTaskDetailsOutput = {
    data: GetTaskDetailsOutputData
}

const prepareHeaders = () => {
    const apiKey = import.meta.env.VITE_API_KEY
    if (!apiKey) return undefined

    return {
        'api-key': apiKey
    }
}

export const getTask = (taskId: string, boardId: string | null) => {
    const promise: Promise<GetTaskDetailsOutput> =  fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${taskId}`, {
        headers: prepareHeaders()
        }).then(res => res.json())
    return promise;
}


export type TasksItemOutputAttachments = {
    title: string
    priority: number
    status: number
    addedAt: string
    boardId: string
}

export type TasksItemOutput = {
    id: string
    attributes: TasksItemOutputAttachments
}

export type GetTasksItemOutput = {
    data: Array<TasksItemOutput>
}

export const getTasks = () => {
    const promise: Promise<GetTasksItemOutput> =  fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
        headers: prepareHeaders()
    }).then(res => res.json())
    return promise;
}