import angular from 'angular';
import kidEdit from './kid-edit/kid-edit';
import formControl from './form-control/form-control';

const components = angular.module( 'components', [] );
kidEdit( components );
formControl( components );

export default components.name;