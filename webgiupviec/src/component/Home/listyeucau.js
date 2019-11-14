import React, {Component} from 'react';

import { Button, ButtonGroup, Container, Table } from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class yeucau extends Component{

    constructor(props) {
        super(props);
        this.state = {lhs: [], isLoading: true};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('gvnhanh/lichhen')
          .then(response => response.json())
          .then(data => this.setState({lhs: data, isLoading: false}));
    }

    async remove(id) {
        await fetch(`/gvnhanh/lichhen/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(() => {
           let updateLichhen = [...this.state.lhs].filter(i => i.idlichhen !== id);
           this.setState({lhs: updateLichhen});
        });
    }

    
    render(){

        const {lhs, isLoading} = this.state;

        if (isLoading) {
           return <p className="text-primary align-middle text-center">
                    <i className="fas fa-spinner fa-pulse fa-4x fa-fw" />
                    Loading...
                  </p>;
        }

        const lhList = lhs.map(lh => {
          return <tr key={lh.idlichhen}>
            <th scope="row" className="text-center">{lh.idlichhen}</th>
            <td className="text-center">{lh.khachhang}</td>
            <td className="text-center">{lh.sdt}</td>
            <td className="text-center">{lh.sonha}</td>
            <td className="text-center">{lh.ngaylam}</td>
            <td className="text-center">{lh.congviec}</td>
            <td className="text-center">{lh.trangthai}</td>
            <td>
            
               <ButtonGroup>
                <Button size="sm" color="primary" tag={Link} to={"/lichhen/" + lh.idlichhen} title="Xếp lịch hẹn"><i className="fas fa-calendar-check" /></Button>
                <span>&ensp;</span>
                <Button size="sm" color="danger" onClick={() => this.remove(lh.idlichhen)} title="Xóa"><i className="fas fa-trash" /></Button>
              </ButtonGroup>

            </td>
          </tr>
        });

        return(
            <div className="container-fluid">
                {/* Page Heading */}
                <h1 className="h3 mb-2 text-gray-800">Danh sách yêu cầu</h1><br/>
               
                {/* DataTales Example */}
                <table className="table table-striped">
                    <thead className="thead-dark mx-auto">
                       <th scope="col" className="text-center">Mã yêu cầu</th>
                        <th scope="col" className="text-center">Họ tên KH</th>
                        <th scope="col" className="text-center">Số điện thoại</th>
                        <th scope="col" className="col-md-1">Địa chỉ KH</th>
                        <th scope="col" className="text-center">Ngày làm</th>
                        <th scope="col" className="text-center">Chi tiết công việc</th>
                        <th scope="col" className="text-center">Trạng thái</th>      
                        <th />
                    </thead>
                    <tbody>
                        {lhList}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default yeucau;