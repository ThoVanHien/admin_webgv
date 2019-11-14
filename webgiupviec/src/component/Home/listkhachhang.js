import React, {Component} from 'react';

import { Button, ButtonGroup, Container, Table } from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class listkhachhang extends Component{

	constructor(props) {
        super(props);
        this.state = {khs: [], isLoading: true};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('gvnhanh/khachhang')
          .then(response => response.json())
          .then(data => this.setState({khs: data, isLoading: false}));
    }

    async remove(id) {
        await fetch(`/gvnhanh/khachhang/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(() => {
           let updateKhachhang = [...this.state.khs].filter(i => i.idkh !== id);
           this.setState({khs: updateKhachhang});
        });
    }

	render()
	{
		const {khs, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const khList = khs.map(kh => {
          return <tr key={kh.idkh}>
            <th scope="row" className="text-center">{kh.idkh}</th>
            <td className="text-center">{kh.hoten}</td>
            <td className="text-center">{kh.sdt}</td>
            <td className="text-center">{kh.email}</td>
            <td className="text-center">{kh.diachi}</td>
            <td>
            
               <ButtonGroup>
                <Button size="sm" color="danger" onClick={() => this.remove(kh.idkh)} title="Xóa"><i className="fas fa-trash" /></Button>
              </ButtonGroup>

            </td>
          </tr>
        });

		return(
			<div className="container-fluid">
				{/* Page Heading */}
				<h1 className="h3 mb-2 text-gray-800">Khách hàng</h1>
				{/*{/* DataTales Example */}
				<table className="table table-striped">
                    <thead className="thead-dark mx-auto">
                       <th scope="col" className="col-md-1 text-center">Mã KH</th>
                        <th scope="col" className="text-center">Họ tên</th>
                        <th scope="col" className="text-center">SĐT</th>
                        <th scope="col" className="text-center">Email</th>
                        <th scope="col" className="text-center">Địa chỉ</th>
                        <th />
                    </thead>
                    <tbody>
                        {khList}
                    </tbody>
                </table>
			</div>

		);
	}

}

export default listkhachhang;