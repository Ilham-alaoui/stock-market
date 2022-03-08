import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemComponent } from './stock-item.component';
import { Stock } from 'src/app/model/stock';

describe('StockItemComponent', () => {
  let component: StockItemComponent;
  let fixture: ComponentFixture<StockItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have toggle stock favorite', () => {
    const appComponent = new StockItemComponent;
    appComponent.ngOnInit();
    expect(appComponent.stock.favorite).toBeFalsy();
    appComponent.toggleFavorite(new Stock('Test Stock Company', 'TSC', 85, 80,'ll'));
    expect(appComponent.stock.favorite).toBeTruthy();
    appComponent.toggleFavorite(new Stock('Test Stock Company', 'TSC', 85, 80,'ll'));
    expect(appComponent.stock.favorite).toBeFalsy();
    });
});
