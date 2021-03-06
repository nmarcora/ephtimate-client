export function setState(state) {
    return {
        type: 'SET_STATE',
        state
    }
}

export function vote(estimate, hasVoted) {
    return {
        meta: {remote: true},
        type: 'VOTE',
        estimate,
        hasVoted
    }
}

export function reveal() {
    return {
        meta: {remote: true},
        type: 'REVEAL'
    }
}

export function estimate(title, estimation) {
    return {
        meta: {remote: true},
        type: 'ESTIMATE',
        estimate: estimation,
        title
    }
}

export function addTask(title) {
    return {
        meta: {remote: true},
        type: 'ADD_TASK',
        title
    }
}

export function cancelTask() {
    return {
        meta: {remote: true},
        type: 'CANCEL_TASK',
    }
}

export function clearTasks() {
    return {
        meta: {remote: true},
        type: 'CLEAR_TASKS',
    }
}
