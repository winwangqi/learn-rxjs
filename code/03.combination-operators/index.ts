import {
  Observable,
  of,
  interval,
  timer,
} from 'rxjs'
import {
  concat,
  map,
  merge,
  zip,
  combineLatest,
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
const o1$ = timer(500, 1000)
const o2$ = timer(1000, 1000)
const o3$ = o1$.pipe(combineLatest(o2$, (v1, v2) => {
  return `${v1} x ${v2}`

}))
// o3$.subscribe(observer)


// 