import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { Comment } from 'src/app/interfaces/comment.interface';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule,CommentFormComponent],
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() comment!: Comment;
  isExpanded = signal(false);
  isReplying = signal(false);
  
  public toggleReplying() {
    this.isReplying.set(!this.isReplying());
    if (this.isReplying()) {
      this.isExpanded.set(true);
    }
  }

  public toggleExpaned() {
    this.isExpanded.set(!this.isExpanded());
  }
}
