import {useState} from "react";
import DashboardStyle from "./myLink.style";
import Card from "./Card";
import dynamic from 'next/dynamic';
import * as ReactBootStrap from "react-bootstrap";
import Link from 'next/link'
import UserLinks from '../../helpers/user/userLinks'

const Chart = dynamic(() => import('react-apexcharts'), {ssr: false});

function Sidebar1() {
    return (<div className="sidebar">
        <ul>
            <div className="nav-item mb-2 brand-name"><h1>Brand Name</h1></div>
            <div className="profile">
                <div className="profile-image"><img
                    src="https://png.pngtree.com/png-vector/20190307/ourlarge/pngtree-vector-edit-profile-icon-png-image_760869.jpg"/>
                </div>
                <p className="name">Hayat</p>
                <p className="profession">Product Designer</p>
            </div>
            <div className="creatButton">
                <button className={""}>Create Link</button>
            </div>
            <li className="nav-buttons">
                <div className="nav-item">
                    <button>
                        <Link href="./dashboard">Overview</Link>
                    </button>
                </div>
                <div className="nav-item">
                    <button>
                        <Link href="./myLinks">My Links</Link>
                    </button>
                </div>
                <div className="nav-item">
                    <button>
                        Extras
                    </button>
                </div>
            </li>
        </ul>
    </div>)
}

function Sidebar3() {
    return (
        <div className="sidebar3">
            <div className="container">
                <h1 className="dash">My Links</h1>
                <div className="bar">
                    <div className="row1">
                            <div className="srNo">
                                Sr No.    
                            </div>
                            <div className="URL">
                                URL   
                            </div>
                            <div className="Alias">
                                Alias    
                            </div>
                            <div className="Status">
                                Status   
                            </div>
                            <div className="Views">
                                Views   
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Table() {
    const dataset = UserLinks.userLinks
    const data = [
        {url: dataset.url, alias: dataset.alias, status: dataset.status, views: dataset.views}
    ]

    const renderData = (data, index) => {
        return (
            <tr key={index}>
                <div className="trow">
                    <div className="row2">
                        <td className="tname">{index+1}</td>
                        <td className="tage">{data.url}</td>
                        <td className="talias">{data.alias}</td>
                        <td className="tstatus">{data.status}</td>
                        <td className="tviews">{data.views}</td>
                    </div>
                </div>
            </tr>
        )
    }
    return (
        <div>
            <ReactBootStrap.Table striped bordered hover>
                <tbody>
                    {data.map(renderData)}
                </tbody>
            </ReactBootStrap.Table>
        </div>
    )
}

function App() {
    return (<DashboardStyle>
        <Sidebar1/>
        <div className="main">
            <Sidebar3/>
            <Table />
        </div>
    </DashboardStyle>);
}

export default App;