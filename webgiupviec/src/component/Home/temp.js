import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class listnhanvien extends Component{

   state = {
        isLoading: true,
        ngvs: []
      };

    async componentDidMount() {
        const response = await fetch('/gvnhanh/nguoigv');
        const body = await response.json();
        this.setState({ ngvs: body, isLoading: false });
    }
    
    render()
    {
        
        const {nvs, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

    	return(
    	<div className="container-fluid">
          {/* Page Heading */}
          <h1 className="h3 mb-2 text-gray-800">Nhân viên</h1>
          <div className="mb-4 pb-4">
            <Link to="/nhanvien/themnhanvien"><button className="btn btn-success float-right">Thêm nhân viên</button></Link>
        </div>
        
        {/* DataTales Example */}
        <table className="table table-striped">
            <thead className="thead-dark mx-auto">
              <tr className>
                <th scope="col" className="col-md-1">Mã NV</th>
                <th scope="col ">Họ tên</th>
                <th scope="col">Giới tính</th>
                <th scope="col" className="col-md-1">Ngày sinh</th>
                <th scope="col">SĐT</th>
                <th scope="col" className>CMND</th>
                <th scope="col">Lương</th>
                <th />
            </tr>
        </thead>

        <tbody>
            {nvs.map(nv =>
              <tr>
                <th scope="row">{nv.idnhanvien}</th>
                <td>{nv.hoten}</td>
                <td>{nv.gioitinh}</td>
                <td>{nv.ngaysinh}</td>
                <td>{nv.sdt}</td>
                <td>{nv.cmnd}</td>
                <td>{nv.luong}</td>
                <td>              
                      <a  className="btn btn-danger btn-circle btn-sm" title="Xóa">
                        <i className="fas fa-trash" />
                    </a> <span>&nbsp;</span>
                    <a  className="btn btn-primary btn-circle btn-sm" title="Sửa">
                        <i className="fas fa-pencil-alt" />
                    </a> <span>&nbsp;</span>
                    <a  className="btn btn-warning btn-circle btn-sm" title="Chi tiết">
                        <i className="fas fa-receipt" />
                    </a>                
                </td>
            </tr>
            )}
    
    </tbody>
    </table>
    </div>


    	);

   	}
 }

export default listnhanvien;