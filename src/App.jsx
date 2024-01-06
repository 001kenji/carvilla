import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineArrowUpward } from "react-icons/md";
import { FaCircleChevronLeft } from "react-icons/fa6";// the top shiet ^
import NewCarFerrariImg from './assets/images/new-cars-model/ncm1.png'
import NewCarBMWImg from './assets/images/new-cars-model/ncm2.png'
import NewCarImgChevloret1 from './assets/images/new-cars-model/ncm3.png'
import FeautedImg1 from './assets/images/featured-cars/fc1.png'
import FeautedImg2 from './assets/images/featured-cars/fc2.png'
import FeautedImg3 from './assets/images/featured-cars/fc3.png'
import FeautedImg4 from './assets/images/featured-cars/fc4.png'
import FeautedImg5 from './assets/images/featured-cars/fc5.png'
import FeautedImg6 from './assets/images/featured-cars/fc6.png'
import FeautedImg7 from './assets/images/featured-cars/fc7.png'
import FeautedImg8 from './assets/images/featured-cars/fc8.png'
import { FaArrowRightLong } from "react-icons/fa6"; 
import brandImg1 from './assets/images/brand/br1.png'
import brandImg2 from './assets/images/brand/br2.png'
import brandImg3 from './assets/images/brand/br3.png'
import brandImg4 from './assets/images/brand/br4.png'
import brandImg5 from './assets/images/brand/br5.png'
import brandImg6 from './assets/images/brand/br6.png'
import client1 from './assets/images/clients/c1.jpg'
import client2 from './assets/images/clients/c2.jpg'
import client3 from './assets/images/clients/c3.png'
import client4 from './assets/images/clients/c4.jpg'
import carImg from './assets/images/car.png'
import carMaintenanceImg from './assets/images/maintenance.png'
import carInsurenceImg from './assets/images/car-insurance.png'
function App() {
  
  const [shownav, setshownav] = useState(false)
  const [objScroll,setObjScroll] = useState(0)
  const [clientScroll, setClientScroll] = useState(0)
  const [brandScroll, setBrand] = useState(0)
  const [showScroller, setShowScroller] = useState(true)
  const navId = document.getElementById('botton-container-div')
  
  const [navheight, setnavheight] = useState('fit-content')
  const navstyler = {
    height : shownav ? window.innerWidth < 1024 ?'180px' : '50px' : '0px'
  }

  function ShowNav() {
      setshownav((e) => !e)
      console.log('called')
  }
  const moreInfoDatabase = [
    {
      img :carImg,
      ImgAlt : 'car icon',
      title : 'Largest Dealership of Car',
      description :'No matter what your lifestyle or budget, CARVILLA has the wheels to get you there. Browse our extensive inventory of new and pre-owned cars, trucks, SUVs, and more, all under one roof!'
    },
    {
      img :carMaintenanceImg,
      ImgAlt : 'car warrenty icon',
      title : 'Unlimited Repar Warrenty',
      description :'Ditch the dread of repair bills. Our Unlimited Warranty covers you head-to-tail, mile after mile, for complete peace of mind. Drive worry-free and experience the joy of endless open roads.'
    },
    {
      img :carInsurenceImg,
      ImgAlt : 'car insurence icon',
      title : 'Insurence Support',
      description :'Peace of mind for the open road. Get a quote for comprehensive car insurance in minutes, and enjoy the drive knowing you\'re covered.'
    }
  ]
  const moreInfoDatabaseMapper = moreInfoDatabase.map((details) => 
      <div className=' sm:w-[45%] transition-all duration-500 ease-in-out hover:shadow-lg hover:shadow-slate-900 hover:text-white hover:bg-blue-500 text-center gap-3 border-[1px] border-slate-400 rounded-sm p-3 flex flex-col justify-around'>
        <img className=' p-3 min-w-[100px] min-h-[100px] max-h-[100px] mx-auto max-w-[100px] border-[0.5px] border-slate-400 rounded-full' src={details.img} alt={details.alt} />
        <h1 className=' font-semibold text-base'>{details.title}</h1>
        <blockquote className=' text-center font-mono'>{details.description}</blockquote>
        <span className=' min-w-[30px] max-w-[60px] mx-auto min-h-[3px] bg-blue-600 rounded-sm'></span>
      </div>)

const newCarDatabase = [
  {
    title : 'Ferrari 488 superfase',
    img : NewCarFerrariImg,
    description : 'As a seasoned Ferrari client, let me tell you: this new model isn\'t just an evolution, it\'s a revelation. It purrs with the fury of a lion, yet handles like a ballerina on moonbeams.',
    more_Description : 'descripton here - to bee seen on large screen'
  },
  {
    title : 'Chevrolet Camaro',
    img : NewCarImgChevloret1,
    description : 'Listen, the new Camaro\'s a beast. It\'s got that classic muscle car swagger, all sharp lines and bulging hood, but it handles like a dream. I took it up a winding mountain road, and it hugged the curves like a panther.',
    more_Description : 'descripton here - to bee seen on large screen'
  },
  {
    title : 'BMW Series-3 Wagon',
    img : NewCarBMWImg,
    description : 'If you\'re looking for a stylish and practical car that\'s a blast to drive, the BMW 3 Series Wagon is the perfect choice. It\'s got all the performance and handling you\'d expect from a BMW, plus tons of space for gear and groceries.',
    more_Description : 'descripton here - to bee seen on large screen'
  }
]

const newCarMapper = newCarDatabase.map((details) => 
    <div id='mapping-newCar-div' className=' mx-auto text-center flex flex-col '>
      <div>
        <img className=' sm:w-[60%] lg:w-[40%] mx-auto p-6' src={details.img} alt="" />
      </div>
      <div>
        <h1 className=' font-semibold text-gray-800 text-2xl'>{details.title}</h1>
        <blockquote className='text-slate-400'>{details.description}</blockquote>
        <blockquote className=' text-center mx-auto sm:flex-col text-slate-400 hidden sm:flex'>{details.more_Description}</blockquote>
      </div>
    </div>)
const newcarCircle = newCarDatabase.map((item,i) => 
    <span onClick={() => setObjScroll(i)} className={` w-4 h-4 bg-tranparent border-[2px] border-slate-400 minw-w-[5px] rounded-full min-h-[5px] ${objScroll == i ? 'bg-gradient-to-b from-red-500 border-transparent to-blue-500' : "bg-transparent" }`}></span>)
 
const FeauterCarsDB = [
  {
    img : FeautedImg1,
    model :'2017',
    mi : '3100 Mi',
    HorseP : '420HP',
    system :'Automatic',
    title :'BMW 6-Series Gran Coupe',
    cost :'$89,395',
    description :'description here'
  },
  {
    img : FeautedImg2,
    model :'2017',
    mi : '3100 Mi',
    HorseP : '420HP',
    system :'Automatic',
    title :'Chevrolet Camaro WMV20',
    cost :'$66,575',
    description :'description here'
  },
  {
    img : FeautedImg3,
    model :'2017',
    mi : '3100 Mi',
    HorseP : '820HP',
    system :'Automatic',
    title :'Lamborghini V520',
    cost :'$89,395',
    description :'description here'
  },
  {
    img : FeautedImg4,
    model :'2017',
    mi : '3100 Mi',
    HorseP : '520HP',
    system :'Automatic',
    title :'Audi A3 Sedan',
    cost :'$95,500',
    description :'description here'
  },
  {
    img : FeautedImg5,
    model :'2017',
    mi : '3100 Mi',
    HorseP : '420HP',
    system :'Automatic',
    title :'Infinite Z5',
    cost :'$36,850',
    description :'description here'
  },
  {
    img : FeautedImg6,
    model :'2017',
    mi : '3100 Mi',
    HorseP : '420HP',
    system :'Automatic',
    title :'Porsche 718 Cayman',
    cost :'$45,500',
    description :'description here'
  },
  {
    img : FeautedImg7,
    model :'2017',
    mi : '3100 Mi',
    HorseP : '420HP',
    system :'Automatic',
    title :'BMW 8-Series Coupe',
    cost :'$56,000',
    description :'description here'
  },
  {
    img : FeautedImg8,
    model :'2017',
    mi : '3100 Mi',
    HorseP : '420HP',
    system :'Automatic',
    title :'BMW Xseries-6',
    cost :'$75,800',
    description :'description here'
  }
]
  
const FeauterCarsDBMapper = FeauterCarsDB.map((details) => 
    <div id='mapping-featured-div' className=' flex flex-col'>
      <div className=' w-full flex flex-col border-[1px] border-slate-300'>
        <div className=' w-full p-4'>
          <img className=' mx-auto' src={details.img} alt="" />
        </div>
        <div className=' text-center align-middle justify-center border-[1px] text-sm flex-wrap border-t-slate-300 flex flex-row gap-3'>
          <span>Model: {details.model}</span>
          <span>{details.mi}</span>
          <span>{details.HorseP}</span>
          <span>{details.system}</span>
        </div>
      </div>
      <div className=' flex flex-col gap-3 text-center'>
        <h1 className=' text-gray-800 text-lg py-2'>{details.title}</h1>
        <small className=' italic p-0'>{details.cost}</small>
        <blockquote className=' text-slate-600 font-mono'>{details.description}</blockquote>
      </div>
    </div>)

const clientDB = [
  {
    img :client1,
    description : 'My beat-up truck found a second life at CARVILLA. They navigated the maze of financing for me, and now my little family cruises in comfort thanks to their TLC. You want smooth wheels and honest deals? This is your pit stop',
    name : 'Tomas Lili',
    residence : 'New York'
  },
  {
    img :client2,
    description : 'My beat-up truck found a second life at CARVILLA. They navigated the maze of financing for me, and now my little family cruises in comfort thanks to their TLC. You want smooth wheels and honest deals? This is your pit stop',
    name : 'Clack Kental',
    residence : 'Jamaica'
  },
  {
    img :client3,
    description : 'My beat-up truck found a second life at CARVILLA. They navigated the maze of financing for me, and now my little family cruises in comfort thanks to their TLC. You want smooth wheels and honest deals? This is your pit stop',
    name : 'Cloe Adamn',
    residence : 'Washington DC'
  },
  {
    img :client4,
    description : 'My beat-up truck found a second life at CARVILLA. They navigated the maze of financing for me, and now my little family cruises in comfort thanks to their TLC. You want smooth wheels and honest deals? This is your pit stop',
    name : 'John Doe',
    residence : 'Sweden'
  }
]

const clientDBMapper = clientDB.map((details) => 
    <div id='mapping-cleint-div' className='flex flex-col gap-4 align-middle justify-center px-3 border-[1px] border-slate-300 rounded-sm py-3'>
      <img className=' min-w-[150px] border-[1px] sm:max-w-[150px] border-slate-300 min-h-[150px] sm:max-h-[200px] sm:min-h-[150px] rounded-full mx-auto w-[50%] h-[50%]   max-w-[150px] max-h-[150px]' src={details.img} alt="" />
      <blockquote className=' text-slate-500 text-center'>{details.description}</blockquote>
      <h1 className=' text-gray-700 font-semibold text-center text-lg'>{details.name}</h1>
      <span className=' font-mono italic text-center font-semibold'>{details.residence}</span>
    </div>)
const cleintCircle = clientDB.map((item,i) => 
<span onClick={() => setClientScroll(i)} className={` w-4 h-4 bg-tranparent border-[2px] border-slate-400 minw-w-[5px] rounded-full min-h-[5px] ${clientScroll == i ? 'bg-gradient-to-b from-red-500 border-transparent to-blue-500' : "bg-transparent" }`}></span>)

const BrandDB = [
  {
    img :brandImg1
  },
  {
    img :brandImg2
  },
  {
    img :brandImg3
  },
  {
    img :brandImg4
  },
  {
    img :brandImg5
  },
  {
    img :brandImg6
  }
]

const brandMapper = BrandDB.map((item) => 
      <div className=' my-auto h-full' id='mappinig-brand-div'>
      <img className=' my-4' id='brandImg' src={item.img} alt=''  />

      </div>)

useEffect(() => {



  const scroller = async () => {
        setTimeout(() => {
        setBrand((e) => e == 5 ? 0 : e + 1)
}, 4000);
  }

window.innerWidth > 100 ? scroller() : ''
window.innerWidth >=1024 ? setshownav(true) : ''
})

const date = new Date()
const year = date.getFullYear()
window.addEventListener('scroll', function() {
  console.log('scrolled')
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    setShowScroller(true)
  } else {
    setShowScroller(false)
  }
})

  
const ToTopStyler ={
  display : showScroller ? 'flex' : 'none'
}
    return (
    <>
    {/* nav bar */}
    <div  style={ToTopStyler} className=' xl:mt-[20%] lg:mt-[25%] mt-[50%] sm:mt-[30%]  w-full  z-[99] flex fixed ease-in-out transition-all duration-500 animate-bounce '>
      <span className='  rotate-90 ml-auto mr-[2%]  w-fit  minw-w[20px] bg-blue-700 flex flex-row p-2 rounded-full'> <a href="#universal-container-div"><FaCircleChevronLeft className='rotate-90 animate-bounce   text-white'/></a></span>
    </div>
    <div  className=' bg-slate-950 text-slate-50' id='universal-container-div'>
      <div id='navbar-contaner-div'>
          <div id='top-nav-div'>
                <div id='top-nav-icon-div'>
                  <GiHamburgerMenu className=' text-blue-700 text-2xl' onClick={ShowNav} />
                </div>
                <div id='top-nav-title-div'>
                  <h1 className=' text-2xl font-medium'>CARVILLA</h1>
                </div>
                
          </div>
          <hr className=' md:hidden w-[100%] h-[1px]' />
          <div style={navstyler} className=' transition-[height] transition-all duration-500 ease-in-out ' id='botton-container-div'>
            <ul className=' flex flex-col lg:flex-row lg:gap-4 lg:flex-wrap   lg:h-[80px]   lg:w-[100%] lg:justify-around  gap-1 my-2'>
              <li className=' lg:my-auto'><a href="#home-container-div">HOME</a></li>
              <li className=' lg:my-auto'><a href="#serviceSect">SERVICE</a></li>
              <li className=' lg:my-auto'><a href="#featuredSect">FEATURED CARS</a></li>
              <li className=' lg:my-auto'><a href="#NewCarSect">NEW CARS</a></li>
              <li className=' lg:my-auto'><a href="#brand-section-container">BRANDS</a></li>
              <li className=' lg:my-auto'><a href="#contactSect">CONTACT</a></li>
            </ul>
            <span className='  bg-blue-600  w-2'></span>
          </div>
      </div>

    </div>

    {/* home bar */}
    <div id='home-container-div'>
      <div className='  text-slate-50' id='home-content-div'>
        <h1 className='  font-bold text-xl text-white'>GET YOUR DESIRED CAR IN RESONABLE PRICE</h1>
        <blockquote className=' text-slate-100 font-mono'>Ready to hit the road in the perfect vehicle? Look no further than CARVILLA! We offer a premium selection of new and used cars, trucks, and SUVs to fit every budget and lifestyle.</blockquote>
        <button className=' hover:bg-gradient-to-br ease-in-out from-slate-900 to-red-500 hover:text-yellow-400 hover:font-semibold  min-w-[140px] transition-all duration-500 bg-blue-700 p-3 text-center text-sm font-semibold rounded-sm mx-auto grid align-middle text-slate-50'><p className=' transition-all ease-in-out duration-500 h-full hover:animate-bounce'>Contact Us</p></button>

      </div>
      <div className=' -mt-[10%] sm:-mt-[5%] lg:-mt-[3%] ' id='search-container-div'>

        <form className='bg-slate-50 border-[1px] border-slate-700 rounded-md shadow-lg shadow-red-400' id='SearchCarForm' noValidate>
          <div className='  flex flex-col'>
            <label htmlFor="">Select Year</label>
            <select name="" id="">
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
            <label htmlFor="">Body Style</label>
            <select name="" id="">
              <option value="">Van</option>
              <option value="">Road Star</option>
              <option value="">Sport Car</option>
            </select>
          </div>
          <div className='  flex flex-col'>
            <label htmlFor="">Select Make</label>
            <select name="" id="">
              <option value="" selected>Toyota</option>
              <option value="">Holden</option>
              <option value="">Maecedes-Benz</option>
              <option value="">Ford</option>
              <option value="">Audi</option>
            </select>
            <label htmlFor="">Car Condition</label>
            <select name="" id="">
              <option value="">Brand New</option>
              <option value="">Refurblished</option>
              <option value="">Old-in-Stock</option>
            </select>
          </div>
          <div className='  flex flex-col'>
            <label htmlFor="">Select Model</label>
            <select name="" id="">
              <option value="">Kia-Rio</option>
              <option value="">Mistubishi</option>
              <option value="">Ford</option>
            </select>
            <label htmlFor="">Select Price</label>
            <select name="" id="">
              <option value="">50-100 Grand</option>
              <option value="">100-300 Grand</option>
              <option value="">300-800 Grand</option>
              <option value=""> 800-2000 Grand</option>
            </select>
          </div>
          <div className=' my-5  flex flex-col'>
            <button className=' transition-all duration-500 hover:bg-transparent hover:font-semibold hover:text-lg hover:text-blue-600 my-2 min-w-[150px] text-center rounded-sm text-base text-slate-50 bg-blue-500 p-3' type='button'>Search</button>
          </div>
        </form>
      </div>

    </div>

    {/* more info div */}
    <section id='serviceSect'>
      <div  className=' text-center my-4 flex flex-col justify-around gap-4' id='heading-featured-container-div'>
    <h1 className=' text-3xl sm:text-4xl text-gray-800 font-normal'>Services</h1>
        <span className=' max-w-[8rem] min-w-[5rem] mx-auto min-h-[3px]  bg-blue-500 rounded-sm'></span>
    </div>
    </section>
    
    <div id='moreInfo-conteiner-div'>

      {moreInfoDatabaseMapper}
    </div>
   {/* new car section */}
<section id='NewCarSect' >
  <div className=' text-center my-4 flex flex-col justify-around gap-4' id='heading-featured-container-div'>
    <h1 className=' text-3xl sm:text-4xl text-gray-800 font-normal'>New Cars</h1>
        <span className=' max-w-[8rem] min-w-[5rem] mx-auto min-h-[3px]  bg-blue-500 rounded-sm'></span>
    </div>
</section>
    
 

    <section id='newCar-section' className='  overflow-hidden'>
      <div id='newCar-hosting-div' style={{transform: `translateX(-${objScroll * 100}%)`}}  className=' ease-in-out transition-all duration-500'>
          {newCarMapper}
         
      </div>
      <div className=' flex flex-rpw w-[50%] mx-auto justify-around'> {newcarCircle}</div>
         
    </section>

    {/* featured cars section */}

    <div id='featuredSect' className=' max-w-full min-w-full'>
      <div className=' text-center my-4 flex flex-col justify-around gap-4' id='heading-featured-container-div'>
        <span className=' text-base text-slate-500 font-semibold sm:text-lg'>Checkout the Feauterd Cars</span>
        <h1 className=' text-3xl text-gray-900 font-semibold sm:text-4xl'>Featured Cars</h1>
        <span className=' max-w-[10rem] min-w-[7rem] mx-auto min-h-[3px]  bg-blue-500 rounded-sm'></span>

      </div>

      <section className=' overflow-hidden w-full'>
      <div id='hosting-featured-div'>{FeauterCarsDBMapper}</div>

      </section>

    </div>

    {/* client says */}
    <div>
    <div className=' text-center my-4 flex flex-col justify-around gap-4' id='heading-featured-container-div'>
        <h1 className=' text-3xl sm:text-4xl text-gray-800 font-normal'>What Our Clients Say</h1>
        <span className=' max-w-[10rem] min-w-[7rem] mx-auto min-h-[3px]  bg-blue-500 rounded-sm'></span>

      </div>

      <section id='client-section-container' className=' overflow-hidden'>
        <div style={{transform: `translateX(-${clientScroll * 100}%)`}}  className=' ease-in-out transition-all duration-500' id='hosting-cleint-div'>
              {clientDBMapper}
        </div>
        <div className=' flex flex-rpw w-[50%] mx-auto justify-around my-1 py-2'>{cleintCircle}</div>
      </section>

      <section  id='brand-section-container' className=' bg-slate-200 overflow-hidden'>
        <div style={{transform: `translateX(-${brandScroll * 100}%)`}}  className=' bg-green-800 m-auto ease-in-out transition-all duration-500' id='brand-hosting-div'>
              {brandMapper}
        </div>
      </section>
    </div>
    
    
    {/* footer section */}
    <footer className=' bg-slate-950 text-slate-50' id='univesal-footer-div'>
      <div id='top-footer-div'>
          <div id='moreInfo-footer-div'>
            <h1 className=' font-bold font-serif text-2xl my-2 '>CARVILLA</h1>
            <blockquote className=' font-mono'>description here</blockquote>
            <span className='italic '>yahoo@carvilla.com</span>
            <span className=' text-sm'>+254 7123456789</span>
          </div>
          <div id='about-devtool-div' className='  font-mono flex flex-col gap-[5px] text-center my-4'>
            <h1 className='font-bold font-serif text-2xl my-2  text-center'>ABOUT DEVTOOL</h1>
            <span className=' font-mono font-semibold text-lg'>About Us</span>
            <span className=' text-right sm:pr-14'>Career</span>
            <span className=' text-right sm:pr-14'>Terms of service</span>
            <span className=' text-right sm:pr-14'>Privacy Policy</span>
          </div>
          <div id='topbrand-div' className=' font-mono flex flex-col gap-[5px] text-center my-4'>
            <h1 className=' font-bold font-serif text-2xl my-2 '>TOP BRANDS</h1>
            <ul>
              <li>BWM</li>
              <li>Lamborghini</li>
              <li>Camaro</li>
              <li>Audi</li>
              <li>Infiniti</li>
              <li>Nissan</li>
              <li>Ferrari</li>
              <li>Porsche</li>
              <li>Land Rover</li>
              <li>Aston Martin</li>
              <li>Maersedes</li>
              <li>Opel</li>
            </ul>
          </div>
          <div id='contactSect' className=' w-[90%] sm:w-[50%] sm:my-0 mx-auto sm:justify-around sm:mt-4 sm:mb-auto sm:h-[200px] font-mono flex flex-col gap-[5px] text-center my-4'>
            <h1 className=' font-bold font-serif text-2xl my-2 '>NEWS LETTER</h1>
            <blockquote className=' px-2 text-center'>Subscribe to get latest nes update and informations</blockquote>
            <input placeholder='Add Email' className=' outline-yellow-500 placeholder:text-center rounded-sm w-full p-3 bg-blue-950 text-slate-50 text-left font-normal font-serif' noValidate type="email" />

          </div>
      </div>
      <div id='developer-div' className=' text-center grid grid-cols-1 align-middle mx-auto  justify-center w-full text-base'>
        <blockquote className=' w-full mx-auto text-center '>
        <span className=" text-center w-[90%] mx-auto text-base sm:mx-auto ">All Rights Reserved &#169; {year} . Designed by : </span>
         <a className=' inline-flex   text-center mx-auto sm:mx-4 underline underline-offset-1 font-semibold' href="https://briannjuguna.netlify.app/">Brian Njuguna</a>

        </blockquote>

      </div>
    </footer>

    
 
    
    
    </>
  )
}

export default App
