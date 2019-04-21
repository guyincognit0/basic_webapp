import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'


function LoadingPlaceholder(props) {
  return (
    <div>
      <Segment placeholder>
        <Dimmer active inverted>
          <Loader inverted content='Loading' />
        </Dimmer>
        <Image src='static/short-paragraph.png' />
      </Segment>
    </div>
  )
}

export default LoadingPlaceholder;
