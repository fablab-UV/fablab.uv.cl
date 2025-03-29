import React from 'react'

const Videos: React.FC = () => {
  return (
    <section className="">
      <div className="mx-36 px-2 py-12">
        <div className="-mx-4 -mb-10 flex flex-wrap text-center">
          {/* Video 1 */}
          <div className="mb-10 px-4 sm:w-1/2">
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
          <div className="mb-10 px-4 sm:w-1/2">
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
