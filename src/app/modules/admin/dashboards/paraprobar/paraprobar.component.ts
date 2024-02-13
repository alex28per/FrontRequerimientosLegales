import { CurrencyPipe, DatePipe, NgClass, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-paraprobar',
  encapsulation  : ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatMenuModule, MatDividerModule, MatTableModule, MatSortModule, NgClass, NgFor, MatProgressBarModule, CurrencyPipe, DatePipe],
  templateUrl: './paraprobar.component.html'
})
export class ParaprobarComponent {

    normasaprobar: any[] = [
        {id:1, tipo: 'Título preliminar',fecha:'23/08/2023', usuario: 'Rafael Córdova'}
    ]
}
