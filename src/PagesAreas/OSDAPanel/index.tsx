import Footer from '../Footer';
import HeaderPanels from '../../Components/HeaderPanels';
import ItemToBuyGeneralArea from '../../Components/ItemToBuyMainInfos';
import ItemTechnicalInfos from '../../Components/ItemTechnicalInfos';
import OsdaPanelImg from '../../assets/Images/PanelKit3.jpg'
import ContactUsPanels from '../../Components/ContactUsPanels';

const OsdaPanel = () => {
  const itemValuesToTable = [
    {value: '465.00'},
    {value: '42.10'},
    {value: '11.06'},
    {value: '49.90±3%'},
    {value: '11.78±3%'},
    {value: '22.00'},
    {value: '1500v'},
    {value: '20 A'},
    {value: '0~+3 W'},
    {value: '-0.350 %/℃'},
    {value: '-0.270 %/℃'},
    {value: '+0.048 %/℃'},
    {value: '45±2 ℃'},
    {value: '-40~+85 ℃'},
    {value: '166*83 Mono'},
    {value: '144 (12*12)'},
    {value: '2102*1040*35mm'},
    {value: '23.50kg'},
    {value: 'Anodized Aluminium Alloy'},
    {value: '4mm² cable 30cm (Inlcuding MC4 connector)'}
  ]
  return (
    <div>
      <HeaderPanels
        nameItem='Kit Gerador Energia Solar 1,86 kWp - Microinversor Deye c/ Wifi SUN2000 - Painel OSDA'
      />
      <ItemToBuyGeneralArea
        itemImgToShow={OsdaPanelImg} 
        nameItem='Kit Gerador Energia Solar 1,86 kWp - Microinversor Deye c/ Wifi SUN2000 - Painel OSDA'
        generalPrice='R$ 26.835,00'
        actualPrice='R$ 21.835,00'
      />
      <ItemTechnicalInfos
        description='OSDA Solar established in 2008, is a high-tech enterprise integrating R&D, production and sales of solar
        energy products. It is committed to the overall solution of distributed photovoltaic system and provides
        services from consulting, design, construction, financing to intelligent operation and maintenance.'
        values={itemValuesToTable}
      />
      <ContactUsPanels/>
      <Footer/>
    </div>
  )
}

export default OsdaPanel