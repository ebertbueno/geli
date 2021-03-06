import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {UploadDialog} from '../upload-dialog/upload-dialog.component';

@Component({
  selector: 'app-rename-dialog',
  templateUrl: './rename-dialog.component.html',
  styleUrls: ['./rename-dialog.component.scss']
})
export class RenameDialogComponent implements OnInit {
  @Input() nameField = '';

  constructor(public dialogRef: MatDialogRef<UploadDialog>,
              private snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    if (this.data.name !== undefined) {
      this.nameField = this.data.name;
    }
  }

  save(): void {
    // Check if Input is valid
    this.nameField = this.nameField.trim();
    if (this.nameField.length === 0) {
      this.snackBar.open('Input can\'t be empty', '', {duration: 2000});
      return;
    }

    this.dialogRef.close(this.nameField);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
