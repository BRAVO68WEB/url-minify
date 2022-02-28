import DashboardStyle from './Dashboard.style'

function Sidebar1() {
  return (
    <div className="sidebar">
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
          <button className={''}>Create Link</button>
        </div>
        <li className="nav-buttons">
          <div className="nav-item">
            <button>Overview</button>
          </div>
          <div className="nav-item">
            <button>My Links</button>
          </div>
          <div className="nav-item">
            <button>Extras</button>
          </div>
        </li>
      </ul>
    </div>
  )
}

function Sidebar2() {
  return (
    <div className="sidebar2">
      <h2 className="dash">Overview</h2>
      <div className="row">
        <div className="column">Box1</div>
        <div className="column">Box2</div>
        <div className="column">Box3</div>
      </div>
    </div>
  )
}

function Graph() {
  return (
    <div className="sidebar2">
      <div className="row">
        <div className="column">Daily Insight</div>
        <div className="column">
          <ul>
            <li className="list2">Api Version</li>
            <li className="list2">Frontend Version</li>
            <li className="list2">Links generated yet</li>
            <li className="list2">Total views yet</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <DashboardStyle>
      <Sidebar1 />
      <Sidebar2 />
      <Graph />
    </DashboardStyle>
  )
}

export default App
