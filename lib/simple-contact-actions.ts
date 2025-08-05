"use server"

export async function sendContactEmailSimple(email: string, message: string) {
  try {
   
    console.log("New contact form submission:")
    console.log("From:", email)
    console.log("Message:", message)
    console.log("To: pmbpgc@gmail.com")

    
    await new Promise((resolve) => setTimeout(resolve, 1000))

   
    return { success: true }
  } catch (error) {
    console.error("Email sending error:", error)
    return { success: false, error: "Failed to send message" }
  }
}
