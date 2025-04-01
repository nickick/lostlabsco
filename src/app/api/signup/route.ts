import mailchimp from "@mailchimp/mailchimp_marketing";
import md5 from "md5";

export async function POST(req: Request) {
  const { email_address, status } = await req.json();

  // Set the mailchimp config with your API key and server prefix
  mailchimp.setConfig({
    apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY, //add yout API key here
    server: process.env.NEXT_PUBLIC_MAILCHIMP_SERVER_URL, //add server prefix here
  });

  //Encrypt the email address using the MD5 hashing algorithm
  const subscriberHash = md5(email_address.toLowerCase());

  // Set the Audience ID generated earlier to add email to that audience
  try {
    // Then try to add the member
    await mailchimp.lists.addListMember(
      process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID as string, // add your audience ID here
      {
        email_address,
        status: status,
      }
    );

    //Create a custom success message
    return Response.json({
      message: `You've signed up! Check your email for updates from us soon!`,
    });
  } catch (err: any) {
    console.log("Error:", err);
    const errorResponse = JSON.parse(err.response.text);
    return new Response(null, {
      statusText: errorResponse.title,
      status: err.status || 500,
    });
  }
}
