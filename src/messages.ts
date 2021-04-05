const fakeCreatedAt = () => {
  const now = Date.now();

  return now - (Math.random() * 10000) - 10000;
};

export default [
  {
    id: 1,
    time: 13,
    body: 'test message',
    createdAt: fakeCreatedAt(),
  },
  {
    id: 2,
    time: 33,
    body: 'test message',
    createdAt: fakeCreatedAt(),
  },
  {
    id: 3,
    time: 35,
    body: 'test message',
    createdAt: fakeCreatedAt(),
  },
  {
    id: 4,
    time: 34,
    body: 'test message',
    createdAt: fakeCreatedAt(),
  },
  {
    id: 5,
    time: 24,
    body: 'test message',
    createdAt: fakeCreatedAt(),
  },
  {
    id: 6,
    time: 13,
    body: 'test message',
    createdAt: fakeCreatedAt(),
  },
  {
    id: 7,
    time: 11,
    body: 'test message',
    createdAt: fakeCreatedAt(),
  },
  {
    id: 8,
    time: 52,
    body: 'test message',
    createdAt: fakeCreatedAt(),
  },
  {
    id: 9,
    time: 23,
    body: 'test message',
    createdAt: fakeCreatedAt(),
  },
  {
    id: 10,
    time: 50,
    body: 'test message',
    createdAt: fakeCreatedAt(),
  },
];
