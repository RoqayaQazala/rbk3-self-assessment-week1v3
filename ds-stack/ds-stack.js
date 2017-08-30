// var Stack = function() {
//     this._storage = {};
//     this.size =0;

// }
//     Stack.prototype.add = function(val){
//       // write me
     
//     this._storage[this.size]=val;
//        this.size++;
//     };
//     Stack.prototype.remove = function() {
//       this.size--;
//       // write me
//       var x=this._storage[this.size];
//        //// size--;
//       delete this._storage[this.size];

//       return x;
//     };
//     // return this._storage;
//   };
// var y = new Stack.add(1)

  var Stack = function() {
    this._storage = [];
    this.size =0;
}
    Stack.prototype.add = function(val){
      // write me
    var y = (Stack[this.size]=val);
    this._storage.push(y)
       this.size++;
    };
    Stack.prototype.remove = function() {
      this.size--;
      // write me
      var x=Stack[this.size];
       //// size--;
      delete Stack[this.size];

      return x;
    };
    // return this._storage;
  

    var y = new Stack.add(1)