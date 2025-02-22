// export const getMessages = cashe(function getMessages() {
//   console.log("Fetching messages from db");
//   return db.prepare("SELECT * FROM messages").all();
// });

// This functio hereused in (lib folder) uses (cash) method which makes sure that that response from here is cashed for
// (one request cycle) for all pages, and when i fetch data again it revalidates.

// -------------------------------------------------------------------------

import Messages from "@/components/messages";
import { getMessages } from "@/lib/messages";

// export const revalidate = 5 // Allow the same behavour of {next: {revalidate: 5}} used in fetch
// export const dynamic = 'force-dynamic // Same as {cash: 'no-store} used in fetch

// *** use (revalidatePath()) function in the (server action)
// EX:- 1) revalidatePath(); revalidate his route in the (function) only
// EX:- 2) revalidatePath('/message'); revalidate his route (/message) in the (page) only
// EX:- 3) revalidatePath('/message', 'layout); revalidate his route (/message) in the (layout + it's children) only
// EX:- 4) revalidatePath('/', 'layout); revalidate (all) routes of (the whole app)

// *** use (revalidateTag('msg'))

export default async function MessagesPage() {
  // const response = await fetch(
  // "http://localhost:8080/messages"
  // , {
  //   cashe: "no-store", // Allow fetching data every time (No aggressive cashing), (This is the default of next 15)

  //   next: {
  //     revalidate: 5, // Use data in cash for 5 second and then allow user to send new requests
  //   },

  //   next: {
  //    tag: 'msg' // Adding a tag for this route
  //   }
  // }

  // This aggressive cashing happens in the app when calling an endpoint multiple times (with same credintials & params & headers)
  // );
  // const messages = await response.json();

  const messages = getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
