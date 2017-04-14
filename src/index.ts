import * as _ from 'lodash';

export function IsBlank(obj: any, isEmpty = false): boolean {
	return _.isNil( obj ) || ( isEmpty && _.isEmpty( obj ) );
}
