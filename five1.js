
// Javascript program to implement
// the above approach
 
    // Function to replace each even
    // element by odd and vice-versa
    // in a given array
    function replace(arr)
    {
        // Stores length of array
        let n = arr.length;
  
        // Traverse array
        for (let i = 0; i < n; i++) {
  
            for (let j = i + 1; j < n; j++) {
  
                // If current element is even
                // then swap it with odd
                if (arr[i] >= 0
                    && arr[j] >= 0
                    && arr[i] % 2 == 0
                    && arr[j] % 2 != 0) {
  
                    // Perform Swap
                    let tmp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tmp;
  
                    // Change the sign
                    arr[j] = -arr[j];
  
                    break;
                }
  
                // If current element is odd
                // then swap it with even
                else if (arr[i] >= 0
                         && arr[j] >= 0
                         && arr[i] % 2 != 0
                         && arr[j] % 2 == 0) {
  
                    // Perform Swap
                    let tmp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tmp;
  
                    // Change the sign
                    arr[j] = -arr[j];
  
                    break;
                }
            }
        }
  
        // Marked element positive
        for (let i = 0; i < n; i++)
            arr[i] = Math.abs(arr[i]);
  
        // Print final array
        for (let i = 0; i < n; i++)
           console.log(arr[i] + " ");
    }
 
 
    // Driver Code
      
           // Given array arr[]
         var arr = [ 1,2,3,4 ]
        
  
        // Function Call
        replace(arr);
   