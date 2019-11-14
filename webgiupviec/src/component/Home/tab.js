import React, {Component} from 'react';

import { Button, ButtonGroup, Container, Table } from 'reactstrap';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class tab extends Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {isOpen: false};
    //     this.toggle = this.toggle.bind(this);
    // }

    // toggle() {
    //     this.setState({
    //       isOpen: !this.state.isOpen
    //   });
    // }

    render()
    {
        return(

    <div>
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
           <Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center text-warning" >
              <div className="sidebar-brand-icon">
                <i className="fas fa-universal-access" />
              </div>
              <div className="sidebar-brand-text mx-3">GVNhanh</div>
            </Link>

           {/* <NavbarToggler onClick={this.toggle}/> 
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink
                      href="https://twitter.com/oktadev">@oktadev</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/oktadeveloper/okta-spring-boot-react-crud-example">GitHub</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>*/}

            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item">
                <Link to="/dashboard" className="nav-link" >
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Dashboard</span></Link>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider" />
                {/* Heading */}
                <div className="sidebar-heading">
                    Dịch vụ
                </div> 
                {/* Nav Item - Pages Collapse Menu */}
                <li className="nav-item">
                    <Link to="/loaidichvu" className="nav-link collapsed" >
                    <i className="fas fa-list-alt fa-cog" />
                        <span>Loại dịch vụ</span>
                    </Link>
                </li>
                {/* Nav Item - Utilities Collapse Menu */}
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fas fa-fw fa-clipboard" />
                        <span>Bảng phí dịch vụ</span>
                    </a>
                </li>
                <li className="nav-item">
                    <Link to="/nguoigv" className="nav-link collapsed" >
                        <i className="fas fa-fw fa-users" />
                        <span>Người giúp việc</span>
                    </Link>
                    
                </li>
                {/* Divider */}
                <hr className="sidebar-divider" />
                {/* Heading */}
                <div className="sidebar-heading">
                    Khách hàng
                </div>
                {/* Nav Item - Pages Collapse Menu */}
                <li className="nav-item">
                    <Link to="/khachhang" className="nav-link collapsed" >
                        <i className="fas fa-fw fa-user-friends" />
                        <span>Khách hàng</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/yeucau" className="nav-link collapsed" >
                        <i className="fas fa-fw fa-user-friends" />
                        <span>Yêu cầu</span>
                    </Link>
                </li>

                 <li className="nav-item">
                    <Link to="/lichhen" className="nav-link collapsed" >
                        <i className="fas fa-fw fa-clock" />
                        <span>Lịch hẹn</span>
                    </Link>
                </li>
                <hr className="sidebar-divider" />
                {/* Heading */}
                <div className="sidebar-heading">
                    Nhân viên
                </div>
                <li className="nav-item">
                    <Link to="/nhanvien" className="nav-link collapsed" >
                        <i className="fas fa-fw fa-user-cog" />
                        <span>Nhân viên</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/taikhoan" className="nav-link collapsed" href="#">
                        <i className="fas fa-fw fa-folder" />
                        <span>Tài khoản</span>
                    </Link>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block" />
                {/* Sidebar Toggler (Sidebar) */}
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle" />
                </div>
            </ul>


    </div>

        );
    }
 }

export default tab;
