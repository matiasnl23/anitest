export default function chunkData<T>(size: number, data: T[]): Array<T[]> {
    const resultArray: Array<T[]> = [];

    data.forEach((value, index) => {
        const currIdx = Math.floor(index / size);

        if (!resultArray[currIdx]) {
            resultArray[currIdx] = [];
        }

        resultArray[currIdx].push(value);
    });

    return resultArray;
}
