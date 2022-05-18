var teacherData = [
    { id: 1, name: "Sonu", no_of_students: 10, subject: "Physics" },
    { id: 4, name: "Kamal", no_of_students: 8, subject: "Maths" },
    { id: 7, name: "Mohan", no_of_students: 29, subject: "chemistry" },
    { id: 2, name: "pooja", no_of_students: 3, subject: "maths" }
];
var studentData = [
    {
        age: 26,
        name: "Pari",
        salary: 18000,
        id: 4
    },
    {
        age: 21,
        name: "Golu",
        salary: 11000,
        id: 2
    },
    {
        age: 20,
        name: "Kamal",
        salary: 10000,
        id: 1
    },
    {
        age: 23,
        name: "Suraj",
        salary: 15000,
        id: 3
    },
];
function sort(arr, n, i, j, by) {
    if (i >= j) {
        return;
    }
    var index = partition(arr, i, j, by);
    sort(arr, n, i, index - 1, by);
    sort(arr, n, index + 1, j, by);
}
function partition(arr, i, j, by) {
    var pivot = arr[i][by];
    var left = i;
    var right = j;
    while (left < right) {
        while (arr[left][by] <= pivot && left < j) {
            left++;
        }
        while (arr[right][by] > pivot && right > i) {
            right--;
        }
        if (left < right) {
            swap(arr, left, right);
        }
    }
    swap(arr, i, right);
    return right;
}
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
// console.log(studentData)
sort(studentData, studentData.length, 0, studentData.length - 1, "age");
console.log(studentData);
sort(teacherData, teacherData.length, 0, teacherData.length - 1, "id");
console.log(teacherData);
