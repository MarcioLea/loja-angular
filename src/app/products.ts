export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'Um telefone grande com uma das melhores telas'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'Um ótimo telefone com uma das melhores câmeras'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'Um ótimo telefone para o dia a dia'
  }
];

