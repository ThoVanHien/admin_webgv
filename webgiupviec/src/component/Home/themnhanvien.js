import React, {Component} from 'react';
import { AvForm, AvField, ValidatingFormGroup } from 'availity-reactstrap-validation';

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



class themnhanvien extends Component{

	emptyItem = {
		hoten: '',
		gioitinh: '',
		ngaysinh: '',
		sdt: '',
		cmnd: '',
		luong: ''
	};

	constructor(props) {
		super(props);
		this.state = {
			item: this.emptyItem
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChangePhone = this.handleChangePhone.bind(this);
	}

	async componentDidMount() {
		if (this.props.match.params.id !== 'new') {
			const nv = await (await fetch(`/gvnhanh/nhanvien/${this.props.match.params.id}`)).json();
			this.setState({item: nv});
		}
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

		await fetch('/gvnhanh/nhanvien', {
			method: (item.id) ? 'PUT' : 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(item),
		});
		this.props.history.push('/nhanvien');
		
	}

	handleChangePhone(e){
	    if(e.target.value.match("^[a-zA-Z ]*$")!=null) {
	      this.setState({item: e.target.value});
	    }
	  }

	
	render(){

		const {item} = this.state;
		const title = <h1 className="h3 mb-2 text-gray-800 pb-3">{item.hoten ? 'Cập nhật nhân viên' : 'Thêm nhân viên'}</h1>;

		return(

			<div className="container-fluid">

				{title}
				<Form onSubmit={this.handleSubmit}>
					<FormGroup className="col-md-5 mb-3">
						<Label for="name">Họ tên</Label>
						<Input type="text" name="hoten" id="hoten" value={item.hoten || ''}
						onChange={this.handleChange} autoComplete="name" required/>
						 <FormFeedback valid>Sweet! that name is available</FormFeedback>
					</FormGroup>

					<div className="row col">
						<FormGroup className="col-md-2 mb-3">
							<Label for="address">Giới tính</Label>
							<Input type="select" name="gioitinh" id="gioitinh" value={item.gioitinh || ''} onChange={this.handleChange} autoComplete="address-level1">
								<option>Nam</option>
								<option>Nữ</option>
								<option>Khác</option>
							</Input>
						</FormGroup>
						<FormGroup className="col-md-3 mb-3">
							<Label for="city">Ngày sinh</Label>
							<Input type="date" name="ngaysinh" id="ngaysinh" value={item.ngaysinh || ''}
							onChange={this.handleChange} autoComplete="address-level1"/>
						</FormGroup>
					</div>

					
						<FormGroup className="col-md-3 mb-3">
							<Label for="stateOrProvince">Số điện thoại</Label>
							<Input type="text" name="sdt" id="sdt" value={item.sdt || ''}
							onChange={this.handleChange} autoComplete="address-level1" required/>
						</FormGroup>
						<FormGroup className="col-md-3 mb-3">
							<Label for="country">CMND</Label>
							<Input type="text" name="cmnd" id="cmnd" value={item.cmnd || ''}
							onChange={this.handleChange} autoComplete="address-level1" required/>
						</FormGroup>
						<FormGroup className="col-md-3 mb-3">
							<Label for="country">Lương</Label>	
							<InputGroup>				
								<Input type="number" name="luong" id="luong" min="0" value={item.luong || ''}
								onChange={this.handleChange} autoComplete="address-level1"/>
								<InputGroupAddon addonType="append">VNĐ</InputGroupAddon>
							</InputGroup>
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

export default withRouter(themnhanvien);