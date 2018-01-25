import { Subject } from 'rxjs/Subject'
import 'rxjs/add/observable/fromEvent'
import 'rxjs/add/operator/filter'

import Mousetrap from 'mousetrap'

const keyPressedLeft_ = new Subject()
Mousetrap.bind('left', () => keyPressedLeft_.next())
const keyPressedRight_ = new Subject()
Mousetrap.bind('right', () => keyPressedRight_.next())

const pauseAll_ = new Subject()
const play_ = new Subject()

export {
  keyPressedLeft_,
  keyPressedRight_,
  pauseAll_,
  play_
}
