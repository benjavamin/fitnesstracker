import {Component, OnDestroy, OnInit} from '@angular/core';
import {TrainingService} from './training.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit, OnDestroy {
  ongoingTraining = false;
  ongoingTrainingSubscription: Subscription;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.trainingService.exerciseChanged.subscribe(exercise => {
      exercise ? this.ongoingTraining = true : this.ongoingTraining = false;
    });
  }

  ngOnDestroy(): void {
    this.ongoingTrainingSubscription.unsubscribe();
  }

}
