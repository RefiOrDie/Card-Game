export interface StatBlock { [key: string]: number; }

export interface AbilityEffect {
  target: string;
  stat: string;
  modifier: number | string;
  duration: number | string;
}

export interface Ability {
  name: string;
  trigger: string;
  effect: AbilityEffect | AbilityEffect[];
}

export interface Card {
  id: string;
  type: 'player' | 'item';
  name: string;
  image: string;
  stats?: StatBlock;
  trait?: string;
  ability?: Ability;
  effect?: AbilityEffect[];
  uses?: number;
}
