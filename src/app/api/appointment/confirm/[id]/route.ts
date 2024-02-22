import { getAccessToken } from '@auth0/nextjs-auth0';
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export const PUT = async (req: NextRequest, { params }: any) => {
  const { id } = params;

  const { accessToken } = await getAccessToken();

  try {
    const response = await axios.put(
      `${process.env.AUTH0_AUDIENCE}/appointment/confirm/${id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const appointmentInfo = response.data;

    return NextResponse.json(appointmentInfo);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.response.data.error },
      { status: 500 }
    );
  }
};
