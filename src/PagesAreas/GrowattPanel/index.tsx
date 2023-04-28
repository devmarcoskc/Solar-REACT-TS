import HeaderPanels from '../../Components/HeaderPanels';
import ItemToBuyGeneralArea from '../../Components/ItemToBuyMainInfos';
import ItemTechnicalInfos from '../../Components/ItemTechnicalInfos';
import GrowattPanelImg from '../../assets/Images/PanelKit2.png';
import Footer from '../Footer';
import ContactUsPanels from '../../Components/ContactUsPanels';

const GrowattPanel = () => {
  const itemValuesToTable = [
    {value: '485.00'},
    {value: '45.10'},
    {value: '12.56'},
    {value: '52.15±3%'},
    {value: '12.58±3%'},
    {value: '22.50'},
    {value: '1600v'},
    {value: '21 A'},
    {value: '0~+4 W'},
    {value: '-0.340 %/℃'},
    {value: '-0.265 %/℃'},
    {value: '+0.049 %/℃'},
    {value: '45±1 ℃'},
    {value: '-40~+82 ℃'},
    {value: '172*88 Mono'},
    {value: '1196 (14*14)'},
    {value: '2202*1150*35mm'},
    {value: '24.00kg'},
    {value: 'Anodized Aluminium Alloy'},
    {value: '8mm² cable 31cm (Inlcuding MC4 connector)'}
  ]

  return (
    <div>
      <HeaderPanels
        nameItem='Gerador Fotovoltaico Growatt On Grid 40000TL3-NS 40kW com 28,8kWp'
      />
      <ItemToBuyGeneralArea
        itemImgToShow={GrowattPanelImg}
        nameItem='Gerador Fotovoltaico Growatt On Grid 40000TL3-NS 40kW com 28,8kWp'
        generalPrice='R$ 78.690,00'
        actualPrice='R$ 69.999,90'
      />
      <ItemTechnicalInfos
        description='With a maximum efficiency inverter of 99%, dual MPP tracker and 
        integrated DC switch, accompanied by a module with half-cut cell technology, 
        excellent heat dissipation and a double glass structure resistant to micro-cracks, 
        Growatts On Grid Photovoltaic Generator provides efficiency and quality to its client, 
        always being of enormous trust'
        values={itemValuesToTable}
      />
      <ContactUsPanels/>
      <Footer/>
    </div>
  )
}

export default GrowattPanel