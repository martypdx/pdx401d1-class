import angular from 'angular';
import pets from './pets/pets';
import pet from './pet/pet';

const components = angular.module( 'components', [] );
pets( components );
pet( components );

export default components.name;