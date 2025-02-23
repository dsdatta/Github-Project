import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { GithubServiceService } from '../../services/github-service.service';
import { combineLatest, debounceTime, Observable, observeOn, startWith, switchMap } from 'rxjs';
import { FormControl } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-repos',
  standalone: false,
  templateUrl: './repos.component.html',
  styleUrl: './repos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReposComponent implements OnInit{
  //form controls for search criterias
  searchControl = new FormControl('');
  languageControl = new FormControl('');
  starsControl = new FormControl('');
  //repositories result array
  repositories=[];
  //loading animation
  loading=false;
  //total items
  totalCount=0;
  private cd = inject(ChangeDetectorRef);

  constructor(private service: GithubServiceService,public messageService: MessageService) {}

ngOnInit(){
 this.getSearchRepositories();  
}

//method to fetch the searched repositories from api
getSearchRepositories() {
  
    combineLatest([    //detects value change in formControl
      this.searchControl.valueChanges.pipe(),
      this.languageControl.valueChanges.pipe(startWith('')),
      this.starsControl.valueChanges.pipe(startWith('')),
    ]).pipe(
      debounceTime(500), //delays the values emitted 
      switchMap(([query, language, stars]) => this.service.getRepositories(query, language, stars)) //(switchMap) emitting values only from the most recent
    ).subscribe({
      next: (data) => {
        this.repositories=data.items, //assign results
        this.totalCount=data.total_count, //assign total items count
        this.cd.markForCheck(); //change detection
        this.loading=false;
      },
      error: (err) =>  {  //error handling
        this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error.message }),
        this.loading=false;
      }    
      
    });

}

//handling loading animation on value change
handleValueChange(){
  if(this.searchControl.value){
    this.loading=true;
  }
  
}

//method to navigate on row click
  navigateToCommits(owner: string, repo: string) {
    window.location.href = `/commits/${owner}/${repo}`;
  }

}
