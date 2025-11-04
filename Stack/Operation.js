/*Push Pop Peek IsEmpty Full*/
class Stack{
    constructor(){
        this.top=-1;
        this.stack=[];
    }
    push(element){
        this.top=this.top+1;
        this.stack[this.top]=element;
    }
}
x=new Stack()
x.push(7)
x.push(10)
x.push(15)
console.log(x.stack);