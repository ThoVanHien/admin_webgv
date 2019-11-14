import React, {Component} from 'react';

import Tab from '../Home/tab';
import Menu from '../Home/menu';
import Trangthai from '../Home/trangthai';
import Footer from '../Home/footer';
import Effect from '../Home/effect';


class App extends Component{

    render()
    {
        return(
         <div className="container-fluid">
                <Trangthai>
                </Trangthai>
            </div>
       
        );
    }
 }



export default App;
