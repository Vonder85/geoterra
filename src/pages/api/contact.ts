import type { APIRoute } from 'astro';
import sgMail from '@sendgrid/mail';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    let data;
    const contentType = request.headers.get('content-type') || '';

    // Support pour JSON et FormData
    if (contentType.includes('application/json')) {
      const text = await request.text();
      data = JSON.parse(text);
    } else if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      data = Object.fromEntries(formData.entries());
    } else {
      // Par défaut, essayer de parser en JSON
      const text = await request.text();
      if (text) {
        data = JSON.parse(text);
      } else {
        return new Response(JSON.stringify({ error: 'Corps de requête invalide' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    console.log('Data parsée:', data);

    // Validation des données
    const { firstName, lastName, email, phone, serviceType, projectType, location, surface, timeline, message } = data;

    if (!firstName || !lastName || !email || !phone || !serviceType || !projectType || !location || !message) {
      return new Response(JSON.stringify({ error: 'Tous les champs requis doivent être remplis' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Configuration SendGrid
    const apiKey = import.meta.env.SENDGRID_API_KEY;
    const templateId = import.meta.env.SENDGRID_TEMPLATE_ID;
    const fromEmail = import.meta.env.SENDGRID_FROM_EMAIL;
    const toEmail = import.meta.env.SENDGRID_TO_EMAIL;

    if (!apiKey || !templateId || !fromEmail || !toEmail) {
      console.error('Configuration SendGrid manquante');
      return new Response(JSON.stringify({ error: 'Configuration email manquante' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    sgMail.setApiKey(apiKey);

    // Préparation des données pour le template
    const msg = {
      to: toEmail,
      from: {email: fromEmail, name: "GEOTERRA"},
      replyTo: email,
      templateId: templateId,
      dynamicTemplateData: {
        prenom: firstName,
        nom: lastName,
        email: email,
        telephone: phone,
        type_etude: serviceType,
        type_projet: projectType,
        localisation: location,
        surface: surface || 'Non spécifié',
        echeance: timeline || 'Non spécifié',
        description: message,
      },
    };

    // Envoi de l'email
    await sgMail.send(msg);

    return new Response(JSON.stringify({ success: true, message: 'Email envoyé avec succès' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return new Response(JSON.stringify({
      error: 'Une erreur est survenue lors de l\'envoi de votre demande',
      details: error instanceof Error ? error.message : 'Erreur inconnue'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
