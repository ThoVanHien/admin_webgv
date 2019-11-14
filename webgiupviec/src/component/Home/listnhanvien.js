import React, {Component} from 'react';

import { Button, ButtonGroup, Container, Table } from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class nhanvien extends Component{

    constructor(props) {
        super(props);
        this.state = {nvs: [], isLoading: true};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('gvnhanh/nhanvien')
          .then(response => response.json())
          .then(data => this.setState({nvs: data, isLoading: false}));
    }

    async remove(id) {
        await fetch(`/gvnhanh/nhanvien/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(() => {
           let updateNhanvien = [...this.state.nvs].filter(i => i.idnhanvien !== id);
           this.setState({nvs: updateNhanvien});
        });
    }

    
    render(){

        const {nvs, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const nvList = nvs.map(nv => {
          return <tr key={nv.idnhanvien}>
            <th scope="row" className="text-center">{nv.idnhanvien}</th>
            <td className="text-center">{nv.hoten}</td>
            <td className="text-center">{nv.gioitinh}</td>
            <td className="text-center">{nv.ngaysinh}</td>
            <td className="text-center">{nv.sdt}</td>
            <td className="text-center">{nv.cmnd}</td>
            <td className="text-center">{nv.luong}</td>
            <td>
            
               <ButtonGroup>
                <Button size="sm" color="primary" tag={Link} to={"/nhanvien/" + nv.idnhanvien} title="Sửa"><i className="fas fa-pencil-alt" /></Button>
                <span>&ensp;</span>
                <Button size="sm" color="danger" onClick={() => this.remove(nv.idnhanvien)} title="Xóa"><i className="fas fa-trash" /></Button>
              </ButtonGroup>

            </td>
          </tr>
        });

        return(
            <div className="container-fluid">
                {/* Page Heading */}
                <h1 className="h3 mb-2 text-gray-800">Nhân viên</h1>
                <div className="mb-4 pb-4">
                    <Link to="/nhanvien/new"><button className="btn btn-success float-right">Thêm nhân viên</button></Link>
                </div>
                {/* DataTales Example */}
                <table className="table table-striped">
                    <thead className="thead-dark mx-auto">
                       <th scope="col" className="col-md-1 text-center">Mã NV</th>
                        <th scope="col" className="text-center">Họ tên</th>
                        <th scope="col" className="text-center">Giới tính</th>
                        <th scope="col" className="col-md-1">Ngày sinh</th>
                        <th scope="col" className="text-center">SĐT</th>
                        <th scope="col" className="text-center">CMND</th>
                        <th scope="col" className="text-center">Lương</th>
                        <th />
                    </thead>
                    <tbody>
                        {nvList}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default nhanvien;