/* eslint-disable @typescript-eslint/no-explicit-any */
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { WelcomeEmail } from "./src/email-templates/welcome";

export async function getEmailContent() {
  return renderToString(createElement(WelcomeEmail));
}

getEmailContent().then((emailContent) => {
  console.log(emailContent);
});
