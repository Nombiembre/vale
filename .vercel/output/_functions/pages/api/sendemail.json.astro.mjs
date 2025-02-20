import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const resend = new Resend("re_gboptFte_NvBZMFKztW6ae2xwLf1fv1NX");
const emailSource = "horizons@nombiembre.dev";
const emailDestination = "emanuelt.marin9@gmail.com";
const POST = async ({ request }) => {
  const body = await request.json();
  console.log("🚀 ~ file: sendEmail.json.ts:10 ~ body:", body);
  const { messageValue } = body;
  const send = await resend.emails.send({
    from: emailSource,
    to: emailDestination,
    subject: "📡 Incoming Transmission - Signal Home",
    html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #ddd; background: #080c1a; padding: 20px; border-radius: 8px; max-width: 800px; margin: 0 auto; border: 1px solid #333;">
      <h1 style="color: #6dd5fa; text-align: center;">📡 Incoming Transmission</h1>
      <p style="font-size: 16px; text-align: center; color: #bbb;">
        Una nueva señal ha sido enviada a través del espacio. A continuación, el mensaje recibido:
      </p>
      <div style="background: #11172d; padding: 15px; border-radius: 6px; border-left: 4px solid #6dd5fa;">
        <p style="font-size: 16px; color: #eee;">
          <strong>📜 Mensaje:</strong>
          <br>
          ${messageValue}
        </p>
      </div>
      <p style="font-size: 14px; color: #888; text-align: center; margin-top: 20px;">
        📡 La señal ha sido captada.
      </p>
    </div>
    <footer style="text-align: center; margin-top: 20px; font-size: 12px; color: #666;">
      <p>🌌 Signal Home - Transmissions Across the Stars</p>
    </footer>
    `,
    text: `🚀 Incoming Transmission
Message: ${messageValue}`
  });
  if (send.data) {
    console.log("Mail Send");
    return new Response(
      JSON.stringify({
        message: send.data
      }),
      {
        status: 200,
        statusText: "OK"
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        message: send.error
      }),
      {
        status: 500,
        statusText: "Internal Server Error"
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
