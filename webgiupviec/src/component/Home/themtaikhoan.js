import React, {Component} from 'react';

class themtaikhoan extends Component{
	render(){
		return(
		<div className="container-fluid">
			{/* Page Heading */}
			<h1 className="h3 mb-2 text-gray-800 pb-3">Thêm tài khoản</h1>
			{/* DataTales Example */}
			<form action="save-post" method="POST" className="form-horizontal">
				<input type="hidden" name="idbaiviet" defaultValue />
				<div className="form-group row">
					<label className="col-sm-2 col-form-label">Tên tài khoản</label>
					<div className="col-md-3">
						<input type="text" className="form-control" name="tentaikhoan" Value />                   
					</div>
				</div>
				<div className="form-group row">
					<label className="col-sm-2 col-form-label">Họ tên nhân viên</label>
					<div className="col-md-3">
						<select className="form-control">
							<option>Nguyễn Văn Nam</option>
							<option>Lê Văn Hùng</option>
							<option>Nguyễn Duy Anh</option>
							<option>Trần Quý Cường</option>
						</select>
					</div>
				</div>
				<div className="form-group row">
					<label className="col-sm-2 col-form-label">Quyền</label>
					<div className="col-md-2">
						<select className="form-control">
							<option>Admin</option>
							<option>Nhân viên</option>
						</select>
					</div>
				</div> 
				<div className="form-group row">
					<label className="col-sm-2 col-form-label">Trạng thái</label>
					<div className="col-md-2">
						<select className="form-control">
							<option>Hoạt động</option>
							<option>Ngưng hoạt động</option>
						</select>
					</div>
				</div>  
				<div className="form-group row">
					<label className="col-sm-2 col-form-label" style={{fontSize: '16px'}} />
					<div className="col-md-5">
						<input type="submit" className="btn btn-success" Value="Lưu lại" />
					</div>
				</div>
			</form>
		</div>

		);
	}
}

export default themtaikhoan;