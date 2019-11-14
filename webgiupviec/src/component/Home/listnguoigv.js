import React, {Component} from 'react';

import { Button, ButtonGroup, Container, Table } from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class nguoigv extends Component{

	constructor(props) {
        super(props);
        this.state = {ngvs: [], isLoading: true};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('gvnhanh/nguoigv')
          .then(response => response.json())
          .then(data => this.setState({ngvs: data, isLoading: false}));
    }

    async remove(id) {
        await fetch(`/gvnhanh/nguoigv/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(() => {
           let updateNguoiGV = [...this.state.ngvs].filter(i => i.idnguoigv !== id);
           this.setState({ngvs: updateNguoiGV});
        });
    }
	
	render(){

		const {ngvs, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const ngvList = ngvs.map(ngv => {
          return <tr key={ngv.idnhanvien}>
            <th scope="row" className="text-center">{ngv.idnguoigv}</th>
            <td className="text-center">{ngv.hoten}</td>
            <td className="text-center">{ngv.gioitinh}</td>
            <td className="text-center">{ngv.ngaysinh}</td>
            <td className="text-center">{ngv.sdt}</td>
            <td className="text-center">{ngv.cmnd}</td>
            <td className="text-center">{ngv.quequan}</td>
            <td>
            
               <ButtonGroup>
                <Button size="sm" color="primary" tag={Link} to={"/nguoigv/" + ngv.idnguoigv} title="Sửa"><i className="fas fa-pencil-alt" /></Button>
                <span>&ensp;</span>
                <Button size="sm" color="danger" onClick={() => this.remove(ngv.idnguoigv)} title="Xóa"><i className="fas fa-trash" /></Button>
              </ButtonGroup>

            </td>
          </tr>
        });

		return(
			<div className="container-fluid">
				{/* Page Heading */}
				<h1 className="h3 mb-2 text-gray-800">Người giúp việc</h1><br/>
				{/* DataTales Example */}
				<table className="table table-striped">
					<thead className="thead-dark mx-auto">
						<tr className>
							<th scope="col" className="col-md-1 text-center">Mã NGV</th>
							<th scope="col" className="text-center">Họ tên</th>
							<th scope="col" className="col-md-1 text-center">Giới tính</th>
							<th scope="col" className="text-center">Ngày sinh</th>
							<th scope="col" className="text-center">SĐT</th>
							<th scope="col" className="text-center">CMND</th>					
							<th scope="col" className="text-center">Quê quán</th>
							<th />
						</tr>
					</thead>
					<tbody>
						{ngvList}
					</tbody>
				</table>
			</div>

		);
	}
}

export default nguoigv;