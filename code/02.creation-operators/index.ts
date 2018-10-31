import {
  Observable,
  of,
  range,
  generate,
  empty,
  never,
  throwError,
  interval,
  timer,
  from,
  fromEvent,
  fromEventPattern,
  defer,
} from 'rxjs'

import {
  repeat,
  repeatWhen,
  delay,
} from 'rxjs/operators'

import { ajax } from 'rxjs/ajax'

// create
// const o1$ = Observable.create(observer => {
//   observer.next(1)
//   observer.next(2)
//   observer.complete('completed')
// })

// o1$.subscribe(
//   console.log,
//   null,
//   () => console.log('complete')
// )


// of
// const o2$ = of(1, 2, 3)
// o2$.subscribe(
//   console.log,
//   null,
//   () => console.log('complete')
// )


// range
// const o3$ = range(1, 10)
// o3$.subscribe(
//   console.log,
//   null,
//   () => console.log('complete')
// )


// generate
// const o4$ = generate(
//   0,
//   v => v < 10,
//   v => v + 2,
//   v => v * 2
// )
// o4$.subscribe(
//   console.log,
//   null,
//   () => console.log('complete')
// )


// repeat
// const _o5$ = of(1, 2, 3)
// const o5$ = _o5$.pipe(repeat(1))
// o5$.subscribe(
//   console.log,
//   null,
//   () => console.log('complete')
// )


// empty
// const o6$ = empty()
// o6$.subscribe(
//   console.log,
//   null,
//   () => console.log('complete')
// )

// never
// const o7$ = never()
// o7$.subscribe(
//   console.log,
//   null,
//   () => console.log('complete')
// )


// throwError
// const o8$ = throwError('error')
// o8$.subscribe(
//   console.log,
//   console.log,
//   () => console.log('complete')
// )


// interval
// const o9$ = interval(1000)
// o9$.subscribe(
//   console.log,
//   console.log,
//   () => console.log('complete')
// )


// timer
// const o10$ = timer(2000, 100)
// o10$.subscribe(
//   console.log,
//   console.log,
//   () => console.log('complete')
// )


// from
// const o11$ = from([1, 2, 3])
// o11$.subscribe(
//   console.log,
//   console.log,
//   () => console.log('complete')
// )


// fromPromise
// const o12$ = from((() => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve('done'), 200)
//   })
// })())
// o12$.subscribe(
//   console.log,
//   console.log,
//   () => console.log('complete')
// )


// fromEvent
// const o13$ = fromEvent(document.getElementById('btn'), 'click')
// o13$.subscribe(
//   console.log,
//   console.log,
//   () => console.log('complete')
// )

// fromEventPattern


// ajax
// const o14$ = ajax.getJSON('https://api.darkred.vip/blabla')
// o14$.subscribe(
//   console.log,
//   console.log,
//   () => console.log('complete'
// )


// repeatWhen
// const o15$ = of(1, 2, 3)
// const repeated$ = o15$.pipe(
//   repeatWhen((o$) => o$.pipe(delay(1000)))
// )
// repeated$.subscribe(
//   console.log,
//   console.log,
//   () => console.log('complete')
// )


// defer
// const o16$ = defer(() => ajax.getJSON('https://api.darkred.vip/xxxx'))
// setTimeout(() => {
//   o16$.subscribe(
//     console.log,
//     console.log,
//     () => console.log('complete')
//   )
// }, 2000)