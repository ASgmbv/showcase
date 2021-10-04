import sgMail from "@sendgrid/mail";

sgMail.setApiKey(
	// eslint-disable-next-line no-undef
	process.env.SENDGRID_KEY
);

export default async function handler(req, res) {
	if (req.method === "POST") {
		try {
			await sgMail.send({
				to: ["tim312emil@gmail.com", "alimbeksagymbaev@gmail.com"],
				from: "sagymbaev.dev@gmail.com",
				subject: "New Customer Request!",
				html: parseBody(req.body),
			});

			res.status(200).json({
				success: true,
			});
		} catch (error) {
			console.log({ error });
			res.status(400).json({
				success: false,
			});
		}
	}
}

function parseBody(text) {
	return `
  <div>
    ${Object.entries(text)
			.map(([key, value]) => `<span>${key}: ${value}</span> <br/><br/>`)
			.join("")}
  </div>
  `;
}
