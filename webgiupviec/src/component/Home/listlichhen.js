import React, {Component} from 'react';

import { Button, ButtonGroup, Container, Table } from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class lichhen extends Component{

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


        if(isLoading){
          return <p className="text-primary align-middle text-center">
                  <i className="fas fa-spinner fa-pulse fa-4x fa-fw" />
                  Loading...
                </p>;
        }
 
        const lhList = lhs.map(lh => {
          return <tr key={lh.idlichhen}>
            <th scope="row" className="text-center">{lh.idlichhen}</th>
            <td className="text-center">{lh.khachhang}</td>
            <td className="text-center">{lh.nhanvien}</td>
            <td className="text-center">{lh.gio}</td>
            <td className="text-center">{lh.ngay}</td>
            <td className="text-center">{lh.diachi}</td>
            <td className="text-center">{lh.trangthai}</td>
            <td>
            
               <ButtonGroup>
                <Button size="sm" color="primary" tag={Link} to={"/lichhen/" + lh.idlichhen} title="Sửa"><i className="fas fa-pencil-alt" /></Button>
                <span>&ensp;</span>
                <Button size="sm" color="danger" onClick={() => this.remove(lh.idlichhen)} title="Xóa"><i className="fas fa-trash" /></Button>
              </ButtonGroup>

            </td>
          </tr>
        });

        return(
            <div className="container-fluid">
                {/* Page Heading */}
                <h1 className="h3 mb-2 text-gray-800">Danh sách lịch hẹn</h1><br/>
               
                {/* DataTales Example */}
                <table className="table table-striped">
                    <thead className="thead-dark mx-auto">
                       <th scope="col" className="text-center">Mã lịch hẹn</th>
                        <th scope="col" className="text-center">Họ tên KH</th>
                        <th scope="col" className="text-center">Họ tên NV</th>
                        <th scope="col" className="col-md-1">Giờ hẹn</th>
                        <th scope="col" className="text-center">Ngày hẹn</th>
                        <th scope="col" className="text-center">Địa điểm</th>      
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

export default lichhen;