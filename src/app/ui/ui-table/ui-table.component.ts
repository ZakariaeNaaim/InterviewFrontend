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

  dataSource = new MatTableDataSource<any>([]);

  displayedColumns: string[] = [];
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  ngOnInit(): void {
    this.updateTable();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['columns'] && changes['columns'].currentValue) {
      this.displayedColumns = this.columns.map((c) => c.key);
    }

    if (changes['data']) {
      this.dataSource.data = this.data || [];
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

  private updateTable(): void {
    this.displayedColumns = (this.columns || []).map((c) => c.key);
    this.dataSource.data = this.data || [];
  }
}
