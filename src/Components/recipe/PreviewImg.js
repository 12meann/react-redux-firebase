import React from 'react'

const PreviewImg = (props) => {
  const { recipeImgUrl } = props
  return (
    <div className="card image-url z-depth-0 center">
      <img className="card-image responsive-img center" src={recipeImgUrl} alt="recipe" />
    </div>
  )
}

export default PreviewImg
