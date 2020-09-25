import { Router, ParamMap } from '@angular/router';
import { ProfessorService } from './../../../professor.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public postId;
  public posts = [];
  isShow = true;
  public answers = [];

  constructor(private service: ProfessorService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.service.getPosts()
          .subscribe(data => this.posts = data);

    this.route.paramMap.subscribe((params:ParamMap)=> {
      let id = parseInt(params.get('id'));
      this.postId = id;
    });
  }

  goBack() {
    this.router.navigate(['/questions']);
  }

  onReply(){
    this.isShow = false;
  }

  getAnswers(){
    this.service.getAnswers()
      .subscribe(data => this.answers = data as string[])

  }

  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
