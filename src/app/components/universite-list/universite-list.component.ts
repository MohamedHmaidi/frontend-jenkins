import { Component, OnInit } from '@angular/core';
import { UniversiteService } from '../../services/universite.service';

@Component({
  selector: 'app-universite-list',
  templateUrl: './universite-list.component.html',
  styleUrls: ['./universite-list.component.css']
})
export class UniversiteListComponent implements OnInit {
  universites: any[] = [];

  constructor(private universiteService: UniversiteService) {}

  ngOnInit(): void {
    this.universiteService.getUniversites().subscribe(
      (data) => {
        this.universites = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des universités:', error);
      }
    );
  }
}
