import { Observable } from "rxjs";

//the definition of an observable
const observable = new Observable((subscriber) =>{
    subscriber.next('hello')
    subscriber.next('hell word')
    subscriber.complete()
    subscriber.next('hell word wide')
    subscriber.error()
    
});

observable.subscribe({
next:(value) =>{
    console.log(value)
    console.log(44)
},
complete: ()=>{
    console.log('complet')
},
error: () =>{
}
})



// setinterval and clear interval method
const observable1 = new Observable((subscriber) =>{
   const id = setInterval(() =>{
        subscriber.next('data from obseervable')
        console.log('data from set interval')
    },1000)
    subscriber.complete()
    return ()=>{
        clearInterval(id)
    }
})
console.log('before');

observable1.subscribe({
    next:(va) =>{
        console.log(va)
    },
    complete:()=>{
        console.log('complet from subscribe')
    },
    error:()=>{
    }
})
console.log('after')

//unsubscription

const observable11 = new Observable((subscriber) =>{
    const id = setInterval(() =>{
         subscriber.next('data from obseervable')
         console.log('data from set interval')
     },1000)
/*      subscriber.complete()
 */     return ()=>{
         clearInterval(id)
     }
 })
 console.log('before');
 
 const subscription = observable11.subscribe({
     next:(va) =>{
         console.log(va)
     },
     complete:()=>{
         console.log('complet from subscribe')
     },
     error:()=>{
     }
 })

 setInterval(()=>{
    subscription.unsubscribe()
 },5000)
 console.log('after')