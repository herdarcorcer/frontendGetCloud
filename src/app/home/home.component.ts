import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { person } from '../interfaces/person';
import { PersonsService } from '../services/persons.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  persons: person[];

  constructor(private personService: PersonsService, private httpClient: HttpClient) {
    this.getCandidates()
  }

  ngOnInit() {
  }

  getCandidates() {
    this.personService.get()
      .subscribe(
        (data: person[]) => {
          this.persons = data;
        },
        (error) => {
          alert('Error!');
        }
      )
  }

  deleteCandidate(id){
    this.personService.delete(id)
    .subscribe(
      (data) => {
        console.log(data);
        this.getCandidates();
        alert('Candidate delete');
      },
      (error) => {
        console.log(error);
        alert('Error!');
      }
    )
  }

}
