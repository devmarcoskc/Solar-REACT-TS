import * as C from './styles';
import { motion } from 'framer-motion';
import PanelKit1 from '../../assets/Images/PanelKit1.png';
import PanelKit2 from '../../assets/Images/PanelKit2.png';
import PanelKit3 from '../../assets/Images/PanelKit3.jpg';
import { Link } from 'react-router-dom';
import { SelectedPage } from '../../Types/types';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const SolarPanels = ({setSelectedPage}: Props) => {
  const setToTheTop = (e:React.MouseEvent<HTMLAnchorElement>) => {
    window.scrollTo(0,0);
  }

  return (
    <C.Section 
      id='solarpanels' 
    >
        <C.Container>
            <motion.h1 
              className='h1-title'
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.5}}
              transition={{duration: 0.8}}
              variants={{
                hidden: {opacity:0, x:-50},
                visible: {opacity:1, x:0}
              }}   
            >
              SOLAR PANELS
            </motion.h1>
            <motion.h2 
              className='h2-title'
              onViewportEnter={() => setSelectedPage(SelectedPage.SolarPanels)}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.5}}
              transition={{duration: 0.5}}
              variants={{
                hidden: {opacity:0, x:50},
                visible: {opacity:1, x:0}
              }} 
            >
              Here you can check the best offers of our panels kits
            </motion.h2>

            <C.ShopArea>
              <C.ProductArea
                id='panelDeyeOn'
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay:0.2, duration: 0.7}}
                variants={{
                    hidden: {opacity:0, x:-50},
                    visible: {opacity:1, x:0}
                }} 
              >
                <C.LeftSideImg>
                  <motion.img src={PanelKit1}/>
                </C.LeftSideImg>
                <C.RightSideTexts>
                  <h1>Kit Solar On Grid – 24 Intelbras 535W – Micro Inversor Deye Sun 2000G3 – 12,84 KWp</h1>
                  <span>R$ 46.835,00</span>
                  <h2>R$ 41.835,00</h2>
                  <Link to='deyeOnPanel' onClick={setToTheTop}>More Info</Link>
                </C.RightSideTexts>
              </C.ProductArea>

              <C.ProductArea
                id='panelGrowattNs'
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay:0.2, duration: 0.7}}
                variants={{
                    hidden: {opacity:0, x:-50},
                    visible: {opacity:1, x:0}
                }}              
              >
                <C.LeftSideImg>
                  <img src={PanelKit2}/>
                </C.LeftSideImg>
                <C.RightSideTexts>
                  <h1>Gerador Fotovoltaico Growatt On Grid 40000TL3-NS 40kW com 28,8kWp</h1>
                  <span>R$ 78.690,00</span>
                  <h2>R$ 69.999,90</h2>
                  <Link to='growattNSpanel' onClick={setToTheTop}>More Info</Link>
                </C.RightSideTexts>
              </C.ProductArea>

              <C.ProductArea
                id='panelOsda'
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay:0.2, duration: 0.7}}
                variants={{
                    hidden: {opacity:0, x:-50},
                    visible: {opacity:1, x:0}
                }}              
              >
                <C.LeftSideImg>
                  <img src={PanelKit3}/>
                </C.LeftSideImg>
                <C.RightSideTexts>
                  <h1>Kit Gerador Energia Solar 1,86 kWp - Microinversor Deye c/ Wifi SUN2000 - Painel OSDA</h1>
                  <span>R$ 26.835,00</span>
                  <h2>R$ 21.835,00</h2>
                  <Link to='/osdapanel' onClick={setToTheTop}>More Info</Link>
                </C.RightSideTexts>
              </C.ProductArea>

            </C.ShopArea>
        </C.Container>
    </C.Section>
  )
}

export default SolarPanels;
