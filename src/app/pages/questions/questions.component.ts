import { ProfessorService } from './../../professor.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  public posts = [];

  constructor(private professorservice: ProfessorService, private router: Router) { }

  ngOnInit() {
    this.professorservice.getPosts()
          .subscribe(data => this.posts = data);
  }

  onReadMore(post) {
    this.router.navigate(['/questions', post.id]);
  }


  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }

}
