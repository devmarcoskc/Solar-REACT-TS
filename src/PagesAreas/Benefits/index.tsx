import * as C from './styles';
import { SelectedPage } from '../../Types/types';
import BenefitsImg from '../../assets/Images/BenefitsImg.png';
import {BsCheck} from 'react-icons/bs';
import SimulationBttn from '../../Components/SimulationBttn';
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <C.Section
      id="benefits"
    >
        <C.Container>
            <C.H1
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.5}}
              transition={{duration: 0.8}}
              variants={{
                hidden: {opacity:0, x:-50},
                visible: {opacity:1, x:0}
              }}            
            >
                SOLAR ENERGY IS NOT THE FUTURE, IS THE PRESENT
            </C.H1>
            <C.H2
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.5}}
              transition={{duration: 0.5}}
              variants={{
                hidden: {opacity:0},
                visible: {opacity:1}
              }}      
            >
                join the community of an economic lifestyle, sustainable and efficient
            </C.H2>
            <motion.div 
                className='flex-div'
            >
                <C.LeftSide 
                    onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay:0.2, duration: 0.7}}
                    variants={{
                      hidden: {opacity:0, x:-50},
                      visible: {opacity:1, x:0}
                    }} 
                >
                    <img src={BenefitsImg} alt='image-of-the-benefits-of-the-panel'/>
                </C.LeftSide>
                <C.RightSide
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay:0.2, duration: 0.7}}
                    variants={{
                      hidden: {opacity:0, x:50},
                      visible: {opacity:1, x:0}
                    }} 
                >
                    <h1>The main benefits:</h1>
                    <div className='check-and-resum'>
                        <BsCheck/>
                        <p>Savings of up to 95% on your electricity bill</p>
                    </div>
                    <div className='check-and-resum'>
                        <BsCheck/>
                        <p>Energy of the best quality, more stable</p>
                    </div>
                    <div className='check-and-resum'>
                        <BsCheck/>
                        <p>The investment pays for itself in up to 5 years</p>
                    </div>
                    <div className='check-and-resum'>
                        <BsCheck/>
                        <p>Ocupe little space and adds value to the property</p>
                    </div>
                    <div className='check-and-resum'>
                        <BsCheck/>
                        <p>Simple and low-cost maintenance</p>
                    </div>
                    <div className='check-and-resum'>
                        <BsCheck/>
                        <p>Guarantee of 25 years</p>
                    </div>
                    <div className='check-and-resum' style={{marginBottom: '20px'}}>
                        <BsCheck/>
                        <p>You can avoid high prices in your electricity bills</p>
                    </div>
                    <SimulationBttn setSelectedPage={setSelectedPage}/>
                </C.RightSide>
            </motion.div>
        </C.Container>
    </C.Section>
  )
}

export default Benefits;
