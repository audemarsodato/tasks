// this is temporary utilities for development
// and has not yet improve the structure of the code

export function isFull(targetQuadrant, tasks) {
        const maxTaskLength = 3
        const quadrantTasksCount = tasks.filter(task => task.quadrant === targetQuadrant && task.status === 'pending').length
        return quadrantTasksCount >= maxTaskLength
}