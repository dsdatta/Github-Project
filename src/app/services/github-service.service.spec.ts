import { TestBed } from '@angular/core/testing';

import { GithubServiceService } from './github-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('GithubServiceService', () => {
  let service: GithubServiceService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [GithubServiceService],
    });

    service = TestBed.inject(GithubServiceService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create github-service', () => {
    expect(service).toBeTruthy();
  });
});
