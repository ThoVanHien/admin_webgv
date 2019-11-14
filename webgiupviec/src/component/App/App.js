import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Tab from '../Home/tab';
import Menu from '../Home/menu';
import Trangthai from '../Home/trangthai';
import Footer from '../Home/footer';
import Effect from '../Home/effect';
import Home from '../Home/home';
import Listnhanvien from '../Home/listnhanvien';
import Listkhachhang from '../Home/listkhachhang';
import Listnguoigv from '../Home/listnguoigv';
import Listloaidv from '../Home/listloaidv';
import Listtaikhoan from '../Home/listtaikhoan';
import Loginad from '../Home/loginad';
import Themloaidv from '../Home/themloaidv';
import Themnhanvien from '../Home/themnhanvien';
import Hopdongdk from '../Home/hopdongdk';
import Themtaikhoan from '../Home/themtaikhoan';
import Suanguoigv from '../Home/suanguoigv';
import Datdichvu from '../Home/datdichvu';
import Listyeucau from '../Home/listyeucau';
import Xeplichhen from '../Home/xeplichhen';
import Listlichhen from '../Home/listlichhen'

class App extends Component{
    // state = {
    //     isLoading: true,
    //     khs: [],
    //   };

    // async componentDidMount() {
    //     const response = await fetch('/gvnhanh/nguoigv');
    //     const body = await response.json();
    //     this.setState({ khs: body, isLoading: false });
    // }


    render()
    {
        // const {khs, isLoading} = this.state;

        // if (isLoading) {
        //     return <p>Loading...</p>;
        // }

        return(

        <Router>

       {/* {khs.map(kh =>
               <div key={kh.idnguoigv}>
                 {kh.hoten}
               </div>
             )}*/}

            <div>
                <div id="wrapper">
                    <Tab>          
                    </Tab>

                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <Menu>
                            </Menu>
                           
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>      
                            </Switch>

                            <Switch>
                                <Route exact path="/dashboard">
                                    <Home />
                                </Route>      
                            </Switch>

                            <Switch>
                                <Route exact path="/nhanvien">
                                    <Listnhanvien />
                                </Route>      
                            </Switch>

                            <Switch>
                                <Route exact path="/nhanvien/:id">
                                    <Themnhanvien />
                                </Route>      
                            </Switch>

                            <Switch>
                                <Route exact path="/loaidichvu">
                                    <Listloaidv />
                                </Route>      
                            </Switch>

                             <Switch>
                                <Route exact path="/loaidichvu/:id">
                                    <Themloaidv />
                                </Route>      
                            </Switch> 

                            <Switch>
                                <Route exact path="/khachhang">
                                    <Listkhachhang />
                                </Route>      
                            </Switch>

                            <Switch>
                                <Route exact path="/taikhoan">
                                    <Listtaikhoan />
                                </Route>      
                            </Switch>

                             <Switch>
                                <Route exact path="/themtaikhoan">
                                    <Themtaikhoan />
                                </Route>      
                            </Switch>

                            <Switch>
                                <Route exact path="/nguoigv">
                                    <Listnguoigv />
                                </Route>      
                            </Switch>

                            <Switch>
                                <Route exact path="/nguoigv/:id">
                                    <Suanguoigv />
                                </Route>      
                            </Switch> 

                            <Switch>
                                <Route exact path="/nguoigv/hopdongdk">
                                    <Hopdongdk />
                                </Route>      
                            </Switch>

                             <Switch>
                                <Route exact path="/datdichvu">
                                    <Datdichvu />
                                </Route>      
                            </Switch>  

                             <Switch>
                                <Route exact path="/yeucau">
                                    <Listyeucau />
                                </Route>      
                            </Switch>

                            <Switch>
                                <Route exact path="/lichhen">
                                    <Listlichhen />
                                </Route>      
                            </Switch> 

                            <Switch>
                                <Route exact path="/lichhen/:id">
                                    <Xeplichhen />
                                </Route>      
                            </Switch>                            
                        </div>
                    </div> 
                </div>



                <Footer>
                </Footer>
                
                <Effect>
                </Effect>
            </div>

            <Switch>
                <Route exact path="/login">
                    <Loginad />
                </Route>      
            </Switch>
        </Router>
        );
    }
 }



export default App;
