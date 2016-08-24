
export default class HomeController{
	//@ngInject;
	constructor(EmployeeService){
		EmployeeService.getEmployee().then(
			employee => {
				this.employee = employee;
			}
		);
	}
}