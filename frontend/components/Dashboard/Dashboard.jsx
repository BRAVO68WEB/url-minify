import {useState} from "react";
import DashboardStyle from "./Dashboard.style";
import Card from "./Card";
import dynamic from 'next/dynamic';
import * as ReactBootStrap from "react-bootstrap";
import Link from 'next/link'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import CloseIcon from '@mui/icons-material/Close'
import { Close } from '@mui/icons-material'

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
          <p className="name">Hayat</p>
          <p className="profession">Product Designer</p>
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
  return (
    <div className="sidebar2">
      <MenuOpenIcon className="hamburger_icon" onClick={toggleSidebar1} />

      <h1 className="dash">Overview</h1>
      <div className="row">
        <Card
          icon={'/icons/eye.svg'}
          value={4000}
          title={'views'}
          color={'#662CDC33'}
        />
        <Card
          icon={'/icons/link.svg'}
          value={220}
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
              120
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
              3.4k
            </div>
          </div>
          <div className="title">Total Views</div>
        </div>

      </div>
    </div>
  )
}

function App() {
  return (
    <DashboardStyle>
      <Sidebar1 />
      <div className="main">
        <Sidebar2 />
        <Graph />
      </div>
    </DashboardStyle>
  )
}

export default App
