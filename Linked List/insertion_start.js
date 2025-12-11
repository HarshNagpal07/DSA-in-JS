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
head=new Node(5);
head=insertion_start(head,10);
console.log(head);