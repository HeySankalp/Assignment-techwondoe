export function numToArray(n: number) {
    let array: any[] = []
    for (let i = 1; i <= n; i++) {
        array.push(i);
    }
    return array;
}