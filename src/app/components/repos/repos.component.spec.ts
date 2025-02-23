import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposComponent } from './repos.component';
import { of } from 'rxjs';
import { GithubServiceService } from '../../services/github-service.service';
import { MessageService } from 'primeng/api';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';


describe('ReposComponent', () => {
  let component: ReposComponent;
  let fixture: ComponentFixture<ReposComponent>;
  let mockService = { 
    searchRepositories: jasmine.createSpy().and.returnValue(of({ items: [] })), 
    getCommits: jasmine.createSpy().and.returnValue(of([])) // Added getCommits mock
  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReposComponent],
      imports: [ReactiveFormsModule,TableModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: GithubServiceService, useValue: mockService },MessageService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create repos component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form controls', () => {
    expect(component.searchControl).toBeInstanceOf(FormControl);
    expect(component.languageControl).toBeInstanceOf(FormControl);
    expect(component.starsControl).toBeInstanceOf(FormControl);
  });
  
  it('should initialize the table with no data', () => {
    const rows = fixture.debugElement.queryAll(By.css('tr')); 
    expect(rows.length).toBe(1); 
  });

});
