let arr = [15,25,35,30,60]

for(let i=0;i<arr.length;i++)
 {
    for(let j=i+1;j<arr.length;j++){
        for(let k=j+1;k<arr.length;k++){
            if(arr[i]+arr[j]+arr[k] === 125 ){
                console.log(arr[i],arr[j],arr[k]);
                
            }
        }
    }
 }