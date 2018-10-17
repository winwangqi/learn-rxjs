import {
  Observable,
  of,
  range,
  generate,
  empty,
  never,
  throwError,
} from 'rxjs'

import { repeat } from 'rxjs/operators'

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
//   v => v + 1,
//   v => v
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