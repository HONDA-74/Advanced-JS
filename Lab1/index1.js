const linkedlist = {
  data: [],
  enqueue: function (data) {
    if (this.data.length == 0) {
      this.data.unshift({ val: data });
    } else if (this.data[0].val > data) {
      this.data.unshift({ val: data });
    } else {
      throw new Error("can't enqueue data");
    }
  },
  dequeue: function () {
    return this.data.shift();
  },
  push: function (data) {
    if (this.data.length == 0) {
      this.data.push({ val: data });
    } else if (this.data[this.data.length - 1].val < data) {
      this.data.push({ val: data });
    } else {
      throw new Error("can't push data");
    }
  },
  pop: function () {
    return this.data.pop();
  },
  insert: function (data, index) {
    if (this.data.length == 0) {
      this.data.push({ val: data });
      return;
    }
    if (index < 0 || index > this.data.length || this.data[index].val == data) {
      throw new Error("can't insert data");
    }
    if(index==0){
      if(this.data[index].val<data){
        this.data.splice(index, 0, { val: data });
        return;
      }
      throw new Error("can't insert data");
    }
    if(index==this.data.length-1){
      if(this.data[index-1].val<data){
        this.data.splice(index, 0, { val: data });
        return;
      }
      throw new Error("can't insert data");
    }
    if (this.data[index].val > data && this.data[index - 1].val < data) {
      this.data.splice(index, 0, { val: data });
      return;
    }
    throw new Error("can't insert data");
  },
  remove: function (data, index) {
    if (this.data.length == 0) {
      throw new Error("can't remove data");
    }
    if (this.data[index].val == data) {
      this.data.splice(index, 1);
      return;
    }
    throw new Error("can't remove data");
  },
  display: function () {
    // for (let i = 0; i < this.data.length; i++) {
    //   console.log(this.data[i].val);
    // }
    console.log(this.data);
  },
};

try {
  // //============== push,pop test
  linkedlist.push(5);
  // linkedlist.push(2);
  linkedlist.push(6);
  linkedlist.push(7);
  linkedlist.display();
  // linkedlist.pop();
  // linkedlist.pop();
  // linkedlist.pop();

  // //============== enqueue,dequeue test
  linkedlist.enqueue(9);
  // linkedlist.enqueue(2);
  // linkedlist.enqueue(6);
  // linkedlist.enqueue(7);
  // linkedlist.display();


  //============== insert,remove test
  // linkedlist.push(1);
  // linkedlist.push(3);
  // linkedlist.push(4);
  // linkedlist.display();
  // // linkedlist.insert(5, 1);
  // linkedlist.insert(2, 1);
  // // linkedlist.display();
  // linkedlist.remove(3, 2);
  // // linkedlist.remove(4,1)
} catch (error) {
  console.log(error.message);
}
