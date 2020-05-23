import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {
  showMessageEducation:boolean = false
  showMessageBiography:boolean = false
  showMessageExperience:boolean = false
  showMessageMedical:boolean = false
  constructor() { }

  ngOnInit(): void {
    

    }
    
    showEducation(){
    this.showMessageEducation = !this.showMessageEducation
   
    }

    showBiography(){
      this.showMessageBiography = !this.showMessageBiography
     
      }

      showExperience(){
        this.showMessageExperience = !this.showMessageExperience
       
        }

        showMedical(){
          this.showMessageMedical = !this.showMessageMedical
         
          }
  }


