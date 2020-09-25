import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AdminLayoutRoutes } from "./admin-layout.routing";

import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { QuestionsComponent } from 'src/app/pages/questions/questions.component';
import { ChannelsComponent } from 'src/app/pages/channels/channels.component';
import { SettingsComponent } from 'src/app/pages/settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    UserComponent,
    NotificationsComponent,
    QuestionsComponent,
    ChannelsComponent,
    SettingsComponent
  ]
})
export class AdminLayoutModule {}
