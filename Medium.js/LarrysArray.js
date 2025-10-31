function larrysArray(A) {
    let inversions = 0;

    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            if (A[i] > A[j]) {
                inversions++;
            }
        }
    }
    return inversions % 2 === 0 ? "YES" : "NO";
}
const testCases = [
    [1, 6, 5, 2, 4, 3], 
    [3, 1, 2],          
    [1, 3, 4, 2],       
];
testCases.forEach((test) => {
    console.log(larrysArray(test));
});
