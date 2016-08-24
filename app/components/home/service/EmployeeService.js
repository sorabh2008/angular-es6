import Employee from '../model/Employee';

export default class EmployeeService{
	
	//@ngInject;
	constructor($q){
		this._$q = $q;
	}
	
	getEmployee(){
		return this._$q.when(new Employee());
	}
	
}