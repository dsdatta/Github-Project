import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../../services/github-service.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-commits',
  standalone: false,
  templateUrl: './commits.component.html',
  styleUrl: './commits.component.css'
})
export class CommitsComponent implements OnInit{
  commits=[];
 //total items
 totalCount=0;

  constructor(private readonly service: GithubServiceService, private route: ActivatedRoute,public messageService: MessageService) {}


  ngOnInit() {
    this.getCommitsForRepositories();
  }

  //method to fetch commits from api
  getCommitsForRepositories(){
    this.service.getCommits(
      this.route.snapshot.paramMap.get('owner')!,
      this.route.snapshot.paramMap.get('repo')!
    ).subscribe({
      next: (data) => {
        this.commits=data.items; //assign results
        this.totalCount=data.total_count; //assign total items count
      },
      error: (err) =>  {  //error handling
        this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error.message });
      }    
      
    });
  }
  
}
