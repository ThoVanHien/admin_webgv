import React, {Component} from 'react';

import { Button, ButtonGroup, Container, Table } from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class listloaidv extends Component{

	constructor(props) {
        super(props);
        this.state = {loaidvs: [], isLoading: true};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('gvnhanh/loaidichvu')
          .then(response => response.json())
          .then(data => this.setState({loaidvs: data, isLoading: false}));
    }

    async remove(id) {
        await fetch(`/gvnhanh/loaidichvu/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(() => {
           let updateLoaidichvu = [...this.state.loaidvs].filter(i => i.idloaidv !== id);
           this.setState({loaidvs: updateLoaidichvu});
        });
    }

	render(){

		const {loaidvs, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

         const loaidvList = loaidvs.map(loaidv => {
          return <tr key={loaidv.idloaidv}>
            <th scope="row" className="text-center align-middle">{loaidv.idloaidv}</th>
            <td className="text-justify align-middle">{loaidv.tenloai}</td>
            <td className="text-justify">{loaidv.gioithieu}</td>
            <td className="text-justify">{loaidv.camket}</td>
            <td className="text-justify">{loaidv.kynangngv}</td>
            <td className="text-justify">{loaidv.anh}</td>
            <td className="align-middle">
            
               <ButtonGroup >
                <Button size="sm" color="primary" tag={Link} to={"/loaidichvu/" + loaidv.idloaidv} title="Sửa"><i className="fas fa-pencil-alt" /></Button>
                <span>&ensp;</span>
                <Button size="sm" color="danger" onClick={() => this.remove(loaidv.idloaidv)} title="Xóa"><i className="fas fa-trash" /></Button>
              </ButtonGroup>

            </td>
          </tr>
        });

		return(
			<div className="container-fluid">
				{/* Page Heading */}
				<h1 className="h3 mb-2 text-gray-800">Loại dịch vụ</h1>
				{/* DataTales Example */}
				<div className="mb-4 pb-4">
					<Link to="/loaidichvu/new"><button className="btn btn-success float-right">Thêm dịch vụ</button></Link>
				</div>
				<table className="table table-striped">
					<thead className="thead-dark mx-auto">
						<tr className>
							<th scope="col" className="col-md-1 text-center">Mã loại</th>
							<th scope="col" className="text-justify">Tên loại</th>
							<th scope="col" className="text-center">Giới thiệu</th>
							<th scope="col" className="text-center">Cam kết</th>
							<th scope="col" className="text-center">Kỹ năng người GV</th>
              <th scope="col" className="text-center">Ảnh</th>
							<th />
						</tr>
					</thead>
					<tbody>
						{loaidvList}
					</tbody>
				</table>
			</div>

		);
	}
}

export default listloaidv;