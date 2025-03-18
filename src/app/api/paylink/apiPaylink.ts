import { IPayment } from '../../../../types/paylink';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getPayments() {
  try {
    const response = await fetch(`${API_URL}/paylink`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch paylinks');
    }

    const data = await response.json();
    return { payments: data.data };
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getPayment(id: string) {
  try {
    const response = await fetch(`${API_URL}/paylink/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch paylink');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return {};
  }
}

export async function createPayment(data: IPayment) {
  try {
    const response = await fetch(`${API_URL}/paylink`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to create paylink');
    }

    return 'Payment created successfully';
  } catch (error) {
    console.error(error);
  }
}
