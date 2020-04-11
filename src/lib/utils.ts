export const randomFrom = <T>(array: T[]) => array[Math.floor(Math.random() * array.length)]

export const wait = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms))
