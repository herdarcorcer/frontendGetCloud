import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { person } from '../interfaces/person';
import { PersonsService } from '../services/persons.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  candidate: person = {
    name: null,
    surname: null,
    phone: null,
    date: null,
    rating: null
  };

  id: any;
  editing: boolean = false;

  constructor(private personsService: PersonsService, private activateRoute: ActivatedRoute) {

    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id) {
      this.editing = true;
      this.personsService.getId(this.id).subscribe((data: person) => {
        this.candidate = data;
      }, (error) => {
        console.log(error);
      });
    } else {
      this.editing = false;
    }

  }

  ngOnInit() {
  }

  saveCandidate() {
    if (this.id) {
      this.personsService.put(this.candidate, this.id)
      .subscribe(
        (data) => {
          console.log(data);
          alert('Candidate update');
        },
        (error) => {
          console.log(error);
          alert('Error!');
        }
      );
    }else{
      this.personsService.save(this.candidate)
      .subscribe(
        (data) => {
          console.log(data);
          alert('Candidate save');
        },
        (error) => {
          console.log(error);
          alert('Error!');
        }
      );
    }

  }

}
