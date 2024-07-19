class HashTable{
  constructor(size){
    this.data = new Array(size);
  }
  hashMethod(key){
    let hash = 0;
    for(let i = 0; i<key.length ; i++){
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    const address = this.hashMethod(key);
    if(!this.data[address])
      this.data[address] = [];
    this.data[address].push([key, value]);
    return this.data;
  }
  get(key) {
    const address = this.hashMethod(key);
    if(!this.data[address])
      return undefined;
    const element = this.data[address].filter(element => element[0] === key).map(array => array[1])[0];
    return element;
  }
  getAllKeys() {
    if(this.data.length <= 0)
      return undefined;
    const elements = this.data.filter(array => array).map(array => array[0][0])[0];
    return elements;
  }
  remove(key) {
    debugger;
    const address = this.hashMethod(key);
    if(!this.data[address])
      return undefined;
    const element = this.data[address].filter(element => element[0] === key)[0];
    const indice = this.data[address].indexOf(element)
    this.data[address].splice(indice, 1);
    return element;
  }
}
const myHashTable = new HashTable(50);

myHashTable.set("Diego", 2000);
myHashTable.set("Mariana", 2002);
myHashTable.set("Allan", 2005);
myHashTable.set("Alen", 1800);
myHashTable.set("Alberto", 1994);
myHashTable.set("Diego", 1970);
myHashTable.remove("Mariana");