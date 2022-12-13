import { Observable } from "rxjs";

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