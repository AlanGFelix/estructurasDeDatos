class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(value) {
    this.data[this.length] = value;
    this.length++;
    return value;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
    
  unshift(item){
    if (!item)
      return this.length;

    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i+1] = this.data[i];
    }

    this.data[0] = item;
    this.length++;
    return this.length;
  }

  shift() {
    const firstItem = this.data[0];
    delete this.data[0];
    this.length--;
    return firstItem;
  }

  map(callback) {
    const data = new MyArray();
    for(let i = 0; i <= this.length - 1; i++) {
      data.push(callback(this.data[i]))
    }
    return data;
  }

  filter(callback) {
    const data = new MyArray();
    for(let i = 0; i <= this.length - 1; i++) {
      if(callback(this.data[i])) {
        data.push(this.data[i])
      }
    }
    return data;
  }
}
var array = new MyArray();
array.unshift('c');
array.push('d')
array.unshift('b');
array.unshift('a');
// array.shift();
array.pop();
console.log(array);
const datos = array.map(p => p + 'c');
console.log('data: ', datos);
const datosFiltrados = array.filter(a => a === 'a');
console.log('data filtrada: ', datosFiltrados);