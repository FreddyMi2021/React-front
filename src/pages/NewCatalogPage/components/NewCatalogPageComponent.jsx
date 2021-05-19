import React from 'react'
import ContentList from './ContentList/ContentList'

export const NewCatalogPageComponent = () => {
  return(
    <>
      <div className="w-full h-screen overflow-y-auto h-full z-10 pb-32 bg-green-50">
            
          <div className="md:flex">
              <div className="w-full">
                <ContentList/>
              </div>
          </div>
          
      </div>
    </>
  )
}