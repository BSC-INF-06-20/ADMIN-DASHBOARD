import React, {useEffect} from 'react';
import {BrowserRouter,   Routes, Route} from 'react-router-dom';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import {FiSettings} from 'react-icons/fi';
import {NavBar, Footer, SideBar, ThemeSettings} from './components'
import {Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, PieChart, Financial, ColorPicker, ColorMapping, Editor } from './pages'
import './App.css'



const App = () => {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg'>
         <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
           <TooltipComponent content='Settings' position='Top'>
                 <button type='button' style={{background:'blue', borderRadius:'50%'}} className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'>
                  <FiSettings/>
                 </button>
           </TooltipComponent>
         </div>

         {activeMenu ? (
          <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white' >
            sidebar
          </div>
         ) : (<div className='w-0 dark:bg-secondary-dark-bg'>
                    sidebar 
             </div>)}

             {/* Here we create our navigation bar */}
             <div className={ 
              `dark:bg-main-bg bg-main-bg min-h-screen w-full ${ activeMenu ? 'md:ml-72' : 'flex-2'}`
              }>
                <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                          Navbar
                </div>
               </div>

{/*The main DIV for ROUTING */}
               <div> 
                 <Routes>
                  {/*This is going to be our DashBoard */}
                  <Route path='/' element='Ecommerce'/>
                  <Route path='/ecommerce' element='Ecommerce'/>
                  
                  {/*Our Pages */}
                  <Route path='/orders' element='Orders'/>
                  <Route path='/employees' element='Employees'/>
                  <Route path='/customers' element='Customers'/>

                  {/*Apps */}
                  <Route path='/kanban' element='Kanban'/>
                  <Route path='/editor' element='Editor'/>
                  <Route path='/calendar' element='Calendar'/>
                  <Route path='/color-picker' element='Color-picker'/>

                  {/*Charts */}
                  <Route path='/LineChart' element='LineChart'/>
                  <Route path='/area' element='Area'/>
                  <Route path='/bar' element='Bar'/>
                  <Route path='/financial' element='Financial'/>
                  <Route path='/color-maping' element='Color-maping'/>
                  <Route path='/pyramid' element='Pyramid'/>
                  <Route path='/Stacked' element='Stacked'/>
                 </Routes>

               </div>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
