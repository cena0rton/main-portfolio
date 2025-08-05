"use server"

export async function sendContactEmail(email: string, message: string) {
  try {
    // Using a simple email service - you can replace this with your preferred service
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: "your_service_id", // You'll need to set this up
        template_id: "your_template_id", // You'll need to set this up
        user_id: "your_user_id", // You'll need to set this up
        template_params: {
          from_email: email,
          message: message,
          to_email: "pmbpgc@gmail.com",
          from_name: email.split("@")[0], // Use email prefix as name
        },
      }),
    })

    if (response.ok) {
      return { success: true }
    } else {
      return { success: false, error: "Failed to send email" }
    }
  } catch (error) {
    console.error("Email sending error:", error)
    return { success: false, error: "Network error occurred" }
  }
}
