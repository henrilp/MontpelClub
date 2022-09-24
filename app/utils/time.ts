/**
 * Waits a given amount of time
 * @param time time in seconds
 */
export function wait(time: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, time * 1000))
}

/**
 * Debounces the execution of a function
 * @param callback
 * @param ms
 * @returns
 */
export function debounce<T extends (...args: any[]) => any>(
  callback: T,
  ms: number,
): (...args: Parameters<T>) => Promise<ReturnType<T>> {
  let timer: NodeJS.Timeout | undefined

  return (...args: Parameters<T>) => {
    if (timer) {
      clearTimeout(timer)
    }
    return new Promise<ReturnType<T>>((resolve) => {
      timer = setTimeout(() => {
        const returnValue = callback(...args) as ReturnType<T>
        resolve(returnValue)
      }, ms)
    })
  }
}
