/*
# 2-pointer
- Definition :

  @ A technique where two pointers are used to traverse a data structure, typically an array or linked list, in a coordinated manner to solve a problem efficiently.

  @ 2 pointer a technique where 2 variable (pointer) traverse a data structure (like array, linkList, string) simultaneosuly from different pisiton to sloved the probelem efficientelly.

  @ 2 pointer either move 
      1. towards each other
      2. always from each other 
      3. in same direction. 
          - in same direction also have fast-slow pattern 
            - suppose i = slow
            - j = fast (move by 2 )
  

  @ Important of 2 pointer (when we used 2 pointer)
    1. comparison 
    2. searching 
    3. partitioning  

    
  @ Why used two pinter 
    1. No unnecessary iteration 
    2. Early stopping as soon as mismatch / condition false 
    3. work in place no need to create new array or copies 
    4. impore both speed and space complexity.


  @ WHen to used 2 pinter 
    1. comparing element from both ends (like palindrom, pair sum)'
    2. find pair with specific properties (e.g sum = target)
    3. Removing & mergine element 
    4. detecting loop and middle elements (linked list cycle, middle node)

@ Template of 2 pinter 

  # single inpupt (apposite)

  a = [1,3,4,5,6];
    left = 0;
    right = a.length-1;
    
    while(left < right){
      if condition;
        left = left + 1 ;
      else 
        right = right -1;
    }

    return ans 


  # 2 input execute both 

  a = [1,2,3,4]
  b = [5,6,7]

  left = 0;
  right = 0;

  while(left < a.length & right < b.length)
    if(condition)
      left = left + 1 ;
    else 
      right = right -1;

    while (left < a.length)
      left = left + 1

    while (right < b.length)
      right = right + 1

*/
