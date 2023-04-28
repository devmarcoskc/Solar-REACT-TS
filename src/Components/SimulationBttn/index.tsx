import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "../../Types/types"
import './styles.css';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const SimulationBttn = ({setSelectedPage}: Props) => {
  return (
    <AnchorLink
        className="simulation-link"
        onClick={() => setSelectedPage(SelectedPage.Simulation)}
        href={`#${SelectedPage.Simulation}`}
    >
        Simulate your economy
    </AnchorLink>
  )
}

export default SimulationBttn