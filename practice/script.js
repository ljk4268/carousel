;(function () {
  'use strict'

  const get = (target) => {
    return document.querySelector(target)
  }

  class Carousel {
    constructor(carouselElement) {
      this.carouselElement = carouselElement
      this.itemClassName = 'carousel_item'
      this.items = this.carouselElement.querySelectorAll('.carousel_item')

      this.totalItems = this.items.length
      this.current = 0
    }

    setEventListener(){
      this.prevButton = this.carouselElement.querySelector('.carousel_button--prev')
      this.nextButton = this.carouselElement.querySelector('.carousel_button--next')

      this.prevButton.addEventListener('click', ()=>{
        this.movePrev()
      })
      this.nextButton.addEventListener('click', ()=>{
        this.moveNext()
      })
    }

    moveCarouselTo(){
      let prev = this.current - 1
      let next = this.current + 1

      if( this.current === 0){
        prev = this.totalItems - 1
      } else if ( this.current == this.totlaItems -1 ){
        next = 0
      }

      for( let i = 0; i < this.totalItems; i++){
        if( i == this.current){
          this.items[i].className = this.itemClassName + ' active'
        }
      }
    }

    moveNext() {
      if( this.current === this.totalItems -1 ){
        this.current = 0 
      } else {
        this.current ++
      }
      this.moveCarouselTo()
    }

    movePrev() {
      if( this.current === 0 ){
        this.current = this.totalItems -1
      } else {
        this.current --
      }
      this.moveCarouselTo()
    }

  }
  


  document.addEventListener('DOMContentLoaded', () => {
    const carouselElement = get('.carousel')
    const carousel = new Carousel(carouselElement)
  })
})()
