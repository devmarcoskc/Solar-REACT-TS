import * as C from './styles';
import ProjectIcon from '../../assets/Images/ProjectIcon.png';
import CarIcon from '../../assets/Images/CarIcon.png';
import DocIcon from '../../assets/Images/DocIcon.png';
import MoneyIcon from '../../assets/Images/MoneyIcon.png';
import PanelIcon from '../../assets/Images/PanelIcon.png';
import ProjectImg from '../../assets/Images/ProjectImg.jpg';
import InstalationImg from '../../assets/Images/InstalationImg.jpg';
import DocImg from '../../assets/Images/DocIMg.jpg';
import InvestimentImg from '../../assets/Images/InvestmentImg.jpg';
import CleaningImg from '../../assets/Images/CleaningImg.jpg';
import { SelectedPage } from '../../Types/types';
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const HowWeDo = ({setSelectedPage}: Props) => {
  return (
    <C.Section id='howwework'>
        <C.TitleAndSubtitle>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.8}}
            variants={{
              hidden: {opacity:0, x:-50},
              visible: {opacity:1, x:0}
            }}  
          >
              HOW WE WORK
          </motion.h1>
          <motion.h2
            onViewportEnter={() => setSelectedPage(SelectedPage.HowWeWork)}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
              hidden: {opacity:0, x:50},
              visible: {opacity:1, x:0}
            }}  
          >
              The whole process is did with our team, 
              that cares about the smallest details
          </motion.h2>
        </C.TitleAndSubtitle>
        <C.CardsContainer>
            <C.CardItem
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay:0.2, duration: 0.7}}
                variants={{
                  hidden: {opacity:0, x:-50},
                  visible: {opacity:1, x:0}
                }} 
            >
                <div className='card'>
                  <div className='front-card'
                    style={{backgroundImage:`url(${ProjectImg})`}}
                  >
                    <div className='background-black'>
                      <img src={ProjectIcon}/>
                      <span>01</span>
                      <h4>PROJECT & DIMENSIONING</h4>
                    </div>
                  </div>
                  <div className='back-card'>
                    The only thing we need is your electricity bill. 
                    With it, we make a pre-proposal of values. With the approval, 
                    we carry out the inspection of the building, and make a proposal already 
                    with the layout and other intervention.
                  </div>
                  
                </div>
            </C.CardItem>

            <C.CardItem
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.5}}
              transition={{delay:0.2, duration: 0.7}}
              variants={{
                hidden: {opacity:0, x:-50},
                visible: {opacity:1, x:0}
              }}            
            >
                <div className='card'>
                  <div 
                    className='front-card'
                    style={{backgroundImage:`url(${InstalationImg})`}}
                  >
                  <div className='background-black'>
                      <img src={CarIcon}/>
                      <span>02</span>
                      <h4>INSTALATION</h4>
                    </div>
                  </div>
                  <div className='back-card'>
                    The equipments will be bring to the local and our team will 
                    schedule the best time to initiate the installation. 
                    It's not needed turnoff the electricity of the local during the process
                  </div>
                </div>
            </C.CardItem>

            <C.CardItem
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay:0.2, duration: 0.7}}
                variants={{
                  hidden: {opacity:0, x:-50},
                  visible: {opacity:1, x:0}
                }}             
            >
                <div className='card'>
                  <div className='front-card'
                    style={{backgroundImage:`url(${DocImg})`}}
                  >
                    <div className='background-black'>
                      <img src={DocIcon}/>
                      <span>03</span>
                      <h4>DOCUMENTATION</h4>
                    </div>
                  </div>
                  <div className='back-card'>
                    With the installation finished and the generation configured, 
                    is started the documentation process with the concessionaire.  
                    When everything it's finished, all the eletricity generated will be contabilited 
                  </div>
                </div>
            </C.CardItem>

            <C.CardItem
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay:0.2, duration: 0.7}}
                variants={{
                    hidden: {opacity:0, x:-50},
                    visible: {opacity:1, x:0}
                }}              
            >
                <div className='card'>
                  <div className='front-card'
                    style={{backgroundImage:`url(${InvestimentImg})`}}
                  >
                    <div className='background-black'>
                      <img src={MoneyIcon}/>
                      <span>04</span>
                      <h4>RETURN ON INVESTIMENT</h4>
                    </div>
                  </div>
                  <div className='back-card'>
                    After approval, the concessionaire will credit your entire generation to your account, 
                    with the possibility of saving up to 90%. In addition, installing a photovoltaic solar 
                    system is insurance against energy inflation.
                  </div>
                </div>
            </C.CardItem>

            <C.CardItem
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{delay:0.2, duration: 0.7}}
                variants={{
                    hidden: {opacity:0, x:-50},
                    visible: {opacity:1, x:0}
                }}           
            >
                <div className='card'>
                  <div className='front-card'
                    style={{backgroundImage:`url(${CleaningImg})`}}
                  >
                    <div className='background-black'>
                      <img src={PanelIcon}/>
                      <span>05</span>
                      <h4>MANUTENTION AND CLEARING</h4>
                    </div>
                  </div>
                  <div className='back-card'>          
                    To maximize your generation, it is necessary to periodically clean the panels, 
                    removing any accumulated dirt. When performing the cleaning, the team will inspect 
                    the entire facility in a preventive manner.
                  </div>
                </div>
            </C.CardItem>
        </C.CardsContainer>
    </C.Section>
  )
}

export default HowWeDo;
