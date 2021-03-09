import { Injectable} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  isHandset = false;
  LOADING = false;

  constructor(private snackBar: MatSnackBar,) { }

  openSnackBar(message: string, action: string, duration: number, panelClass: string) {
    this.snackBar.open(message, action, {
      duration,
      panelClass,
      verticalPosition: 'top', // 'top' | 'bottom'
      horizontalPosition: 'end',
    });
  }
}
