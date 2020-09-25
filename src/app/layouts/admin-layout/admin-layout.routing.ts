import { QuestionsComponent } from 'src/app/pages/questions/questions.component';
import { DetailComponent } from './../../pages/questions/detail/detail.component';
import { Routes } from "@angular/router";

import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { ChannelsComponent } from 'src/app/pages/channels/channels.component';
import { SettingsComponent } from 'src/app/pages/settings/settings.component';

import { AcademicComponent } from 'src/app/channelpages/academic/academic.component';
import { SportsComponent } from 'src/app/channelpages/sports/sports.component';
import { CulturalsComponent } from 'src/app/channelpages/culturals/culturals.component';
import { TechnicalComponent } from 'src/app/channelpages/technical/technical.component';


export const AdminLayoutRoutes: Routes = [
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "questions",component: QuestionsComponent},
  { path: "questions/:id",component: DetailComponent},
  //{ path: "channels", component:ChannelsComponent},
  { path: "settings", component:SettingsComponent},
  {
    path: "channels",
    component: ChannelsComponent,
    children: [
      {
        path: "academic",
        component: AcademicComponent
      },
      {
        path: "sports",
        component: SportsComponent
      },
      {
        path: "culturals",
        component:CulturalsComponent
      },
      {
        path:"technical",
        component:TechnicalComponent
      }
    ]
  },
];
