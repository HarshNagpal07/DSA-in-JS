//this is combination of inster start, value address and display method you can console the output as you can
class Node{
    constructor(a)
    {
        this.value=a;
        this.next=undefined;
    }
}
insertion_start=function(head,value)
{
    new_node=new Node(value);
    new_node.next=head;
    return new_node;
}
display=function(head)
{
    temp=head;
    while(temp!=null){
        console.log(temp.value);
        temp=temp.next;
    }
}
head=new Node(5);
head=insertion_start(head,10);
// console.log(head);
// console.log(Node.value)
display(head);
