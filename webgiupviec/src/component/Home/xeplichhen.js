import React, {Component} from 'react';
import { AvForm, AvField, ValidatingFormGroup } from 'availity-reactstrap-validation';

import { confirmAlert } from 'react-confirm-alert';

import 'react-confirm-alert/src/react-confirm-alert.css';

import { 
	Button, 
	Container, 
	Form, FormGroup, 
	Input, 
	Label, 
	FormFeedback, FormText, 
	InputGroup, InputGroupAddon } from 'reactstrap';


import {
 BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";



class xeplichhen extends Component{

	emptyItem = {
		ngay: '',
		gio: '',
		diachi: '',
		ngaylam: '',
		congviec: '',
		sonha: '',
		sdt: '',
		nhanvien: '',
		khachhang:'',
		trangthai: ''
	};

	constructor(props) {
		super(props);
		this.state = {
			item: this.emptyItem,
			nhanViens:[]
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async componentDidMount() {
		if (this.props.match.params.id !== 'new') {
			const lh = await (await fetch(`/gvnhanh/lichhen/${this.props.match.params.id}`)).json();
			const nv = await (await fetch(`/gvnhanh/nhanvien`)).json();
			console.log("nv",nv);
			this.setState({item: lh});
			this.setState({
				nhanViens: nv
			})
		}
	}

	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name= target.name;
		let item = {...this.state.item};
		item[name] = value;
		item.trangthai = 'okok'
		this.setState({item});

		// this.setState({[event.target.id]: event.target.value});
		
		 // this.setState({
	  //     input: event.target.value
	  //   });
	}

	async handleSubmit(event) {
		event.preventDefault();
		const {item} = this.state;

		await fetch('/gvnhanh/lichhen', {
			method: (item.id) ? 'PUT' : 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(item),
		});
		this.props.history.push('/lichhen');
		
	}

	
	render(){

		const {item} = this.state;
		const title = <h1 className="h3 mb-2 text-gray-800 pb-3">Xếp lịch hẹn</h1>;

		return(

			<div className="container-fluid ">

				{title}
				<Form onSubmit={this.handleSubmit} >
				<table className="table">
					<tr>
						<td className="col-md-6">
							<FormGroup className="col-md-10 mb-3">
								<Label for="name">Họ tên</Label>
								<Input type="text" name="khachhang" id="khachhang" value={item.khachhang ||''}
								onChange={this.handleChange} autoComplete="name" disabled/>
								 <FormFeedback valid>Sweet! that name is available</FormFeedback>
							</FormGroup>
							
							<FormGroup className="col-md-10 mb-3">
								<Label for="stateOrProvince" className="">Số điện thoại</Label>
								<Input type="text" name="sdt" id="sdt" value={item.sdt ||''}
								onChange={this.handleChange} autoComplete="address-level1" disabled/>
							</FormGroup>
							<FormGroup className="col-md-10 mb-3">
								<Label for="country">Địa chỉ khách hàng</Label>
								<Input type="text" name="sonha" id="sonha" value={item.sonha ||''}
								onChange={this.handleChange} autoComplete="address-level1" disabled/>
							</FormGroup>
							<FormGroup className="col-md-6 mb-3">
								<Label for="country">Ngày làm</Label>
								<Input type="date" name="ngaylam" id="ngaylam" value={item.ngaylam ||''}
								onChange={this.handleChange} autoComplete="address-level1" disabled/>
							</FormGroup>
							<FormGroup className="col-md-10 mb-3">
								<Label for="country">Chi tiết công việc</Label>
								<Input type="text" name="congviec" id="congviec" value={item.congviec ||''}
								onChange={this.handleChange} autoComplete="address-level1" disabled/>
							</FormGroup>
						</td>

						<td>
							{/*<FormGroup className="col-md-10 mb-3">
								<Label for="country">Nhân viên</Label>
								<Input type="text" name="nhanvien" id="nhanvien"
								onChange={this.handleChange} autoComplete="address-level1" required/>
							</FormGroup>*/}

							<FormGroup className="col-md-2 mb-3">
							<Label for="address">Nhan vien</Label>
							<Input type="select" name="nhanvien" id="gioitinh"onChange={this.handleChange} autoComplete="address-level1">	
								{this.state.nhanViens.map((item, index) => (
									<option value={item.hoten}>{item.hoten}</option>
								))}							
							</Input>
						</FormGroup>

							
							<FormGroup className="col-md-5 mb-3">
								<Label for="country">Giờ hẹn</Label>
								<Input type="time" name="gio" id="gio" value={item.gio ||''}
								onChange={this.handleChange} autoComplete="address-level1" required/>
							</FormGroup>
							<FormGroup className="col-md-5 mb-3">
								<Label for="country">Ngày hẹn</Label>
								<Input type="date" name="ngay" id="ngay" value={item.ngay ||''}
								onChange={this.handleChange} autoComplete="address-level1" required/>
							</FormGroup>
							

							<FormGroup className="col-md-10 mb-3">
								<Label for="country">Địa chỉ hẹn</Label>
								<Input type="text" name="diachi" id="diachi" value={item.diachi ||''}
								onChange={this.handleChange} autoComplete="address-level1" required/>
							</FormGroup><br/>

							<FormGroup className="col-md-10 mb-3">
								<Label for="country">Trang thai</Label>
								<Input type="text" name="trangthai" id="trangthai" defaultValue='okok'
								onChange={this.handleChange} autoComplete="address-level1" required/>
							</FormGroup><br/>

							<FormGroup className="col">
								<Button color="primary" type="submit">Save</Button>{' '}
								<Button color="secondary" tag={Link} to="/lichhen">Cancel</Button>
							</FormGroup>
						</td>
					</tr>
				</table>
				</Form>	
			</div>

		);
	}
}

export default withRouter(xeplichhen);