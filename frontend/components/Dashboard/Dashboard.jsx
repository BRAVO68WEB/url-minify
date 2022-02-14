import DashboardStyle from "./Dashboard.style";

function Sidebar1(){
    return(
        <div className="sidebar" style={{backgroundColor:"#696969"}}>
            <ul>
                <li className="nav-item mb-2"><h3>Brand Name</h3></li>
                <li className="nav-item mb-2"><img src="logo.svg" style={{'borderRadius':'5px'}}></img></li>
                <li className="nav-item mb-2">Hyat</li>
                <li className="nav-item mb-2">Product Desiner</li>
                <li className="nav-item mb-2"><button>Create Link</button></li>
                <li className="nav-item mb-2">Overview</li>
                <li className="nav-item mb-2">MyLinks</li>
                <li className="nav-item mb-2">Extras</li>
            </ul>
        </div>
    )
}
function Sidebar2()
{
    return(
        <div  className="sidebar2">
            <h2 className="dash">Overview</h2>
            <div className="row">
                <div className="column">Box1</div>
                <div className="column">Box2</div>
                <div className="column">Box3</div>
            </div>
        </div>
    )
}
function Graph()
{
    return (
        <div  className="sidebar2">
            <div className="row">
                <div className="column">Daily Insight</div>
                <div className="column">
                    <ul >
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
    );
}

export default App;