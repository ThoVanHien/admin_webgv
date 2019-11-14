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

class themloaidv extends Component{

	emptyItem = {
		tenloai: '',
		gioithieu: '',
		camket: '',
		kynangngv: '',
		anh: ''
	};



	constructor(props) {
		super(props);
		this.state = {
			item: this.emptyItem,
		 	
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		
	}

	async componentDidMount() {
		if (this.props.match.params.id !== 'new') {
			const loaidv = await (await fetch(`/gvnhanh/loaidichvu/${this.props.match.params.id}`)).json();
			this.setState({item: loaidv});
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

		await fetch('/gvnhanh/loaidichvu', {
			method: (item.id) ? 'PUT' : 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(item),
		});
		this.props.history.push('/loaidichvu');
	}

	render(){

		const {item} = this.state;
		const title = <h1 className="h3 mb-2 text-gray-800 pb-3">{item.idloaidv ? 'Cập nhật dịch vụ' : 'Thêm dịch vụ'}</h1>;
		
		// let anh;

		// if(item.tenloai){
		// 	anh = <FormGroup className="col-md-3 mb-3">
		// 						<Label for="stateOrProvince">Hình ảnh</Label>
		// 						<img src="../img/comment.png" alt="..."/>
		// 						<Input type="file" name="anh" id="anh" value={item.anh || ''}
		// 						onChange={this.handleChange} autoComplete="address-level1" required/>
		// 					</FormGroup>
		// }
		// else{
		// 	anh = <FormGroup className="col-md-3 mb-3">
		// 						<Label for="stateOrProvince">Hình ảnh</Label>
		// 						<input type="file" name="anh" id="anh" value={item.anh || ''}
		// 						onChange={this.handleChange} autoComplete="address-level1" required/>
		// 					</FormGroup>
		// }

		return(
			<div className="container-fluid">

				{title}
				<Form onSubmit={this.handleSubmit}>
					<FormGroup className="col-md-7 mb-3">
						<Label for="name">Tên dịch vụ</Label>
						<Input type="text" name="tenloai" id="tenloai" value={item.tenloai || ''}
						onChange={this.handleChange} autoComplete="name" required/>
						 <FormFeedback valid>Sweet! that name is available</FormFeedback>
					</FormGroup>

		
					<FormGroup className="col-md-8 mb-3">
						<Label for="address">Giới thiệu</Label>
						<Input type="textarea" name="gioithieu" id="gioithieu" value={item.gioithieu || ''}
						onChange={this.handleChange} autoComplete="name" row="10" required/>
					</FormGroup>
					<FormGroup className="col-md-8 mb-3">
						<Label for="city">Cam kết</Label>
						<Input type="textarea" name="camket" id="camket" value={item.camket || ''}
						onChange={this.handleChange} autoComplete="address-level1"/>
					</FormGroup>
					
						<FormGroup className="col-md-8 mb-3">
							<Label for="stateOrProvince">Kỹ năng người giúp việc</Label>
							<Input type="textarea" name="kynangngv" id="kynangngv" value={item.kynangngv || ''}
							onChange={this.handleChange} autoComplete="address-level1" required/>
						</FormGroup>

						<FormGroup className="col-md-3 mb-3">
							<Label for="stateOrProvince">Hình ảnh</Label>
							<Input type="file" name="anh" id="anh" value={item.anh || ''}
							onChange={this.handleChange} autoComplete="address-level1" accept="image/png, image/jpeg, image/gif"/>
						</FormGroup>
						

					<FormGroup className="col">
						<Button color="primary" type="submit">Save</Button>{' '}
						<Button color="secondary" tag={Link} to="/loaidichvu">Cancel</Button>
					</FormGroup>
				</Form>	
		</div>

		);
	}
}


export default withRouter(themloaidv);