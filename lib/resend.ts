import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID ?? "";
