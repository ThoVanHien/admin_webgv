import React, {Component} from 'react';

class hopdongdk extends Component{
	render(){
		return(

			<div className="container-fluid">
				{/* Page Heading */}
				<h1 className="h3 mb-2 text-gray-800">Hợp đồng đăng ký giúp việc</h1>
				{/* DataTales Example */}
				<form action="save-post" method="POST" className="form-horizontal">
					<input type="hidden" name="idbaiviet" defaultValue />
					<div className="form-group row">
						<label className="col-sm-2 col-form-label">Tên người giúp việc</label>
						<div className="col-md-5">
							<input type="text" className="form-control" name="tuade" defaultValue="Lê Thanh Hà" />                   
						</div>
					</div>
					<div className="form-group row">
						<label className="col-sm-2 col-form-label">Tên nhân viên</label>
						<div className="col-md-5">
							<input type="text" className="form-control" name="tuade" defaultValue="Trương Văn Kiên" />
						</div>
					</div>
					<div className="form-group row">
						<label className="col-sm-2 col-form-label">Sức khỏa</label>
						<div className="col-md-5">
							<input type="text" className="form-control" name="suckhoa" defaultValue="Tốt" />
						</div>
					</div>
					<div className="form-group row">
						<label className="col-sm-2 col-form-label">Kinh nghiệm</label>
						<div className="col-md-7">
							<textarea cols={66} rows={8} name="noidung" className="form-control" defaultValue={"2 năm kinh nghiệm giúp việc nhà ở TPHCM\n             "} />
						</div>
					</div>
					<div className="form-group row">
						<label className="col-sm-2 col-form-label">Thời hạn hợp đồng</label>
						<div className="col-md-1">
							<input type="number" className="form-control float-left" name="thoihan" min={0} max={100} defaultValue={12} />
						</div>
						<span className="col-sm-1 col-form-label">Tháng</span>
					</div>
					<div className="form-group row">
						<label className="col-sm-2 col-form-label">Phần trăm</label>
						<div className="col-md-1">
							<input type="number" className="form-control" name="phantram" min={0} max={100} defaultValue={10} />
						</div>
						<span className="col-sm-1 col-form-label">(%)</span>
					</div>
					<div className="form-group row">
						<label className="col-sm-2 col-form-label" style={{fontSize: '16px'}} />
						<div className="col-md-5">
							<input type="submit" className="btn btn-success" Value="Cập nhật" />
						</div>
					</div>
				</form>
			</div>

		);
	}
}

export default hopdongdk;