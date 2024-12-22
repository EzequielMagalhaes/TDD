import { LeadF } from './LeadF'; // esse importe vai ser alterado dependendo da versão que executar, a versão final é a recomendada.
import { LeadEntity } from './LeadEntity';

describe('TDD :: TYPESCRIPT :: SAMPLE', () => {
    let tested: LeadF;

    /*
        beforeAll()     :: Executado uma vez antes de todos os testes (IT) do describe.
        afterAll()      :: Executado uma vez após todos os testes (IT) do describe.
        beforeEach()    :: Executado antes de cada teste (IT) do describe.
        afterEach()     :: Executado após cada teste (IT) do describe.
    */

    beforeEach(() => {
        tested = new LeadF();
    });

    it('Adicionar um lead', () => {
        const result = tested.add('carlos', 'teste@gmail.com', '(99) 9.1234-5678');
        expect(result).toEqual(true);
    });

    it('Pegar um lead', () => {
        const result = tested.get('teste@gmail.com');
        expect(result).toBeInstanceOf(LeadEntity);
        expect(result).toHaveProperty('name', 'carlos');
        expect(result).toHaveProperty('email', 'teste@gmail.com');
        expect(result).toHaveProperty('phone', '(99) 9.1234-5678');        
    });

    it('Pegar todos os leads', () => {
        const result = tested.getAll();
        expect(result).toBeInstanceOf(Array);
        expect(result).toHaveLength(1);
    });

    it('Deletar lead', () => {
        const result = tested.del('teste@gmail.com');
        expect(result).toEqual(true);
    });
});
