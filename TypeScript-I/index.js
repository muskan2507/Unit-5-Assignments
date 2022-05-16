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
// function sort(arr:[],n:number,i:number,j:number,id:string){
//     if(i>=j){
//         return;
//     }
//     let index = partition(arr,i,j,id);
//     sort(arr,n,i,index-1,id);
//     sort(arr,n,index+1,j,id);
// }
// function partition(arr:[],i:number,j:number,id:string){
//     let pivot=arr[i].id
//     let left =i;
//     let right=j;
//     while(left<right){
//         while(arr[left].id<=pivot && left<j){
//             left++;
//         }
//          while(arr[right].id>pivot && right>i){
//             right--;
//         }
//         if(left<right){
//             swap(arr,left,right)
//         }
//     }
//     swap(arr,i,right)
//     return right;
// }
// function swap(arr,i,j){
//     let temp = arr[i];
//     arr[i]=arr[j];
//     arr[j]=temp;
// }
// console.log(studentData)
// sort(studentData,studentData.length,0,3,"age")
// console.log(studentData)
function add(arr, filter) {
    console.log(arr[0].filter);
    console.log(filter);
}
add(studentData, "id");
