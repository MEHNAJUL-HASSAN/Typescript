function Move(arr) {
    var count = 0;
    var len = arr.length;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[count++] = arr[i];
        }
    }
    while (count < len) {
        arr[count++] = 0;
    }
    console.log(arr);
}
Move([1, 0, 2, 0, 4]);
