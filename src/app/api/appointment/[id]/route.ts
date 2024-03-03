import { getAccessToken } from "@auth0/nextjs-auth0";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req: NextRequest, { params }: any) => {
  const appointmentData = await req.json();

  const { id } = params;

  const { accessToken } = await getAccessToken();

  try {
    const response = await axios.put(
      `${process.env.AUTH0_AUDIENCE}/appointment/${id}`,
      appointmentData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    const appointmentInfo = response.data;

    return NextResponse.json(appointmentInfo);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.response.data.error },
      { status: 500 },
    );
  }
};

export const DELETE = async (req: NextRequest, { params }: any) => {
  const { id } = params;

  const { accessToken } = await getAccessToken();

  try {
    const response = await axios.delete(
      `${process.env.AUTH0_AUDIENCE}/appointment/${id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    const deletedAppointmentId = response.data;

    return NextResponse.json(deletedAppointmentId);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.response.data.error },
      { status: 500 },
    );
  }
};
