export class Vacancy {

    public vacancyname: string;
    public location: string;
    public salary: number;
    public description: string;

    constructor(vacancyname: string, location: string, salary: number, description: string){

        this.vacancyname = vacancyname;
        this.location = location;
        this.salary = salary;
        this.description = description;
    }
}