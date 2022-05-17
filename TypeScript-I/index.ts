type User = {
  id: number;
  age: number;
  name: string;
  salary: number;
};
let studentData: User[] = [
  {
    age: 26,
    name: "Pari",
    salary: 18000,
    id: 4,
  },
  {
    age: 21,
    name: "Golu",
    salary: 11000,
    id: 2,
  },
  {
    age: 20,
    name: "Kamal",
    salary: 10000,
    id: 1,
  },

  {
    age: 23,
    name: "Suraj",
    salary: 15000,
    id: 3,
  },
];
function sort(arr:User[],n:number,i:number,j:number,by:keyof User){
    if(i>=j){
        return;
    }
    let index = partition(arr,i,j,by);
    sort(arr,n,i,index-1,by);
    sort(arr,n,index+1,j,by);
}
function partition(arr:[],i:number,j:number,by:string){
    let pivot=arr[i][by]
    
    let left =i;
    let right=j;
    while(left<right){
        while(arr[left][by]<=pivot && left<j){
            left++;
        }
         while(arr[right][by]>pivot && right>i){
            right--;
        }
        if(left<right){
            swap(arr,left,right)
        }
    }
    swap(arr,i,right)
    return right;
}
function swap(arr,i,j){
    let temp = arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
// console.log(studentData)
sort(studentData,studentData.length,0,3,"age")
console.log(studentData)
