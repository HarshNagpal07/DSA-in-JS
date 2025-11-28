class Queue{
    constructor(){
        this.intems=[];
    }
    enqueue(element){
        this.intems.push(element);
    }
    dequeue(){
        if(this.is_empty()){
            console.log("Queue is empty. Nothing to dequeue");
        }
        console.log(this.intems.shift());
    }
    is_empty(){
        console.log(this.length===0) 
    }
    get_first_element(){
        if(this.is_empty()){
            console.log("Queue is empty. No front element");
        }
        console.log(this.intems[0]) 
    }
}