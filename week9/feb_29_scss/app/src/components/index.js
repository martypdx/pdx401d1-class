import angular from 'angular';
import app from './app/app';
import appFooter from './app-footer/app-footer';
import stores from './stores/stores';
import pets from './pets/pets';
import petTypeDetail from './pet-type/details/details';
import signin from './signin/signin';

const components = angular.module( 'components', [] );

app( components );
appFooter( components );
stores( components );
pets( components );
petTypeDetail( components );
signin( components );

export default components.name;