import { ImageIcon, ProfileIcon } from '../styles'

type ItemProps = { icon: any }
export function Item({ icon }: ItemProps) {
  return (
    <ProfileIcon>
      <ImageIcon source={icon} />
    </ProfileIcon>
  )
}
