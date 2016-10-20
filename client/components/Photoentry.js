import React from 'react'

//creating template f

var PhotoEntry = ({photos}) => (
	<div className="smallPhotos"> 
	{photos.map((photo, i) =>
     <div key={i}>
       <a href={photo.url}>
         <img className="smallPhotoItem" src={photo.urlToImage} />
       </a>
    </div>
   )}
 </div>
)


export default PhotoEntry;
