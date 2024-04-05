import React from 'react'

function ContainerTask({children} : any) {
  return (
    <section className="absolute w-full h-full bg-neutras-bgBlack/60 flex items-center">
      <div className="bg-neutras-neutra w-full p-6 rounded-2xl mt-auto">
        {children}
      </div>
    </section>
  )
}

export default ContainerTask
