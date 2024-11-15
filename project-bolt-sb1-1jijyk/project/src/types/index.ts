export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Car {
  id: string;
  userId: string;
  title: string;
  description: string;
  images: string[];
  tags: {
    carType: string;
    company: string;
    dealer: string;
    [key: string]: string;
  };
  createdAt: number;
  updatedAt: number;
}

export type CarInput = Omit<Car, 'id' | 'userId' | 'createdAt' | 'updatedAt'>;