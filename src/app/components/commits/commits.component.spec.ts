import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { CommitsComponent } from './commits.component';
import { GithubServiceService } from '../../services/github-service.service';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MessageService } from 'primeng/api';
import { By } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';

describe('CommitsComponent', () => {
  let component: CommitsComponent;
  let fixture: ComponentFixture<CommitsComponent>;
  let mockService = { 
    searchRepositories: jasmine.createSpy().and.returnValue(of({ items: [] })), 
    getCommits: jasmine.createSpy().and.returnValue(of([])) // Added getCommits mock
  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommitsComponent],
      imports: [RouterTestingModule,TableModule], 
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: GithubServiceService, useValue: mockService },MessageService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create commits component', () => {
    expect(component).toBeTruthy();
  });

    it('should initialize the table with data', () => {
      const rows = fixture.debugElement.queryAll(By.css('tr')); 
    expect(rows.length).toBeGreaterThan(1);
  });
});
