import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Floor } from '../models/floor.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-floors',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterLink],
  templateUrl: './floors.component.html',
  styleUrl: './floors.component.scss',
})
export class FloorsComponent implements OnInit {
  floorForm: FormGroup = new FormGroup({});
  floors: Array<Floor> = [
    {
      id: '1',
      name: 'Floor 1',
      description: 'This Floor is for VIPs',
      restaurantId: '',
      tabels: [
        {
          name: 'asas',
          description: 'asasasaxas',
          sittingCapacity: 6,
          floorId: '1',
        },
        {
          name: 'asas',
          description: 'asasasaxas',
          sittingCapacity: 6,
          floorId: '1',
        },
        {
          name: 'asas',
          description: 'asasasaxas',
          sittingCapacity: 6,
          floorId: '1',
        },
        {
          name: 'asas',
          description: 'asasasaxas',
          sittingCapacity: 6,
          floorId: '1',
        },
        {
          name: 'asas',
          description: 'asasasaxas',
          sittingCapacity: 6,
          floorId: '1',
        },
      ],
    },
    {
      id: '2',
      name: 'Floor 2',
      description: ' This Floor is for Families',
      restaurantId: '',
    },
    {
      id: '3',
      name: 'Floor 3',
      description: 'Roof Top Elite Class Floor',
      restaurantId: '',
    },
  ];
  isFloorForm: boolean = false;
  selectedFloorID: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm(false);
  }
  initForm(formMode: boolean) {
    if (formMode) {
      this.floorForm = this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
      });
    } else {
      this.floorForm = this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        sittingCapacity: ['2'],
      });
    }
  }

  submitForm() {
    if (this.floorForm.valid) {
      if (this.isFloorForm) {
        this.floors.push({ ...this.floorForm.value });
      } else {
        let idx = this.floors.findIndex(
          (floor) => floor.id === this.selectedFloorID
        );
        if (!this.floors[idx].tabels?.length) this.floors[idx].tabels = [];
        this.floors[idx].tabels.push(this.floorForm.value);
      }
    }
    console.log(this.floors);
  }
  changeFormMode(formMode: boolean, floorID: string = '') {
    this.isFloorForm = formMode;
    this.selectedFloorID = floorID;
    this.initForm(formMode);
    console.log(this.floorForm);
  }
}
