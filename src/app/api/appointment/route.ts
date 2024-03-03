import { getAccessToken } from "@auth0/nextjs-auth0";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextApiResponse) => {
  const appointment = await req.json();

  const { accessToken } = await getAccessToken();

  try {
    const response = await axios.post(
      `${process.env.AUTH0_AUDIENCE}/appointment`,
      appointment,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    const newAppointment = response.data;

    return NextResponse.json(newAppointment);
  } catch (error: any) {
    console.error(error);
    res.status(error.status || 500).json({ message: error.message });
  }
};

export const GET = async (req: NextRequest, res: NextApiResponse) => {
  const maxDate = req.nextUrl.searchParams.get("MaxDate");
  const minDate = req.nextUrl.searchParams.get("MinDate");

  const { accessToken } = await getAccessToken();

  try {
    const response = await axios.get(
      `${process.env.AUTH0_AUDIENCE}/appointments?MaxDate=${maxDate}&MinDate=${minDate}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    const appointments = response.data;

    return NextResponse.json(appointments);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
