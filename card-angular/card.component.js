const CardComponent = {
  transclude: {
    title: 'cardTitle',
    description: 'cardDesc',
  },
  bindings: {
    image: '@',
    alt: '@',
  },
  template: `
    <div class="card">
      <img
        src="{{ $ctrl.image }}"
        alt="{{ $ctrl.alt }}"
        class="card__image"
      />
      <div class="card__content">
        <h4 class="card__title" ng-transclude="title"></h4>
        <p class="card__description" ng-transclude="description"></p>
      </div>
    </div>
  `,
};

export default CardComponent;
