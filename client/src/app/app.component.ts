import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameService } from '../services/game.service';
import { Card } from '../models/card';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  template: `
    <h1>Party Legends</h1>
    <section *ngIf=\"cards.length\">
      <article *ngFor=\"let c of cards\" class=\"card\">
        <img [src]=\"c.image\" [alt]=\"c.name\" />
        <h2>{{ c.name }}</h2>
        <p *ngIf=\"c.stats\">Energy: {{ c.stats['Energy'] }} —
           Charm: {{ c.stats['Charm'] }}</p>
        <em>{{ c.ability?.name }}</em>
      </article>
    </section>
  `,
  styles: [`
    .card{border:1px solid #eee;padding:8px;margin:8px;display:inline-block;width:160px;text-align:center}
    img{width:100%;border-radius:8px}
  `]
})
export class AppComponent implements OnInit {
  cards: Card[] = [];
  constructor(private gs: GameService) {}
  ngOnInit() {
    this.gs.getGame('party_legends_v1').subscribe(data => this.cards = data.cards);
  }
}
