import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface TableColumn {
  key: string;
  label: string;
}

@Component({
  selector: 'app-ui-table',
  templateUrl: './ui-table.component.html',
  styleUrls: ['./ui-table.component.scss'],
})
export class UiTableComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() data: any[] = [];
  @Input() columns: TableColumn[] = [];

  @Input() pageSize = 10;
  @Input() pageSizeOptions: number[] = [5, 10, 25, 50];

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  ngOnInit(): void {
    this.updateColumns();
    this.dataSource.data = this.data || [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['columns']?.currentValue) {
      this.updateColumns();
    }

    if (changes['data']?.currentValue) {
      this.dataSource.data = this.data || [];
      if (this.paginator) {
        this.paginator.firstPage();
      }
    }
  }

  ngAfterViewInit(): void {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  private updateColumns(): void {
    this.displayedColumns = (this.columns || []).map((c) => c.key);
  }
}
