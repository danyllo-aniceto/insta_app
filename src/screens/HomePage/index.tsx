import { Image, FlatList, ImageSourcePropType, Text } from 'react-native'

import { Background } from '../../components/Background'
import {
  NavigationBar,
  Icons,
  Icon,
  LogoIG,
  DownArrow,
  ProfileIcon,
  Main,
  ImageIcon
} from './styles'

import heartLogo from '../../assets/heart.png'
import addLogo from '../../assets/add.png'
import messageLogo from '../../assets/message.png'
import IGlogo from '../../assets/IGlogo.png'
import downArrowImage from '../../assets/downArrow.png'
import { DATA } from './mock'
import { Item } from './components/Item'

export function HomePage() {
  return (
    <Background>
      <NavigationBar>
        <LogoIG>
          <Image source={IGlogo} />
          <DownArrow>
            <Image source={downArrowImage} />
          </DownArrow>
        </LogoIG>

        <Icons>
          <Icon>
            <Image source={heartLogo} />
          </Icon>
          <Icon>
            <Image source={messageLogo} />
          </Icon>
          <Icon>
            <Image source={addLogo} />
          </Icon>
        </Icons>
      </NavigationBar>
      <Main>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item icon={item.icon} />}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </Main>
    </Background>
  )
}
