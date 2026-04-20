import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'contact@portfolio.com';

    // Send email if Resend is configured
    if (RESEND_API_KEY) {
      const { Resend } = await import('resend');
      const resend = new Resend(RESEND_API_KEY);
      
      await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: [CONTACT_EMAIL],
        replyTo: email,
        subject: `[Contacto Portfolio] ${subject}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
                .container { border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px; background: #fff; }
                .header { font-size: 18px; font-weight: 600; margin-bottom: 16px; color: #111; }
                .field { margin-bottom: 16px; }
                .label { font-weight: 600; font-size: 14px; color: #666; margin-bottom: 4px; }
                .value { font-size: 15px; color: #111; }
                .message { background: #f9fafb; padding: 12px; border-radius: 6px; white-space: pre-wrap; }
                .footer { margin-top: 24px; font-size: 13px; color: #666; text-align: center; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">Nuevo mensaje de contacto</div>
                
                <div class="field">
                  <div class="label">Nombre</div>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value">${email}</div>
                </div>
                
                <div class="field">
                  <div class="label">Asunto</div>
                  <div class="value">${subject}</div>
                </div>
                
                <div class="field">
                  <div class="label">Mensaje</div>
                  <div class="message">${message}</div>
                </div>
                
                <div class="footer">
                  Mensaje recibido desde el formulario de contacto del portfolio
                </div>
              </div>
            </body>
          </html>
        `,
        text: `
          Nuevo mensaje de contacto
          
          Nombre: ${name}
          Email: ${email}
          Asunto: ${subject}
          
          Mensaje:
          ${message}
          
          ---
          Mensaje recibido desde el formulario de contacto del portfolio
        `,
      });
    } else {
      console.log('Contact form submission (RESEND_API_KEY not set):', { name, email, subject, message });
    }

    return NextResponse.json(
      { success: true, message: 'Mensaje enviado correctamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}
