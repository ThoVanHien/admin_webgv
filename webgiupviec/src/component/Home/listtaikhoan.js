import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class listtaikhoan extends Component{

	state = {
        isLoading: true,
        tks: []
      };

    async componentDidMount() {
        const response = await fetch('/gvnhanh/taikhoan');
        const body = await response.json();
        this.setState({ tks: body, isLoading: false });
    }

	render(){

		const {tks, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

		return(
			<div className="container-fluid">
				{/* Page Heading */}
				<h1 className="h3 mb-2 text-gray-800">Tài khoản</h1>
				<div className="mb-4 pb-4">
					<Link to="/taikhoan/themtaikhoan"><button className="btn btn-success float-right">Thêm tài khoản</button></Link>
				</div>
				{/* DataTales Example */}
				<table className="table table-striped">
					<thead className="thead-dark mx-auto">
						<tr className>
							<th scope="col">STT</th>
							<th scope="col">Tên tài khoản</th>
							<th scope="col ">Họ tên nhân viên</th>
							<th scope="col">Trạng thái</th>
							<th scope="col">Quyền</th>
							<th />
						</tr>
					</thead>
					<tbody>
						{tks.map(tk =>
							<tr>
								<th scope="row"></th>
								<td>{tk.sdt}</td>
								<td>{tk.pass}</td>
								<td>{tk.trangthai}</td>
								<td>{tk.quyen}</td>
								<td>              
									<a href="#" className="btn btn-danger btn-circle btn-sm" title="Xóa">
										<i className="fas fa-trash" />
									</a> <span>&nbsp;</span>
									<a href="#" className="btn btn-primary btn-circle btn-sm" title="Sửa">
										<i className="fas fa-pencil-alt" />
									</a> <span>&nbsp;</span>
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>

		);
	}
}

export default listtaikhoan;