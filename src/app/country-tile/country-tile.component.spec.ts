import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryTileComponent } from './country-tile.component';

describe('CountryTileComponent', () => {
  let component: CountryTileComponent;
  let fixture: ComponentFixture<CountryTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
