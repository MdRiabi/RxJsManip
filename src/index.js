import { Observable } from "rxjs";

//the definition of an observable
const observable = new Observable((subscriber) => {
    subscriber.next('hello')
    subscriber.next('hell word')
    subscriber.complete()
    subscriber.next('hell word wide')
    subscriber.error()

});

observable.subscribe({
    next: (value) => {
        console.log(value)
        console.log(44)
    },
    complete: () => {
        console.log('complet')
    },
    error: () => {
    }
})



// setinterval and clear interval method
const observable1 = new Observable((subscriber) => {
    const id = setInterval(() => {
        subscriber.next('data from obseervable')
        console.log('data from set interval')
    }, 1000)
    subscriber.complete()
    return () => {
        clearInterval(id)
    }
})
console.log('before');

observable1.subscribe({
    next: (va) => {
        console.log(va)
    },
    complete: () => {
        console.log('complet from subscribe')
    },
    error: () => {
    }
})
console.log('after')

//unsubscription

const observable11 = new Observable((subscriber) => {
    const id = setInterval(() => {
        subscriber.next('data from obseervable')
        console.log('data from set interval')
    }, 1000)
/*      subscriber.complete()
 */     return () => {
        clearInterval(id)
    }
})
console.log('before');

const subscription = observable11.subscribe({
    next: (va) => {
        console.log(va)
    },
    complete: () => {
        console.log('complet from subscribe')
    },
    error: () => {
    }
})

setInterval(() => {
    subscription.unsubscribe()
}, 5000)
console.log('after')




//arry handling
var arr = [10, 11, 20, 25, 30, 52, 44, 63, 42, 52, 61]
let mapArr = arr.map((value) => {
    return `map change the values of the initial array + ${value + 15}`
})
console.log(mapArr)

let arrfilter = arr.filter((filterValue) => {
    return filterValue > 60

})
console.log(arrfilter)

// reduce function make math manip over the array element
let reduceArr = arr.reduce((val1, val2) => {
    return val1 + val2
})
console.log(`the resumlt of reduce function: ${reduceArr}`)

let arrayAcc = [10, 20, 30, 40, 50, 60]

function cumul(array) {
   
    som = array.reduce((nb1, nb2) => {
        return nb1 + nb2
    })

    let nbelement = [som, array.length]

    return nbelement;


}


res = cumul(arrayAcc)
console.log(res)