type direction = 'left' | 'right'
export default function (toggleMenu: Function, swipeTo: direction) {
  let touchStartX = 0

  const handleTouchStart = (event: TouchEvent) => {
    touchStartX = event.touches[0].clientX
  }

  const handleTouchEnd = (event: TouchEvent) => {
    const touchEndX = event.changedTouches[0].clientX
    const swipeThreshold = 60 // Adjust this value as needed
    // Swiped right to left
    if (touchStartX - touchEndX > swipeThreshold && swipeTo === 'left') {
      toggleMenu()
    }
    // Swiped left to right
    else if (touchEndX - touchStartX > swipeThreshold && swipeTo === 'right') {
      toggleMenu()
    }
  }
  return {
    handleTouchStart,
    handleTouchEnd,
  }
}
