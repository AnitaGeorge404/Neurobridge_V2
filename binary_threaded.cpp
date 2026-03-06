#include <iostream>

struct node{
    int data;
    node *left;
    node *right;
    bool lthread;
    bool rthread;

    node(int k)
    {
        data = k;
        left = right = nullptr;
        lthread = rthread = 1;
    }
}

node* insert(node* root, int key){
    node* ptr=root;
    node* parent = nullptr;

    while(!ptr){
        if(root->data == key){
            return root;
        }

        parent = ptr;
        if(root->data < key){
            if(root->rthread==0){
                ptr=ptr->right;
            }else{
                break;
            }
        }else if(root->data>key){
            if(root->lthread==0){
                ptr=ptr->left;
            }else{
                break;
            }
        }
    }

    node* newnode = new node(key);

    if(parent==nullptr){
        root=newnode;
    }else if(parent->data > key){
        newnode->left = parent->left;
        newnode->right = parent;
        parent->left = newnode;
        parent->lthread = 0;
    }else{
        newnode->right = parent ->right;
        newnode->left = parent;
        parent->right = newnode;
        parent->lthread=0;
    }

    return root;
}

node* leftmost(node*root){
    if(root==nullptr){
        return root;
    }

    while(root->lthread==0){
        root = root->left;
    }
    return root;
}

void inorder(node*root){
    node* curr = leftmost(root);

    while(curr!=nullptr){
        cout<<curr->data;
        if(curr->rthread==1){
            curr=cuur->right;
        }else{
            curr=leftmost(curr->right);
        }
    }

    cout<<endl;
}

int main(){
    int n;
    cin>>n;
    
    node* root=nullptr;
    int val;
    for(int i=0;i<n;i++){
        cin>>val;
        root=insert(root,val);
    }
    inorder(root);

}