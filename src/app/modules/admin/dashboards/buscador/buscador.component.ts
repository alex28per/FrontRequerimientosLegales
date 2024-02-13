import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule, DecimalPipe, NgFor } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';
import { NgbDateStruct, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'buscador',
  encapsulation  : ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NgbModule, MatButtonModule, MatIconModule, MatMenuModule, MatButtonToggleModule, NgApexchartsModule, MatTooltipModule, NgFor, DecimalPipe],
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent {
    selects: any [] = [{}];
    MAX_SELECTS = 10;


    agregarSelect() {
        this.selects.push({}); // Puedes inicializarlo con datos predeterminados si es necesario

      }

      quitarSelect(index: number): void {
        this.selects.splice(index, 1);
    }


}
