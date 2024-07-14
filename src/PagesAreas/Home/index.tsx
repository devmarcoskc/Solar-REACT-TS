import * as C from './styles';
import { SelectedPage } from '../../Types/types';
import BannerIMG from '../../assets/Images/BannerHomeImg.jpeg';
import SimulationBttn from '../../Components/SimulationBttn';
import { motion } from 'framer-motion';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
  return (
    <C.Section
      style={{backgroundImage:`url(${BannerIMG})`}}
      id="home"
    >
      <C.BackgroundBlue
        as={motion.section}
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <C.Container> 
          <p>Aluno: Marcos Kommling Centeno</p>
          <p>RU 4627300</p>
          <h1>SOLAR ENERGY</h1>
          <h1>IS FOR EVERYBODY!</h1>
          <h2>Discover how to have more economical, 
          quality and sustainable energy in your home
          </h2>
          <SimulationBttn setSelectedPage={setSelectedPage}/>
        </C.Container>
      </C.BackgroundBlue>
    </C.Section>
  )
}

export default Home;