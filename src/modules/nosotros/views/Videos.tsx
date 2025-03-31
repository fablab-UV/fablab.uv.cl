import React from 'react'

const Videos: React.FC = () => {
  return (
    <section className="">
      <div className="px-8 pb-12 xl:px-16 2xl:px-20">
        <div className="flex flex-wrap gap-2 text-center">
          {/* Video 1 */}
          <div className="flex-1">
            <div className="h-80 overflow-hidden rounded-lg">
              <iframe
                className="size-full"
                src="https://www.youtube.com/embed/_Vse_YxFmSY?start=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video 2 */}
          <div className="flex-1">
            <div className="h-80 overflow-hidden rounded-lg">
              <iframe
                className="size-full"
                src="https://www.youtube.com/embed/jTyKH7qOafs"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Videos
