import mailchimp from "@mailchimp/mailchimp_marketing";

export async function POST(req: Request) {
  const { email_address, status } = await req.json();

  // Set the mailchimp config with your API key and server prefix
  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY, //add yout API key here
    server: process.env.MAILCHIMP_SERVER_URL, //add server prefix here
  });

  // Set the Audience ID generated earlier to add email to that audience
  try {
    // Then try to add the member
    await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_LIST_ID as string, // add your audience ID here
      {
        email_address,
        status: status,
      }
    );

    //Create a custom success message
    return Response.json({
      message: `You've signed up! Check your email for updates from us soon!`,
    });
    /* eslint-disable  @typescript-eslint/no-explicit-any */
  } catch (err: any) {
    console.log("Error:", err);
    const errorResponse = JSON.parse(err.response.text);
    return new Response(null, {
      statusText: errorResponse.title,
      status: err.status || 500,
    });
  }
}
