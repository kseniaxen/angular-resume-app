import { Component } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent  {
  knowledge = [
    'C/C++',
    'C#',
    'HTML',
    'CSS',
    'PHP',
    'JavaScript',
    'Python'
  ]
  education = [
    'Completed secondary education',
    'Completed higher education in the specialty "Automation and Computer Integrated Technologies"'
  ]
}
