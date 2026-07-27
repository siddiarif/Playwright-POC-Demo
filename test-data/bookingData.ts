export const cityData = {
  departureCity: 'Paris',
  destinationCity: 'Buenos Aires'
};

export type PassengerDetails = {
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  cardType: string;
  cardNumber: string;
  cardMonth: string;
  cardYear: string;
  nameOnCard: string;
};

export const passengerData: PassengerDetails = {
  name: 'John Doe',
  address: '123 Main Street',
  city: 'New York',
  state: 'NY',
  zipCode: '10001',
  cardType: 'visa',
  cardNumber: '4111111111111111',
  cardMonth: '11',
  cardYear: '2027',
  nameOnCard: 'John Doe'
};
