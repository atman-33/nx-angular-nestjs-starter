import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ApiService } from '@libs/client/data-access';

@Component({
  selector: 'nx-angular-nestjs-template-client-feature-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-feature-dashboard.component.html',
  styleUrls: ['./client-feature-dashboard.component.scss'],
})
export class ClientFeatureDashboardComponent {
  private readonly apiService = inject(ApiService);

  todoItems$ = this.apiService.getAllToDoItems();
}
