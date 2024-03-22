type direction = 'left' | 'right'
type Enumerate<
  N extends number,
  Acc extends number[] = [],
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>

type swipeRange = IntRange<1, 101>
export default function (
  toggleMenu: Function,
  swipeTo: direction,
  swipeSensitivity: swipeRange = 50
) {
  let touchStartX = 0

  const handleTouchStart = (event: TouchEvent) => {
    touchStartX = event.touches[0].clientX
  }

  const handleTouchEnd = (event: TouchEvent) => {
    if (typeof window === 'undefined') return
    const swipeRange = (swipeSensitivity / 100) * window.innerWidth
    const touchEndX = event.changedTouches[0].clientX
    // Swiped right to left
    if (touchStartX - touchEndX > swipeRange && swipeTo === 'left') {
      toggleMenu()
    }
    // Swiped left to right
    else if (touchEndX - touchStartX > swipeRange && swipeTo === 'right') {
      toggleMenu()
    }
  }
  return {
    handleTouchStart,
    handleTouchEnd,
  }
}
