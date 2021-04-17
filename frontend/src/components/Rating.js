import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const Rating = ({ value, text, color }) => {
  return (
    <div className='rating'>
      <span>
      { value >= 1 ? <StarIcon style={{ color }}/> : value >= 0.5 ? <StarHalfIcon style={{ color }}/> : <StarBorderIcon style={{ color }}/>}
      </span>
      <span>
        {value >= 2 ? <StarIcon style={{ color }}/> : value >= 1.5 ? <StarHalfIcon style={{ color }}/> : <StarBorderIcon style={{ color }}/>}
      </span>
      <span>
        {value >= 3 ? <StarIcon style={{ color }}/> : value >= 2.5 ? <StarHalfIcon style={{ color }}/> : <StarBorderIcon style={{ color }}/>}
      </span>
      <span>
        {value >= 4 ? <StarIcon style={{ color }}/> : value >= 3.5 ? <StarHalfIcon style={{ color }}/> : <StarBorderIcon style={{ color }}/>}
      </span>
      <span>
        {value >= 5 ? <StarIcon style={{ color }}/> : value >= 4.5 ? <StarHalfIcon style={{ color }}/> : <StarBorderIcon style={{ color }}/>}
      </span>

      {/* Better than writing  text ? text : '' */}
      <span>{text && text}</span>
    </div>
  )
}

// The custome stlye below gives the default value color to the hex of yellow
Rating.defaultProps = {
  color: '#f8e825'
}

export default Rating
