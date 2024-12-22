module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'], // Ajuste o diretório base onde os testes estão localizados
  moduleFileExtensions: ['ts', 'js'], // Extensões que serão reconhecidas
  transform: {
    '^.+\\.ts$': 'ts-jest', // Transforma arquivos TypeScript para JavaScript
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$', // Reconhece arquivos *.test.ts ou *.spec.ts
};