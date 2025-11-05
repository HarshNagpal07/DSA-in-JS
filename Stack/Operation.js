/*Push Pop Peek IsEmpty Full*/
/*class Stack{
    constructor(){
        this.top=-1;
        this.stack=[];
    }
    push(element){
        this.top=this.top+1;
        this.stack[this.top]=element;
    }
    pop(){
        this.stack.pop();
        this.top=this.top-1;
    }
    peek(){
        return this.stack[this.top]
    }
    isEmpty(){
        if(this.top==1)
            return true;
        else
            return false;
    }
}
x=new Stack()
console.log(x.isEmpty());
x.push(7)
x.push(10)
x.push(15)
x.pop();
console.log(x.stack);
console.log(x.peek());
console.log(x.isEmpty());*/

//Without using funtions or OOPS
// let x=[];
// x.push(1);
// x.push(3);
// x.push(2);
// console.log(x[x.length-1]);
// if(x.length===0){
//     console.log("empty");
// }
// x.pop()
// console.log(x);

class Stack{
    constructor(size=5){
        this.data = new Array(size)
        this.index = 0
        this.size = size
    }
    
    full(){
        if(this.index < size){
            return false
        }
        return true
    }
    
    push(val){
        if(this.full())
            return "The stack is full!"
        
        this.data[this.index] = val
        this.index++
    }
    
    pop(){
        val = this.data[this.index]
        this.data[this.index] = null
        return val
    }
    
    peek(){
        return this.data[this.index]
    }
}

push = O(1)
pop = O(1)
peek = O(1)


const stack = {
    data: [],
    index: 0,
    push: (val)=>{
        this.data[this.index] = val
        this.index++
    }
}


// hash map
let data = new Map()

data.set("a",10)

data.get("a")

data.has("a")

data.delete("a")

CURD
O(1)
O(1)
O(1)
O(1)

O(n)

console.log(data)

// object way

let obj = {}

obj["a"] = 10

obj["a"]

!!obj["a"]

delete obj["a"]

console.log(obj)

