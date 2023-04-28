import { motion } from 'framer-motion';
import * as C from './styles';
import {useState} from 'react';
import { useForm } from 'react-hook-form';
import { SimulationType } from '../../Types/types';
import { ApiRequests } from '../../Helpers/ApiRequests';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from '../../Types/types';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Simulation = ({setSelectedPage}: Props) => {
  const [resultToShow, setResultToShow] = useState<boolean>(false);
  const [kwhMonthlyConsume, setKwhMonthlyConsume] = useState<number>(0);
  const [kwhMonthOsdaPanel, setKwhMonthOsdaPanel] = useState<number>(0);
  const [kwhMonthDeyePanel, setKwhMonthDeyePanel] = useState<number>(0);
  const [kwhMonthGrowattPanel, setKwhMonthGrowattPanel] = useState<number>(0);
  const [osdaNeeded, setOsdaNeeded] = useState<number>(0);
  const [deyeNeeded, setDeyeNeeded] = useState<number>(0);
  const [growattNeeded, setGrowattNeeded] = useState<number>(0);
  const [loadingPage, setLoadingPage] = useState<boolean>(false);
  const [errorMsgApi, setErrorMsgApi] = useState<boolean>(false);

  let MonthOsda = 0;
  let MonthDeye = 0;
  let MonthGrowatt = 0;

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm<SimulationType>();

  const submitData = async (data: SimulationType) => {
    setLoadingPage(true);
    let response = await ApiRequests.GetSolarIrradiance(data.lat, data.lon);

    if (response.status < 500) {
        setErrorMsgApi(true);
        setLoadingPage(false);
    } 
    
    setKwhMonthlyConsume(data.value);
    CalcSolarEnergyNeeded(response.outputs.poa_monthly[0]);
    CalcBasedOnEletricityBill(data.value);

    setErrorMsgApi(false);
    setLoadingPage(false);
    setResultToShow(true);
  }

  const CalcSolarEnergyNeeded =  (monthSolarIrradiance:number) => {
    let dailyEnergySolarKwh = parseInt((monthSolarIrradiance / 30).toFixed(2));
    let ActualDaily = parseInt(dailyEnergySolarKwh.toFixed(0));

    let ResultOSDAPanel = CalcPanelOSDA(ActualDaily);
    let ResultDeyePanel = CalcPanelDeye(ActualDaily);
    let ResulGrowattPanel = CalcGrowattt(ActualDaily);

    return {
      ResultOSDAPanel, ResultDeyePanel, ResulGrowattPanel
    }
  }

  const CalcPanelOSDA = (x:number) => {
    let EnergyGenerated = (x * 22) / 100;
    let AllPanelsEnergy = ((EnergyGenerated * 2.19) * 4) * 30;
    setKwhMonthOsdaPanel(parseInt(AllPanelsEnergy.toFixed(2)));
    MonthOsda = parseInt(AllPanelsEnergy.toFixed(2));
    return parseInt(AllPanelsEnergy.toFixed(2));
  }

  const CalcPanelDeye = (x:number) => {
    let EnergyGenerated = (x * 21.3) / 100;
    let AllPanelsEnergy = ((EnergyGenerated * 2.20) * 6) * 30;
    setKwhMonthDeyePanel(parseInt(AllPanelsEnergy.toFixed(2)));
    MonthDeye = parseInt(AllPanelsEnergy.toFixed(2));
    return parseInt(AllPanelsEnergy.toFixed(2));
  }

  const CalcGrowattt = (x: number) => {
    let EnergyGenerated = (x * 22.5) / 100;
    let AllPanelsEnergy = ((EnergyGenerated * 3.22) * 6) * 30;
    setKwhMonthGrowattPanel(parseInt(AllPanelsEnergy.toFixed(2)));
    MonthGrowatt = parseInt(AllPanelsEnergy.toFixed(2));
    return parseInt(AllPanelsEnergy.toFixed(2));
  }

  const CalcBasedOnEletricityBill = (eletricityBill: number) => {
      let howMuchOsdaNeeded = Math.ceil(eletricityBill / MonthOsda);
      let howMuchDeyeNeeded = Math.ceil(eletricityBill / MonthDeye);
      let howMuchGrowattNeeded = Math.ceil(eletricityBill / MonthGrowatt);
      
      setOsdaNeeded(howMuchOsdaNeeded);
      setDeyeNeeded(howMuchDeyeNeeded);
      setGrowattNeeded(howMuchGrowattNeeded);

      return {
        howMuchDeyeNeeded, howMuchOsdaNeeded, howMuchGrowattNeeded
      }
  }

  const ResetResultInfos = (e:React.MouseEvent<HTMLButtonElement>) => {
      setResultToShow(false);
  }

  return (
    <C.Section
      id="simulation"
    >
        <C.Container>
          {!resultToShow && !loadingPage && 
          <motion.div>
            <C.H1
              onViewportEnter={() => setSelectedPage(SelectedPage.Simulation)}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.5}}
              transition={{duration: 0.8}}
              variants={{
                hidden: {opacity:0, x:-50},
                visible: {opacity:1, x:0}
              }}
            >
              SIMULATE YOUR ECONOMY!
            </C.H1>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.5}}
              transition={{duration: 0.5}}
              variants={{
                hidden: {opacity:0, x:50},
                visible: {opacity:1, x:0}
              }}  
            >
              Check how much Solar Panels you will need.
             </motion.h2>
            <form
              onSubmit={handleSubmit(submitData)}
              method="POST"
            >
              <label>Your name:</label>
              <input 
                type="text" 
                placeholder='Your full name'
                {...register("name", {
                  required: true,
                  maxLength: 100,
                  pattern: /^[A-Za-z]+[\s)^[A-Za-z]+$/gi
                })}
              />
              {errors.name && (
                  <span className='error-condition'>
                    {errors.name.type === "required" && "This fild is required*"}
                    {errors.name.type === "pattern" && "Digit a valid name*"}
                    {errors.name.type === "maxLenght" && "Max lenght is 100*"}
                  </span>
               )}

              <label>Email:</label>
               <input
                  type="text"
                  placeholder='Digit your email'
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
               />
               {errors.email && (
                  <span className='error-condition'>
                    {errors.email.type === "required" && "This fild is required*"}
                    {errors.email.type === "pattern" && "Digit a valid email*"}
                  </span>
                )}

                <label>Inform the cost of your electricity bill:</label>
                <input 
                  type="number"
                  placeholder='Inform the last cost'
                  {...register("value", {
                    required: true
                  })}
                />
                {errors.value && (
                  <span className='error-condition'>
                      {errors.value.type === "required" && "This fild is required*"}
                  </span>
                )}

              
                <label>Digit the latitude and longitude of your location only in US:</label>
              <div className='latitude-and-longitude'>
                <div className='inputs-lat-lon'>
                  <label>Latitude:</label>
                  <input
                    type='text'
                    className='latitude-field'
                    placeholder='Latitude exemple: 25.785122709228094'
                    {...register("lat", {
                      required: true
                    })}
                  />
                  {errors.value && (
                    <span className='error-condition'>
                        {errors.value.type === "required" && "This fild is required*"}
                    </span>
                  )}
                </div> 
                
                <div className='inputs-lat-lon' style={{marginLeft: '5%'}}>
                  <label>Longitutude:</label>
                  <input
                    type='text'
                    placeholder='Longitude exemple: -80.22603521514208'
                    {...register("lon", {
                      required: true
                    })}
                  />
                  {errors.value && (
                    <span className='error-condition'>
                        {errors.value.type === "required" && "This fild is required*"}
                    </span>
                  )}
                </div>
              </div>
              {errorMsgApi &&
                <span className='error-condition'>
                  We didn't find any location with this latitude or longitude. 
                  Please, try another*
                </span>
              }
              <p>Don't know how to do it ? Go on google maps, set your city and click with the right button on the location.</p>
              <button type='submit'>Simulate Your Economy</button>

            </form>
          </motion.div>
          }
          {loadingPage &&
            <div className='loading-area'>
              <C.H1>SIMULATE YOUR ECONOMY!</C.H1>
              <h2>Check how much Solar Panels you will need.</h2>
              <h5>Loading...</h5>
            </div>
          }

          {resultToShow && 
            <div className='simulation-result-container'>
              <C.H1>SIMULATE YOUR ECONOMY!</C.H1>
              <h2>Check how much Solar Panels you will need.</h2>
              <C.ResultToShowDiv>
              <div className='title-and-result'>
                <h1>Results finded for your <span>{kwhMonthlyConsume} kwh</span> consume:</h1>
              </div> 
                <h4>All the calculations have been based in the solar incidence last month of your region selected. 
                  The results of the simulation for each Panel:
                </h4>

                <div className='panels-and-results'>

                  <div className='results-panel'>
                    <h4>Kit Panel OSDA:</h4>
                    <div className='title-and-result'>
                      <h5>How much generated: <span>{kwhMonthOsdaPanel} kwh</span></h5>
                    </div>
                    <div className='title-and-result'>
                      <h5>How much you will need: <span>{osdaNeeded}</span></h5>
                    </div>
                    <AnchorLink href='#panelOsda'>Panel Infos</AnchorLink>
                  </div>

                  <div className='results-panel' style={{marginLeft: '40px'}}>
                    <h4>Kit Panel Deye On:</h4>
                    <div className='title-and-result'>
                      <h5>How much generated: <span>{kwhMonthDeyePanel} kwh</span></h5>
                    </div>
                    <div className='title-and-result'>
                      <h5>How much you will need: <span>{deyeNeeded}</span></h5>
                    </div>
                    <AnchorLink href='#panelDeyeOn'>Panel Infos</AnchorLink>
                  </div>

                  <div className='results-panel' style={{marginLeft: '40px'}}>
                    <h4>Kit Panel Growatt NS:</h4>
                    <div className='title-and-result'>
                      <h5>How much generated: <span>{kwhMonthGrowattPanel} kwh</span></h5>
                    </div>
                    <div className='title-and-result'>
                      <h5>How much you will need: <span>{growattNeeded}</span></h5>
                    </div>
                    <AnchorLink href='#panelGrowattNs'>Panel Infos</AnchorLink>
                  </div>

                </div>

                <div className='title-and-result'>
                  <h4>These are the results, if you have any questions about the functioning 
                    or the cost of the panels, you can <AnchorLink href='#contactus'>contact us.</AnchorLink>
                  </h4>
                </div>

                <button onClick={ResetResultInfos}>Return</button>
              </C.ResultToShowDiv>
            </div>
          }
        </C.Container>
    </C.Section>
  )
}

export default Simulation
