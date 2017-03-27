import { IsBlank } from './index';

describe('IsBlank', function () {

	it('should check if input is undefined', () => {
		expect( IsBlank( undefined ) ).toEqual( true );
	});

	it('should check if input is null', () => {
		expect( IsBlank( null ) ).toEqual( true );
	});

	it('should check if input is null', () => {
		expect( IsBlank( void 0 ) ).toEqual( true );
	});

	it('should check if input is null', () => {
		expect( IsBlank( NaN ) ).toEqual( false );
	});

	it('should check if input is empty', () => {
		expect( IsBlank( '', true ) ).toEqual( true );
	});

	it('should check if input is empty', () => {
		expect( IsBlank( '' ) ).toEqual( false );
	});

});
