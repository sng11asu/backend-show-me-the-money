import axios from 'axios';
import axiosMockAdapter from 'axios-mock-adapter';
import {Request, Response} from 'express';
import {baseUrl} from '..';
import getData from './dataController';
import MockAdapter from 'axios-mock-adapter';

describe('getData Controller', () => {
  let mock: MockAdapter;
  let req: Partial<Request>;
  let res: Partial<Response>;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;
  let sendMock: jest.Mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  beforeEach(() => {
    req = {};
    jsonMock = jest.fn();
    statusMock = jest.fn().mockReturnThis();
    sendMock = jest.fn();
    res = {
      json: jsonMock,
      status: statusMock,
      send: sendMock,
    };
  });

  afterEach(() => {
    mock.reset();
  });

  afterAll(() => {
    mock.restore();
  });

  it('should return data when the API call is successful', async () => {
    const mockData = {key: 'value'};
    mock
      .onGet(`${baseUrl}/api.xro/2.0/Reports/BalanceSheet`)
      .reply(200, mockData);

    await getData(req as Request, res as Response);

    expect(jsonMock).toHaveBeenCalledWith(mockData);
  });

  it('should return an error when the API call fails', async () => {
    mock.onGet(`${baseUrl}/api.xro/2.0/Reports/BalanceSheet`).reply(500);

    await getData(req as Request, res as Response);

    expect(statusMock).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith('Error calling the API');
  });
});
