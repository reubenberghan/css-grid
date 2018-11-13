import * as React from 'react'
import styled from 'styled-components'

import Footer from '../Footer'
import Header from '../Header'
import Main from '../Main'

const AppWrapper = styled.div`
  background-color: #eee;
  display: grid;
  grid-template:
    'head head head' 5rem
    '. main .' 1fr
    'foot foot foot' 5rem
    / 1fr 4fr 1fr;
  min-height: 100vh;
`

AppWrapper.displayName = 'AppWrapper'

export default function App () {
  return (
    <AppWrapper>
      <Header />
      <Main>
        <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis lacus eget magna ornare volutpat in in nunc. Duis nec eleifend ligula. Donec laoreet urna fermentum lorem vulputate, vulputate pellentesque ex aliquet. Maecenas lacinia blandit enim vitae interdum. Aliquam erat volutpat. Sed eu lectus ante. Pellentesque auctor nisl elit, vitae tincidunt nulla viverra sit amet. Cras fermentum velit non augue iaculis tincidunt.

Phasellus ac posuere urna, ut pulvinar purus. Suspendisse eu mi sapien. Maecenas ultrices placerat finibus. Proin consequat nec arcu a pellentesque. Phasellus at ipsum volutpat, feugiat ante et, sollicitudin ante. Aliquam egestas purus et iaculis facilisis. Vivamus mollis magna ut interdum interdum. Praesent luctus eros vitae lacinia tristique. Nam elementum tincidunt convallis.

Duis eu sapien convallis, dictum ipsum sodales, malesuada lectus. Aliquam volutpat metus nec ex tincidunt congue. Proin sit amet sapien orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi lacinia tempus mauris sed tempus. Sed a leo tellus. Suspendisse lacus eros, porta at velit ac, tempus porta lorem. Proin ligula odio, malesuada et sem non, placerat commodo mi. Suspendisse bibendum dui in massa elementum fringilla. Donec nec condimentum est. Vivamus ultrices rutrum quam vitae convallis.

Morbi ac lacus eu mi elementum vulputate non ac turpis. In sed malesuada arcu, vel elementum lectus. In a lobortis odio. Mauris commodo tristique tellus, at suscipit dolor mattis eget. Sed eget rutrum elit. Quisque fermentum tortor et iaculis luctus. Duis aliquam libero at mauris tristique, vel lacinia mi varius. Nunc tempor sem a nulla rutrum tristique. Suspendisse gravida tristique auctor. Sed commodo porttitor eros, et pretium tellus dapibus nec. Mauris eget enim id massa rhoncus venenatis. Sed at sagittis diam.

Phasellus pretium et leo non facilisis. Ut at tortor eu nulla vestibulum bibendum id vitae diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus quis urna metus. Ut auctor sem id nisl tincidunt aliquet. Donec malesuada non dolor nec egestas. Quisque vulputate aliquet auctor. Donec fermentum, justo nec consectetur blandit, ex lacus luctus dui, vitae ultrices lacus tellus a ex. Sed sagittis enim purus, non cursus nibh imperdiet elementum. Quisque faucibus, augue eget volutpat cursus, augue justo blandit massa, at sollicitudin nisi eros rhoncus felis. Maecenas eu tempor libero. Donec non vulputate odio. Fusce mattis augue in libero iaculis dictum. Proin ultrices nibh id ipsum gravida, non ultrices ligula volutpat. Sed nec convallis nulla, ut tempus eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis lacus eget magna ornare volutpat in in nunc. Duis nec eleifend ligula. Donec laoreet urna fermentum lorem vulputate, vulputate pellentesque ex aliquet. Maecenas lacinia blandit enim vitae interdum. Aliquam erat volutpat. Sed eu lectus ante. Pellentesque auctor nisl elit, vitae tincidunt nulla viverra sit amet. Cras fermentum velit non augue iaculis tincidunt.

Phasellus ac posuere urna, ut pulvinar purus. Suspendisse eu mi sapien. Maecenas ultrices placerat finibus. Proin consequat nec arcu a pellentesque. Phasellus at ipsum volutpat, feugiat ante et, sollicitudin ante. Aliquam egestas purus et iaculis facilisis. Vivamus mollis magna ut interdum interdum. Praesent luctus eros vitae lacinia tristique. Nam elementum tincidunt convallis.

Duis eu sapien convallis, dictum ipsum sodales, malesuada lectus. Aliquam volutpat metus nec ex tincidunt congue. Proin sit amet sapien orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi lacinia tempus mauris sed tempus. Sed a leo tellus. Suspendisse lacus eros, porta at velit ac, tempus porta lorem. Proin ligula odio, malesuada et sem non, placerat commodo mi. Suspendisse bibendum dui in massa elementum fringilla. Donec nec condimentum est. Vivamus ultrices rutrum quam vitae convallis.

Morbi ac lacus eu mi elementum vulputate non ac turpis. In sed malesuada arcu, vel elementum lectus. In a lobortis odio. Mauris commodo tristique tellus, at suscipit dolor mattis eget. Sed eget rutrum elit. Quisque fermentum tortor et iaculis luctus. Duis aliquam libero at mauris tristique, vel lacinia mi varius. Nunc tempor sem a nulla rutrum tristique. Suspendisse gravida tristique auctor. Sed commodo porttitor eros, et pretium tellus dapibus nec. Mauris eget enim id massa rhoncus venenatis. Sed at sagittis diam.

Phasellus pretium et leo non facilisis. Ut at tortor eu nulla vestibulum bibendum id vitae diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus quis urna metus. Ut auctor sem id nisl tincidunt aliquet. Donec malesuada non dolor nec egestas. Quisque vulputate aliquet auctor. Donec fermentum, justo nec consectetur blandit, ex lacus luctus dui, vitae ultrices lacus tellus a ex. Sed sagittis enim purus, non cursus nibh imperdiet elementum. Quisque faucibus, augue eget volutpat cursus, augue justo blandit massa, at sollicitudin nisi eros rhoncus felis. Maecenas eu tempor libero. Donec non vulputate odio. Fusce mattis augue in libero iaculis dictum. Proin ultrices nibh id ipsum gravida, non ultrices ligula volutpat. Sed nec convallis nulla, ut tempus eros.`}</p>
      </Main>
      <Footer />
    </AppWrapper>
  )
}
