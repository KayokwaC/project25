
import {FaStar} from 'react-icons/fa';  
import { useState } from 'react';

export default function StarRating({numberOfStars = 5}) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

function handleOnClick(index)
{
   setRating(index + 1);
}

function handleOnMouseMove(index)
{
   setHover(index + 1);
}

function handleOnMouseLeave()
{
    setHover(0);
}
  
return (
<div>Star Rating
<div className="star-rating">
{
    [...Array(numberOfStars)].map((star, index) => {
        return <FaStar key={index}
        onClick={() => handleOnClick(index)}
        onMouseMove={() => handleOnMouseMove(index)}
        onMouseLeave={() => handleOnMouseLeave()}
        color={index < (hover || rating) ? "yellow" : "gray"}
        size={50}
        
        />
    })
}
</div>
</div>);
}