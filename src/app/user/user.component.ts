import { Component, EventEmitter, Input, Output, computed, input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.modal';
import { CardComponent } from "../shared/card/card.component";


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})
export class UserComponent {
  // signals 
  // avatar = input.required<string>()
  // name = input.required<string>()
  // ImagePath = computed(() => {
  //   return 'assets/users/' + this.avatar()
  // })
  @Input({ required: true }) user!: User
  @Input({ required: true }) selected!: boolean
  @Output() select = new EventEmitter<string>()

  get ImagePath() {

    return 'assets/users/' + this.user.avatar
  }
  onSelectedUser() {
    this.select.emit(this.user.id);

  }
}
