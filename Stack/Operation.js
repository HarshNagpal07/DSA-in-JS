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
let x=[];
x.push(1);
x.push(3);
x.push(2);
console.log(x[x.length-1]);
if(x.length===0){
    console.log("empty");
}
x.pop()
console.log(x);

