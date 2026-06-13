class PIMPage{

constructor(page){
 
    this.page=page;
    this.PIMMenu= page.locator("//span[text()='PIM']");
    this.addEmployeeBtn= page.locator("//a[text()='Add Employee']");
    this.firstName= page.locator("//input[@name='firstName']");
    this.middleName= page.locator("//input[@name='middleName']");
    this.lastName= page.locator("//input[@name='lastName']");
    this.saveBtn= page.locator("//button[@type='submit']");
    this.employeeList= page.locator("//a[text()='Employee List']");
    this.employeeName= page.locator("//input[@placeholder='Type for hints...']");
    this.searchBtn= page.locator("//button[text()=' Search ']");

}


async openApp(){

    await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
}






}