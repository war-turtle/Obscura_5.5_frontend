import React from "react";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import socketIOClient from "socket.io-client";
import Home from "./components/Home";
import Onboard from "./components/onboard";
import SideBar from "./container/sidebar";
import Socket from "./container/socket";
import Dashboard from "./components/dashboard";
import Level from "./components/Level";
import Support from "./components/support";
import Team from "./components/ourteam";
import Leaderboard from "./components/Leaderboard/index";
import "./App.css";

const jwtDecode = require("jwt-decode");

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            endpoint: "http://localhost:8000"
        };
        this.socket = socketIOClient(this.state.endpoint);
        // if (localStorage.getItem('jwtToken') ? jwtDecode(localStorage.getItem('jwtToken')) : null) {
        //   this.socket.username = user.user.username;
        //   this.socket.emit('checkUser', user.user);
        // }
    }

    componentDidMount = () => {
        this.socket.on("stopUser", () => {
            console.log("hey");
        });
    };

    render = () => (
        <BrowserRouter>
            <Switch>
                <Socket exact path="/" component={Home} socket={this.socket} />
                <Socket
                    exact
                    path="/onboard"
                    component={Onboard}
                    socket={this.socket}
                    user={
                        localStorage.getItem("jwtToken")
                            ? jwtDecode(localStorage.getItem("jwtToken"))
                            : null
                    }
                />
                <SideBar
                    exact
                    path="/dashboard"
                    component={Dashboard}
                    user={
                        localStorage.getItem("jwtToken")
                            ? jwtDecode(localStorage.getItem("jwtToken"))
                            : null
                    }
                    socket={this.socket}
                />
                <SideBar
                    path="/level/:alias"
                    component={Level}
                    user={
                        localStorage.getItem("jwtToken")
                            ? jwtDecode(localStorage.getItem("jwtToken"))
                            : null
                    }
                    socket={this.socket}
                />
                <SideBar
                    path="/our-team"
                    component={Team}
                    user={
                        localStorage.getItem("jwtToken")
                            ? jwtDecode(localStorage.getItem("jwtToken"))
                            : null
                    }
                    socket={this.socket}
                />
                <SideBar
                    path="/support"
                    component={Support}
                    user={
                        localStorage.getItem("jwtToken")
                            ? jwtDecode(localStorage.getItem("jwtToken"))
                            : null
                    }
                    socket={this.socket}
                />
                <SideBar
                    path="/leaderboard"
                    component={Leaderboard}
                    user={
                        localStorage.getItem("jwtToken")
                            ? jwtDecode(localStorage.getItem("jwtToken"))
                            : null
                    }
                    socket={this.socket}
                />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
