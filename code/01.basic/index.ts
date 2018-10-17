import { Observable,fromEvent } from 'rxjs'

/**
 * ****************************
 * Event
 * ****************************
 */
const btn1El: HTMLElement | null = document.querySelector('#btn1')
fromEvent(btn1El, 'click')
  .subscribe(() => window.alert('Clicked!'))

/**
 * ****************************
 * 
 * ****************************
 */
Observable.create(observer => {
  observer.next(1)
  observer.next(2)
  observer.next(3)
  observer.error(new Error('some error happened.'))
  observer.next(3)
}).subscribe({
  next: v => console.log(v),
  error: err => console.log(err)
})
