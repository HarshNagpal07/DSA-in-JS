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
insertion_end=function(head,value)
{
    new_node=new Node(value);
    temp=head;
    while(temp.next!=null){
        temp=temp.next;
    }
    temp.next=new_node;
}
insertion_middle=function(head,n,value){
    new_node=new Node(value);
    temp=head;
    while(n-1>0){
        temp=temp.next;
        n=n-1;
    }
    x=temp.next;
    temp.next=new_node;
    new_node.next=x;
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
head=insertion_start(head,0);
insertion_end(head,20);
insertion_end(head,30);
insertion_middle(head,3,2);
head=head.next;
display(head);
//This doesnot work