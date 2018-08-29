import { Routes } from '@angular/router';
import { DataResolver } from './app.resolver';

import { SkillComponent } from '../views/skill';
import { ExamComponent } from '../views/exam';
import { KnowledgeComponent } from '../views/knowledge';
import { SceneComponent } from '../views/scene';
import { CoursePrepareComponent } from '../views/course_prepare/index';

export const ROUTES: Routes = [
  {
    path: 'courseprepare',
    component: CoursePrepareComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: 'scene',
            component: SceneComponent,
          },
          {
            path: 'knowledge',
            component: KnowledgeComponent,
          },
          {
            path: 'examination',
            component: ExamComponent,
          },
          {
            path: 'skill',
            component: SkillComponent,
          },
          {
            path: '',
            component: SceneComponent,
          }
        ]
      }
    ]
  },

  { path: '', redirectTo: '/courseprepare', pathMatch: 'full' },
];
