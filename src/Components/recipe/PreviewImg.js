import React from 'react'

const PreviewImg = (props) => {
  const { recipeImgUrl } = props
  return (
    <div className="card image-url z-depth-0 ">
      <img className="card-image responsive-img" src={recipeImgUrl} alt="recipe" />
    </div>
  )
}

export default PreviewImg
