export interface Slider {
  data: SlideContent[]
  className?: string
}

export interface Slide {
  slide: SlideContent
}

export interface SlideContent {
  title?: string
  description?: string
  url: string
  image: string
}
