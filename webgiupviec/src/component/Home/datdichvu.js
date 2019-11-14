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



class datdichvu extends Component{

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
		trangthai: 'chưa duyệt'
	};

	constructor(props) {
		super(props);
		this.state = {
			item: this.emptyItem
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}



	handleChange(event) {
		const target = event.target;
		const value = target.value;
		const name= target.name;
		let item = {...this.state.item};
		item[name] = value;
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
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(item),
		});
		//this.props.history.push('/nhanvien');
		//window.confirm("Bạn đã yêu cầu dịch vụ thành công. Nhân viên công ty sẽ liên lạc với bạn trong 24h");
		confirmAlert({
	      title: 'Yêu cầu thành công!',
	      message: 'Nhân viên công ty sẽ liên lạc với bạn trong 24h.',
	      buttons: [
	        {
	          label: 'OK',
	       
	        }
	      ],
	       childrenElement: () => null,
		    closeOnClickOutside: true,
		    closeOnEscape: true,
		    willUnmount: () => null,
		    onClickOutside: () => null,
		    onKeypressEscape: () => null
	    });
	}

	
	render(){

		const {item} = this.state;
		const title = <h1 className="h3 mb-2 text-gray-800 pb-3">Đặt dịch vụ</h1>;

		return(

			<div className="container-fluid">

				{title}
				<Form onSubmit={this.handleSubmit}>
					<FormGroup className="col-md-5 mb-3">
						<Label for="name">Họ tên</Label>
						<Input type="text" name="khachhang" id="khachhang" value={item.khachhang ||''}
						onChange={this.handleChange} autoComplete="name" required/>
						 <FormFeedback valid>Sweet! that name is available</FormFeedback>
					</FormGroup>
					
						<FormGroup className="col-md-3 mb-3">
							<Label for="stateOrProvince">Số điện thoại</Label>
							<Input type="text" name="sdt" id="sdt" value={item.sdt ||''}
							onChange={this.handleChange} autoComplete="address-level1" required/>
						</FormGroup>
						<FormGroup className="col-md-3 mb-3">
							<Label for="country">Địa chỉ</Label>
							<Input type="text" name="sonha" id="sonha" value={item.sonha ||''}
							onChange={this.handleChange} autoComplete="address-level1" required/>
						</FormGroup>
						<FormGroup className="col-md-3 mb-3">
							<Label for="country">Ngày làm</Label>
							<Input type="date" name="ngaylam" id="ngaylam" value={item.ngaylam ||''}
							onChange={this.handleChange} autoComplete="address-level1" required/>
						</FormGroup>
						<FormGroup className="col-md-3 mb-3">
							<Label for="country">Chi tiết công việc</Label>
							<Input type="text" name="congviec" id="congviec" value={item.congviec ||''}
							onChange={this.handleChange} autoComplete="address-level1" required/>
						</FormGroup>

					<FormGroup className="col">
						<Button color="primary" type="submit">Save</Button>{' '}
						<Button color="secondary" tag={Link} to="/nhanvien">Cancel</Button>
					</FormGroup>
				</Form>	
			</div>

		);
	}
}

export default datdichvu;