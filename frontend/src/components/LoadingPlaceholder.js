import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'


function LoadingPlaceholder(props) {
  // TODO: use local assets
  return (
    <div>
      <Segment>
        <Dimmer active inverted>
          <Loader inverted content='Loading' />
        </Dimmer>
        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      </Segment>
    </div>
  )
}

export default LoadingPlaceholder;
