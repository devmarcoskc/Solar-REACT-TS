import Footer from '../Footer';
import HeaderPanels from '../../Components/HeaderPanels';
import ItemToBuyGeneralArea from '../../Components/ItemToBuyMainInfos';
import ItemTechnicalInfos from '../../Components/ItemTechnicalInfos';
import DeyePanelImg from '../../assets/Images/PanelKit1.png';
import ContactUsPanels from '../../Components/ContactUsPanels';

const DeyePanel = () => {
  const itemValuesToTable = [
    {value: '475.00'},
    {value: '43.10'},
    {value: '11.56'},
    {value: '50.10±3%'},
    {value: '12.08±3%'},
    {value: '21.30'},
    {value: '1500v'},
    {value: '20 A'},
    {value: '0~+4 W'},
    {value: '-0.370 %/℃'},
    {value: '-0.275 %/℃'},
    {value: '+0.049 %/℃'},
    {value: '45±1 ℃'},
    {value: '-40~+82 ℃'},
    {value: '169*88 Mono'},
    {value: '144 (12*12)'},
    {value: '2102*1040*35mm'},
    {value: '23.50kg'},
    {value: 'Anodized Aluminium Alloy'},
    {value: '5mm² cable 30.5cm (Inlcuding MC4 connector)'}
  ]
  return (
    <div>
      <HeaderPanels
        nameItem={'Kit Solar On Grid – 24 Intelbras 535W – Micro Inversor Deye Sun 2000G3 – 12,84 KWp'}
      />
      <ItemToBuyGeneralArea 
        itemImgToShow={DeyePanelImg} 
        nameItem={'Kit Solar On Grid – 24 Intelbras 535W – Micro Inversor Deye Sun 2000G3 – 12,84 KWp'}
        generalPrice='R$ 46.835,00'
        actualPrice='R$ 41.835,00'
      />
      <ItemTechnicalInfos
        description='
        The monocrystalline, monofacial, 10BB, PERC and half cell photovoltaic module offers excellent 
        cost-benefit in solar energy generation, in projects of all sizes. Maintaining the strict Intelbras 
        quality standard, all modules are individually tested. Safety and quality combined with a 25-year 
        performance guarantee (at least 84.8% of its nominal performance).'
        values={itemValuesToTable}
      />
      <ContactUsPanels/>
      <Footer/>
    </div>
  )
}

export default DeyePanel