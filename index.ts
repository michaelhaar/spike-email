/* eslint-disable @typescript-eslint/no-explicit-any */
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { WelcomeEmail } from "./src/email-templates/welcome";
import { OrderConfirmationEmail } from "./src/email-templates/order-confirmation";

type EmailTemplateId = "welcome" | "order-confirmation";

export function getEmailTemplateComponent(emailTemplateId: EmailTemplateId) {
  switch (emailTemplateId) {
    case "welcome":
      return WelcomeEmail;
    case "order-confirmation":
      return OrderConfirmationEmail;
    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-case-declarations
      const _exhaustiveCheck: never = emailTemplateId;
      throw new Error(`Invalid emailTemplateId: ${emailTemplateId}`);
  }
}

export async function getEmailHtml(
  emailTemplateId: EmailTemplateId
): Promise<string> {
  const emailComponent = getEmailTemplateComponent(emailTemplateId);

  return renderToString(createElement(emailComponent));
}

getEmailHtml("order-confirmation").then((emailHtml) => {
  console.log(emailHtml);
});
