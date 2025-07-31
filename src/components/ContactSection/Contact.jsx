import { useState } from "react";
import Card from "../util/Card";

export default function Contact() {
	const [formData, setFormData] = useState({
		email: "",
		subject: "",
		message: ""
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState(null);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	async function handleEmailSend(e) {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus(null);

		try {
			const response = await fetch('/api/send-email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || 'Failed to send email');
			}

			setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
			setFormData({ email: "", subject: "", message: "" });
		} catch (error) {
			console.error("Error sending email:", error);
			setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<Card>
			<div className="text-2xl mb-6">Contact</div>
			<form onSubmit={handleEmailSend} className="space-y-4">
				<div>
					<label htmlFor="email" className="block mb-2 text-sm opacity-80">
						Your Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleInputChange}
						required
						placeholder="your.email@example.com"
						className="w-full rounded border-2 border-neutral-600 bg-neutral-800 p-3 text-white placeholder:text-neutral-500 focus:border-orange-500 focus:outline-none transition-colors"
					/>
				</div>
				
				<div>
					<label htmlFor="subject" className="block mb-2 text-sm opacity-80">
						Subject
					</label>
					<input
						type="text"
						id="subject"
						name="subject"
						value={formData.subject}
						onChange={handleInputChange}
						required
						placeholder="What's this about?"
						className="w-full rounded border-2 border-neutral-600 bg-neutral-800 p-3 text-white placeholder:text-neutral-500 focus:border-orange-500 focus:outline-none transition-colors"
					/>
				</div>
				
				<div>
					<label htmlFor="message" className="block mb-2 text-sm opacity-80">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleInputChange}
						required
						rows="6"
						placeholder="Your message here..."
						className="w-full rounded border-2 border-neutral-600 bg-neutral-800 p-3 text-white placeholder:text-neutral-500 focus:border-orange-500 focus:outline-none transition-colors resize-none"
					/>
				</div>
				
				<button
					type="submit"
					disabled={isSubmitting}
					className="w-full rounded border-2 border-orange-600 bg-orange-600 p-3 font-medium text-black transition-all duration-200 hover:bg-orange-500 hover:border-orange-500 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{isSubmitting ? 'Sending...' : 'Send Message'}
				</button>
				
				{submitStatus && (
					<div className={`mt-4 p-3 rounded ${
						submitStatus.type === 'success' 
							? 'bg-green-900/50 text-green-400 border border-green-600' 
							: 'bg-red-900/50 text-red-400 border border-red-600'
					}`}>
						{submitStatus.message}
					</div>
				)}
			</form>
		</Card>
	);
}
