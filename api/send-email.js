import { Resend } from 'resend';

export default async function handler(req, res) {
  // Check if API key is configured
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    return res.status(500).json({ 
      error: 'Email service is not configured. Please add RESEND_API_KEY to environment variables.' 
    });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  if (req.method === 'POST') {
    try {
      const { email, subject, message } = req.body;
      
      const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'bhanuprabhath123@gmail.com',
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <h3>New message from portfolio contact form</h3>
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      });

      if (error) {
        return res.status(400).json({ error });
      }

      res.status(200).json({ data });
    } catch (error) {
      console.error('Error in send-email API:', error);
      res.status(500).json({ error: error.message || 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}