import { getAccessToken } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export const DELETE = async (req: NextRequest, { params }: any) => {
  const { id } = params;

  const hash = req.nextUrl.searchParams.get('hash');
  const encryptionIV = req.nextUrl.searchParams.get('iv');

  const { accessToken } = await getAccessToken();

  try {
    const response = await axios.delete(
      `${process.env.AUTH0_AUDIENCE}/appointment/${id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        data: { hash, encryptionIV },
      }
    );

    const deletedAppointmentId = response.data;

    return NextResponse.json(deletedAppointmentId);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.response.data.error },
      { status: 500 }
    );
  }
};
