import { Estado } from './estado';

describe('Estado', () => {
    it('should create an instande', () => {
        expect(new Estado('São_Paulo', 'SP')).toBeTruthy();
    });
})