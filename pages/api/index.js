import nodemailer from "nodemailer";

async function sendEmail({ email, subject, to }) {
	await nodemailer
		.createTransport({
			service: "Gmail",
			auth: {
				user: "demaloo.help@gmail.com",
				pass: "1415926535oolameD!",
			},
		})
		.sendMail({
			from: "alimbeksagymbaev@gmail.com",
			subject,
			to,
			text: email,
			// html,
		});
}

export default async function handler(req, res) {
	await sendEmail({
		email: "Hi Fabricio, whats up I got u a new client",
		subject: "A New Client Request",
		to: "sagymbaev.dev@gmail.com",
	});

	res.status(200).json({ name: "John Doe" });
}
