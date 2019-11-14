import React, {Component} from 'react';

class trangthai extends Component{

    render()
    {
    	return(
    	<div className="row">
    		{/* <div class="col-sm-4">
    			<div class="card float-left">
    				<img src="img/yeucau.jpg" class="card-img-top img-fluid " style="width: 100px; height: 100px; margin:auto;">
    				<div class="card-body">  
    					<h2 class="card-title font-weight-bold text-primary float-left">50</h2>
    					<span> &nbsp&nbsp </span>
    					<span class="card-text text-muted ">Yêu cầu dịch vụ mới</span>
    				</div>
    			</div>
    		</div> */}
    		<div className="col-sm-4">
    			<div className="card mb-3" style={{maxWidth: '540px'}}>
    				<div className="row no-gutters">
    					<div className="col-md-4">
    						<img src="img/visit.jpg" className="card-img " alt="..." />
    					</div>
    					<div className="col-md-8">
    						<div className="card-body">
    							<h2 className="card-title font-weight-bold text-primary">400</h2>
    							<p className="card-text text-muted">Lượt truy cập hôm nay</p>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    		<div className="col-sm-4">
    			<div className="card mb-3" style={{maxWidth: '540px'}}>
    				<div className="row no-gutters">
    					<div className="col-md-4">
    						<img src="img/hopdong.png" className="card-img anh" alt="..." />
    					</div>
    					<div className="col-md-8">
    						<div className="card-body">
    							<h2 className="card-title font-weight-bold text-primary">30</h2>
    							<p className="card-text text-muted">Hợp đồng mới được ký</p>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    		<div className="col-sm-4">
    			<div className="card mb-3" style={{maxWidth: '540px'}}>
    				<div className="row no-gutters">
    					<div className="col-md-4">
    						<img src="img/comment.png" className="card-img" alt="..." />
    					</div>
    					<div className="col-md-8">
    						<div className="card-body">
    							<h2 className="card-title font-weight-bold text-primary">18</h2>
    							<p className="card-text text-muted">Nhận xét mới cập nhật</p>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>

    	)

   	}
 }

export default trangthai;