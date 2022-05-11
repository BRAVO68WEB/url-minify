import {useEffect, useState,useContext} from "react";
import DashboardStyle from "./Dashboard.style";
import Card from "./Card";
import dynamic from 'next/dynamic';
import * as ReactBootStrap from "react-bootstrap";
import Link from 'next/link'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import CloseIcon from '@mui/icons-material/Close'
import { Close } from '@mui/icons-material'
import {useQueries,useQuery} from "react-query"
import Axios from 'helpers/Axios'
import {QueryClientProvider,QueryClient} from "react-query"
import { ReactQueryDevtools } from 'react-query/devtools'
import UserAuth from 'helpers/user/usercontext'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

function toggleSidebar1(e) {
  const sidebar = document.querySelector('.sidebar')
  sidebar.classList.toggle('toggle_sidebar')
}

function changePageContent(e){
    // change contents of the page according to the option selected by user.

    toggleSidebar1(e);
}

function Sidebar1() {

    const {user:{name,email}} = useContext(UserAuth)
    
  return (
    <div className="sidebar">
      <CloseIcon className="close_icon" onClick={toggleSidebar1} />

      <ul>
        <div className="nav-item mb-2 brand-name">
          <h1>Brand Name</h1>
        </div>
        <div className="profile">
          <div className="profile-image">
            <img src="https://png.pngtree.com/png-vector/20190307/ourlarge/pngtree-vector-edit-profile-icon-png-image_760869.jpg" />
          </div>
          <p className="name">{name}</p>
          <p className="profession">{email}</p>
        </div>
        <div className="creatButton">
          <button>Create Link</button>
        </div>
        <li className="nav-buttons">
          <div className="nav-item">
            <button onClick={changePageContent}>Overview</button>
          </div>
          <div className="nav-item">
            <button onClick={changePageContent}>My Links</button>
          </div>
          <div className="nav-item">
            <button onClick={changePageContent}>Extras</button>
          </div>
        </li>
      </ul>
    </div>
  )
}

function Sidebar2() {

 




    function fetchTotalLinks(){
    
        return Axios.get(`/minify/all`)
    }
  
  
    const {data} = useQuery("totalLinks",()=>fetchTotalLinks(),{
        refetchOnWindowFocus:false,
        select:(data)=> data?.data
    })
    console.log();
    console.log(new Date(new Date() - 1814400000) );
    
  return (
    <div className="sidebar2">
      <MenuOpenIcon className="hamburger_icon" onClick={toggleSidebar1} />

      <h1 className="dash">Overview</h1>
      <div className="row">
        <Card
          icon={'/icons/eye.svg'}
          value={
              data?.reduce((prevObj,nextObj)=>{
                  if(nextObj.views){
                      return prevObj + nextObj.views;

                  }
                  return prevObj;
              },0) 
          }
          title={'views'}
          color={'#662CDC33'}
        />
        <Card
          icon={'/icons/link.svg'}

          //* links that have been click on at least once in 3week will be counted here
          value={data?.filter((obj)=>{
              const {updatedAt} = obj;

              if((new Date() - new Date(updatedAt)) <1814400000 )
              {
                  return obj;
              }

          }).length}
          title={'Links active'}
          color={'rgba(67, 191, 214, 0.2)'}
        />
        <Card
          icon={'/icons/status.svg'}
          title={'status'}
          color={'rgba(39, 174, 96, 0.2)'}
        />
      </div>
    </div>
  )
}

function Graph() {
  const [graph, setGraph] = useState({
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    data: [30, 40, 45, 50, 49, 60, 70, 91],
  })


  const context = useContext(UserAuth)
  function fetchTotalUserLinks(){
      return Axios.get(`/minify/all/user`,{
          headers:{Authorization:`Bearer ${context?.jwt}`}
      })
  }
  

  const {data} = useQuery("totalUserLinks",()=>fetchTotalUserLinks(),{
      refetchOnWindowFocus:false,
      select:(data)=> data?.data
  })

 

  return (
    <div className="row2">
      <div className="graph">
        <Chart
          options={{
            chart: {
              id: 'basic-bar',
            },
            xaxis: {
              categories: graph.categories,
            },
          }}
          series={[
            {
              name: 'series-1',
              data: graph.data,
            },
          ]}
          type="line"
          width="100%"
          height="100%"
        />
      </div>

      <div className="versions">
        <div className="version">
          <div className="icon">
            <div
              style={{
                background: '#D9F2F7',
                color: '#43BFD6',
              }}
              className="box"
            >
              v1
            </div>
          </div>
          <div className="title">Api Version</div>
        </div>

        <div className="version">
          <div className="icon">
            <div
              style={{
                background: 'rgba(39, 174, 96, 0.2)',
                color: '#27AE60',
              }}
              className="box"
            >
              v1
            </div>
          </div>
          <div className="title">Frontend Version</div>
        </div>

        <div className="version">
          <div className="icon">
            <div
              style={{
                background: '#E0D5F8',
                color: '#662CDC',
              }}
              className="box"
            >
              {data?.length}
            </div>
          </div>
          <div className="title">Links Generated</div>
        </div>
        
        <div className="version">
          <div className="icon">
            <div
              style={{
                background: 'rgba(220, 44, 76, 0.2)',
                color: '#EB3256',
              }}
              className="box"
            >
             {
                 //* tota views from all links from logged in user
                  data?.reduce((prevObj,nextObj)=>{
                    if(nextObj.views){
                        return prevObj + nextObj.views;
  
                    }
                    return prevObj;
                  },0)
             }
            </div>
          </div>
          <div className="title">Total Views</div>
        </div>

      </div>
    </div>
  )
}

function App() {

    const queryClient = new QueryClient();
  return (
      <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <DashboardStyle>
              <Sidebar1 />
              <div className="main">
                  <Sidebar2 />
                  <Graph />
              </div>
          </DashboardStyle>
      </QueryClientProvider>
  )
}

export default App
