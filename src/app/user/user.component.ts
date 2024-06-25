import { Component, EventEmitter, Input, Output, computed, input } from '@angular/core';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // signals 
  // avatar = input.required<string>()
  // name = input.required<string>()
  // ImagePath = computed(() => {
  //   return 'assets/users/' + this.avatar()
  // })

  @Input({ required: true }) avatar!: string
  @Input({ required: true }) name!: string
  @Input({ required: true }) id!: string
  @Output() select = new EventEmitter()

  get ImagePath() {

    return 'assets/users/' + this.avatar
  }
  onSelectedUser() {
    this.select.emit(this.id)
  }
}
