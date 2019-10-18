const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      if (Array.isArray(collection)) {
        let newArr = collection.slice()
        for(let i = 0; i < newArr.length; i++) {
          cb(newArr[i], i, newArr);
        }
      }
      else {
        const entries = Object.entries(collection);

        for(let i = 0; i < entries.length; i++) {
          cb(entries[i][1], entries[i][0], collection);
        }
      }

      return collection;
    },

    map: function(collection, cb) {
      let ret = [];
      if (Array.isArray(collection)) {
        let newArr = collection.slice()
        
        for(let i = 0; i < newArr.length; i++) {
          ret.push(cb(newArr[i], i, newArr));
        }
      }
      else {
        const entries = Object.entries(collection);

        for(let i = 0; i < entries.length; i++) {
          ret.push(cb(entries[i][1], entries[i][0], collection));
        }
      }

      return ret;
    },

    reduce: function(collection, cb, acc) {
      let newArr = collection.slice();
      let c = 0;
      if (acc === undefined) {
        c = 1;
        acc = newArr[0];
      }
      for(let i = c; i < newArr.length; i++) {
        acc = cb(acc, newArr[i], newArr);
      }

      return acc;
    },

    find: function(collection, cb) {
      let newArr = collection.slice();
      
      for(let i = 0; i < newArr.length; i++) {
        if (cb(newArr[i])) {
          return newArr[i];
        }
      }
      return undefined;
    },

    filter: function(collection, cb) {
      let ret = [];
      let newArr = collection.slice();

      for(let i = 0; i < newArr.length; i++) {
        if (cb(newArr[i])) {
          ret.push(newArr[i]);
        }
      }

      return ret;
    },

    size: function(collection) {
      let total = 0;

      return Array.isArray(collection) ?
        collection.length :
        Object.keys(collection).length;
    },

    first: function(arr, n) {
      if (n > 1) {
        let ret = [];
        for (let i = 0; i < n; i++) {
          ret.push(arr[i]);
        }

        return ret;
      }
      else {
        return arr[0];
      }
    },

    last: function(arr, n) {
      if (n > 1) {
        let ret = [];
        for (let i = (arr.length - n); i < arr.length; i++) {
          ret.push(arr[i]);
        }

        return ret;
      }
      else {
        return arr[arr.length - 1];
      }
    },

    compact: function(arr) {
      let ret = [];

      for(let i = 0; i < arr.length; i++) {
        if (arr[i]) {
          ret.push(arr[i]);
        }
      }

      return ret;
    },

    sortBy: function(arr, cb) {
      let newArr = [];

      for(let i = 0; i < arr.length; i++) {
        newArr.push(cb(arr[i]));
      }
      let sorted = newArr.slice();
      if (typeof(arr[0]) === 'number') {
        sorted.sort((a,b) => a - b);
      }
      else {
        sorted.sort();
      }

      let indexes = [];
      for(let i = 0; i < sorted.length; i++) {
        let index = newArr.findIndex(el => {
          return el === sorted[i];
        })
        indexes.push(index);
      }

      let ret = [];
      for (let i = 0; i < indexes.length; i++) {
        ret.push(arr[indexes[i]]);
      }

      return ret;
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },
    
    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },
  }
})()

fi.libraryMethod()
