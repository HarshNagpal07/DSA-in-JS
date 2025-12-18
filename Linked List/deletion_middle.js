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
deletion_at_end=function(head){
    temp=head;
    while(temp.next!=null && temp.next.next!=null){
        temp=temp.next;
    }
    temp.next=temp.next.next;

}
deletion_at_nth_node=function(head,n){
    temp=head;
    while(n-2!=0){
        temp=temp.next;
        n=n-1;
    }
        temp.next=temp.next.next;
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
deletion_at_nth_node(head,3)
display(head);