import { Estado } from './estado';

describe('Cliente', () => {
    it('should create an instande', () => {
        expect(new Estado('São_Paulo', 'SP')).toBeTruthy();
    });
})