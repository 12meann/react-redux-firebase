import React from 'react'

const PreviewImg = (props) => {
  const { recipeImgUrl } = props
  return (
    <div className="image-url">
      <img src={recipeImgUrl} alt="recipe" />
    </div>
  )
}

export default PreviewImg
