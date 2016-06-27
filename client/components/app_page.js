// create app page components
// import react
import React from 'react';
import AppDetail from './app_detail';


// create our component
const AppPage = (props) => {
	const validImages = props.images.filter(image => !image.is_album);

  const RenderedImages = validImages.map(image =>
    <AppDetail key={image.title} image={image} />
  );

  return (
    <ul className="media-list list-group">
      {RenderedImages}
    </ul>
  );
};

// export component
export default AppPage;

