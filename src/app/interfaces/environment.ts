export interface Environment {
  name: 'dev' | 'production';
  production: boolean;
  apiUrl: string;
  apiKey: string;
}
