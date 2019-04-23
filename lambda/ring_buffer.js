class RingBuffer {
  constructor(size) {
    this.size = size
    this.storage = Array(3)
    this.pointer = 0
  }

  append(item) {
    // insert new item where pointer is
    this.storage[this.pointer] = item

    // increment the pointer
    this.pointer++

    // after incrementing, if the pointer is eiqual to size, reset to 0
    if (this.pointer === this.size) {
      this.pointer = 0
    }
  }

  allValues() {
    // return storage in correct order
    // order them by slicing the array at the pointer and reordering the halves
    // return this.storage

    return [
      ...this.storage.slice(this.pointer),
      ...this.storage.slice(0, this.pointer)
    ]
  }
}

const buffer = new RingBuffer(3)

buffer.append('a')
buffer.append('b')
buffer.append('c')

console.log(buffer.allValues()) // should return ['a', 'b', 'c']

buffer.append('d')

console.log(buffer.allValues()) // should return ['d', 'b', 'c']

buffer.append('e')
buffer.append('f')

console.log(buffer.allValues()) // should return ['d', 'e', 'f']
