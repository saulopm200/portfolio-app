import { P } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Paragrafo = (props: Props) => (
  <P fontSize={props.fontSize}>{props.children}</P>
)

export default Paragrafo
