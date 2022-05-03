import React from 'react'

import coffee from '../../assets/flatIcons/coffee.png'
import nonCoffe from '../../assets/flatIcons/non-coffee.png'
import food from '../../assets/flatIcons/food.png'
import addOn from '../../assets/flatIcons/add-on.png'

const PictureDefault = ({ category, picture }) => {
  let icon

  if (picture === null) {
    switch (category) {
      case 'coffee':
        icon = coffee
        break
      case 'non coffee':
        icon = nonCoffe
        break
      case 'foods':
        icon = food
        break
      default:
        icon = addOn
    }
  } else {
    icon = picture
  }

  return <img className="h-full" src={icon} alt="coffee" />
}

const PictureCircle = ({
  Img = PictureDefault,
  category = 5,
  diametre = 24,
  picture = null,
}) => {
  const diametreStr = diametre.toString()
  const height = 'h-' + diametreStr
  const width = 'w-' + diametreStr

  return (
    <div
      className={
        'flex justify-center items-center bg-yellow-200 rounded-full mx-auto overflow-hidden ' +
        height +
        ' ' +
        width
      }
    >
      <Img category={category} picture={picture} />
    </div>
  )
}

export default PictureCircle
