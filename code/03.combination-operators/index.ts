import {
  Observable,
  of,
  interval,
  timer,
  fromEvent,
  forkJoin,
} from 'rxjs'
import {
  concat,
  map,
  merge,
  zip,
  combineLatest,
  withLatestFrom,
  race,
  startWith,
  take,
  concatAll,
  mergeAll,
  zipAll,
  combineAll,
  switchAll,
  exhaust,
} from 'rxjs/operators'

const observer = {
  next(value) {
    console.log(value)
  },
  error(error) {
    console.log(`error: ${error}`)
  },
  complete() {
    console.log('complete!')
  },
}

// concat
// const o1$ = of(1, 2, 3)
// const o2$ = of(4, 5, 6)
// const o3$ = o1$.pipe(concat(o2$))
// o3$.subscribe(observer)


// merge
// const o1$ = timer(0, 1000).pipe(map(x => x + 'A'))
// const o2$ = timer(500, 1000).pipe(map(x => x + 'B'))
// const o3$ = timer(1000, 1000).pipe(map(x => x + 'C'))
// const o4$ = o1$.pipe(merge(o2$, o3$, 2))
// o4$.subscribe(observer)


// zip
// 有一个完结，则完结
// const o1$ = interval(100)
// const o2$ = interval(1500)
// const o3$ = interval(2000)
// const o4$ = o1$.pipe(zip(o2$, o3$))
// o4$.subscribe(v => console.log(v))


// combineLast
// 所有完结才完结
// const o1$ = timer(500, 1000)
// const o2$ = timer(1000, 1000)
// const o3$ = o1$.pipe(combineLatest(o2$, (v1, v2) => {
//   return `${v1} x ${v2}`

// }))
// o3$.subscribe(observer)


// withLatestFrom
// const o1$ = timer(0, 2000).pipe(map(x => x * 100))
// const o2$ = timer(500, 1000)
// const o3$ = o1$.pipe(withLatestFrom(o2$, (a, b) => a + b))
// o3$.subscribe(observer)

// const event$ = fromEvent(document.body, 'click')
// const x$ = event$.pipe(map(event => event.x))
// const y$ = event$.pipe(map(event => event.y))
// const result$ = x$.pipe(withLatestFrom(y$))
// result$.subscribe(observer)


// race
// const o1$ = timer(0, 2000).pipe(map(x => x + 'a'))
// const o2$ = timer(500, 1000).pipe(map(x => x + 'b'))
// const o3$ = o1$.pipe(race(o2$))
// o3$.subscribe(observer)


// startWith
// const o1$ = timer(0, 1000)
// const o2$ = o1$.pipe(startWith('start', 'a', 'b', 'c'))
// o2$.subscribe(observer)


// forkJoin
// const o1$ = timer(0, 1000).pipe(map(x => x + 'a'), take(2))
// const o2$ = timer(500, 1000).pipe(map(x => x + 'b'), take(3))
// const o3$ = forkJoin(o1$, o2$)
// o3$.subscribe(observer)


// concatAll
// interval(1000)
//   .pipe(
//     take(2),
//     map(x => 
//       interval(1500)
//         .pipe(
//           map(y => `${x}:${y}`),
//           take(3)
//         )
//     ),
//     concatAll()
//   )
//   .subscribe(observer)


// mergeAll
// interval(1000)
//   .pipe(
//     take(2),
//     map(x => 
//       interval(1500)
//         .pipe(
//           map(y => `${x}:${y}`),
//           take(3)
//         )
//     ),
//     mergeAll()
//   )
//   .subscribe(observer)


// zipAll
// interval(1000)
//   .pipe(
//     take(2),
//     map(x => 
//       interval(1500)
//         .pipe(
//           map(y => `${x}:${y}`),
//           take(3)
//         )
//     ),
//     zipAll()
//   )
//   .subscribe(observer)

// combineAll
// interval(1000)
//   .pipe(
//     take(2),
//     map(x => 
//       interval(1500)
//         .pipe(
//           map(y => `${x}:${y}`),
//           take(3)
//         )
//     ),
//     combineAll()
//   )
//   .subscribe(observer)


// switchAll
// interval(1000)
//   .pipe(
//     take(2),
//     map(x => 
//       interval(1500)
//         .pipe(
//           map(y => `${x}:${y}`),
//           take(3)
//         )
//     ),
//     switchAll()
//   )
//   .subscribe(observer)

  
// exhaust
// interval(1000)
//   .pipe(
//     take(2),
//     map(x => 
//       interval(1500)
//         .pipe(
//           map(y => `${x}:${y}`),
//           take(3)
//         )
//     ),
//     exhaust()
//   )
//   .subscribe(observer)