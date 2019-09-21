import {Component, OnInit, EventEmitter, Output, Injectable} from '@angular/core';
import {TrainingService} from '../training.service';
import {Exercise} from '../exercise.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})


export class NewTrainingComponent implements OnInit {

  constructor(private trainingService: TrainingService) { }

  exercises: Exercise[] = [];

  ngOnInit() {
    this.exercises = this.trainingService.getAvailableExercises().slice();
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

}
