import angular from 'angular';
import CardComponent from './card.component';

const Card = angular
  .module('components.card', [])
  .component('card', CardComponent)
  .name;

export default Card;
